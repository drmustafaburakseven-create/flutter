(function(root,factory){const api=factory();if(typeof module==='object'&&module.exports)module.exports=api;else root.MMServingFrame=api;})(typeof globalThis!=='undefined'?globalThis:this,function(){
  function frame(id,stage,aspect){
    const right=stage===9||stage===12, bottom=stage===12||stage===18;
    let x=right?0.55:0,y=bottom?0.615:0.135,w=0.45,h=bottom?0.195:0.24;
    if(id==='avocado-single'){y=bottom?(stage===12?0.615:0.59):0.145;h=bottom?(stage===12?0.195:0.22):0.255;}
    if(id==='raspberry'){y=bottom?0.59:0.115;h=bottom?0.25:0.26;}
    return {x,y,w,h,ratio:w*aspect/h,corner:bottom?'none':right?'left':'right'};
  }
  return {frame};
});
