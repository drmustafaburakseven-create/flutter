/* Recipe-only Story art. No child profile fields are read or included. */
(function(root){
 function wrap(ctx,text,width){const lines=[];let line='';for(const word of String(text).split(/\s+/)){const next=line?line+' '+word:word;if(ctx.measureText(next).width>width&&line){lines.push(line);line=word}else line=next}if(line)lines.push(line);return lines}
 async function create(recipe,imageURL,page=0){
  const img=new Image();img.src=imageURL;await img.decode();
  const canvas=document.createElement('canvas');canvas.width=1080;canvas.height=1920;const ctx=canvas.getContext('2d');
  const rounded=(x,y,w,h,r,fill,stroke)=>{ctx.beginPath();ctx.roundRect(x,y,w,h,r);ctx.fillStyle=fill;ctx.fill();if(stroke){ctx.lineWidth=4;ctx.strokeStyle=stroke;ctx.stroke()}};
  const text=(s,x,y,size,color,bold=false,align='left')=>{ctx.font=`${bold?700:400} ${size}px Arial`;ctx.fillStyle=color;ctx.textAlign=align;ctx.fillText(s,x,y)};
  ctx.fillStyle='#fff9ef';ctx.fillRect(0,0,1080,1920);
  rounded(66,72,948,142,36,'#d71858');text('MİNİK MOLA TARİF',540,168,54,'white',true,'center');
  text('Dr. Mustafa Burak Seven',72,263,33,'#08274a',true);ctx.fillStyle='#ffd447';ctx.fillRect(72,288,936,9);
  let size=84,lines;do{ctx.font=`700 ${size}px Arial`;lines=wrap(ctx,recipe.title,936);if(lines.length<=3)break;size-=2}while(size>40);lines.forEach((line,i)=>text(line,72,397+i*(size+9),size,'#08274a',true));
  rounded(78,657,948,690,60,'#ffd447');rounded(63,642,948,690,60,'white','#08274a');
  const ratio=Math.min(900/img.width,648/img.height),iw=img.width*ratio,ih=img.height*ratio;ctx.drawImage(img,87+(900-iw)/2,663+(648-ih)/2,iw,ih);
  text('Çocuğum bunu',540,1483,69,'#d71858',true,'center');text('sevdi ♥',540,1567,69,'#d71858',true,'center');
  text(`${recipe.minAge}+ ay · doku örneği  |  ≈ ${recipe.steps.reduce((n,s)=>n+(s.minutes||0),0)} dk`,540,1644,39,'#38546c',false,'center');
  const allergens=[...new Set([...recipe.allergens,...(recipe.possibleAllergens||[])])].join(', ');const note=allergens?'Alerjenler / olası içerikler: '+allergens:'İçerikleri çocuğunun alerjilerine göre kontrol et.';ctx.font='33px Arial';wrap(ctx,note,936).forEach((line,i)=>text(line,540,1725+i*42,33,'#38546c',false,'center'));
  text('Tarifin tamamı Minik Mola’da · Sofrada birlikte',540,1857,30,'#08274a',false,'center');
  if(page>0){const content=pages(recipe)[page];ctx.fillStyle='#fff9ef';ctx.fillRect(0,0,1080,1920);text('minik mola',72,130,68,'#000',true);text('SOFRADA BİRLİKTE',72,180,25,'#152e51');ctx.font='700 58px Arial';wrap(ctx,recipe.title,936).forEach((line,i)=>text(line,72,275+i*70,58,'#152e51',true));ctx.drawImage(img,390,430,300,300);ctx.font='700 45px Arial';wrap(ctx,content.title,936).forEach((line,i)=>text(line,72,815+i*54,45,'#1854b7',true));ctx.font='39px Arial';wrap(ctx,content.text,936).forEach((line,i)=>text(line,72,1000+i*56,39,'#152e51'));text(`${recipe.minAge}+ ay · doku örneği`,72,1730,30,'#51647d');ctx.font='27px Arial';wrap(ctx,note,936).forEach((line,i)=>text(line,72,1780+i*35,27,'#51647d'));text(`Dr. Mustafa Burak Seven · ${page+1}/${pages(recipe).length}`,72,1870,27,'#51647d');}
  const blob=await new Promise((resolve,reject)=>canvas.toBlob(v=>v?resolve(v):reject(Error('PNG oluşturulamadı')),'image/png'));return {blob,canvas};
 }
 function chunks(text){const result=[];let current='';for(const word of text.split(/\s+/)){if((current+' '+word).length>350){result.push(current);current=''}current+=(current?' ':'')+word}if(current)result.push(current);return result}
 function pages(r){return [{title:'Çocuğum bunu sevdi',text:''},...chunks(r.yield+' '+r.ingredients.map(i=>i.amount+' '+i.name+(i.optional?' (isteğe bağlı)':'')).join(' · ')).map(text=>({title:'Malzemeler',text})),...r.steps.flatMap((s,i)=>chunks(s.text).map((text,j)=>({title:`${i+1}. ${s.title}${j?' · devam':''}`,text})))];}
 root.MMStory={create,pages};
})(globalThis);
