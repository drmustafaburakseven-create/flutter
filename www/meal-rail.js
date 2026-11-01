(function(root){
 const bound=new WeakSet();
 function bind(rail,commit){
  if(bound.has(rail))return;bound.add(rail);
  let ready=false,interacted=false,held=false,used=false,moved=false,suppressUntil=0,timer;
  const center=()=>{if(used)return;ready=false;rail.scrollLeft=rail.clientWidth;requestAnimationFrame(()=>{ready=true})};
  const settle=()=>{if(!ready||!interacted||held||used||!rail.isConnected)return;const w=rail.clientWidth,x=rail.scrollLeft;if(w<=0)return;const dir=x<=2?1:x>=2*w-2?-1:0;if(dir){used=true;clearTimeout(timer);commit(dir)}};
  const later=()=>{clearTimeout(timer);timer=setTimeout(settle,180)};
  rail.addEventListener('scroll',()=>{if(!ready)return;const dx=rail.clientWidth-rail.scrollLeft;if(Math.abs(dx)>8)moved=true;const yes=rail.querySelector('.accept'),no=rail.querySelector('.reject');if(yes)yes.style.opacity=dx>0?Math.min(1,dx/65):0;if(no)no.style.opacity=dx<0?Math.min(1,-dx/65):0;if(!held)later()},{passive:true});
  rail.addEventListener('touchstart',()=>{interacted=true;held=true;moved=false;clearTimeout(timer)},{passive:true});
  rail.addEventListener('touchend',()=>{held=false;if(moved)suppressUntil=Date.now()+500;later()},{passive:true});
  rail.addEventListener('touchcancel',()=>{held=false;clearTimeout(timer);center()},{passive:true});
  rail.addEventListener('pointerdown',()=>{interacted=true});
  rail.addEventListener('wheel',()=>{interacted=true},{passive:true});
  rail.addEventListener('scrollend',settle);
  rail.addEventListener('click',e=>{if(Date.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation()}},true);
  rail.addEventListener('keydown',e=>{if(e.target!==rail)return;if(e.key==='ArrowLeft'||e.key==='ArrowRight'){e.preventDefault();if(!used){used=true;commit(e.key==='ArrowRight'?1:-1)}}});
  center();
  if(typeof ResizeObserver!=='undefined'){const observer=new ResizeObserver(()=>{if(!rail.isConnected){observer.disconnect();return}if(!held)center()});observer.observe(rail)}
 }
 if(typeof module==='object')module.exports={bind};else root.MMMealRail={bind};
})(typeof globalThis!=='undefined'?globalThis:this);
