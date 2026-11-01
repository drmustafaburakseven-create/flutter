(function(root){
  function bind(el,commit,visual=()=>{}){
    let start=null,dx=0,drag=false,suppressUntil=0;
    el.style.touchAction='pan-y pinch-zoom';
    const reset=()=>{start=null;dx=0;drag=false;visual(0)};
    const begin=(x,y,id)=>{start={x,y,id};dx=0;drag=false};
    const move=(x,y,e)=>{
      if(!start)return;
      dx=x-start.x;const dy=y-start.y;
      if(!drag&&Math.abs(dy)>10&&Math.abs(dy)>=Math.abs(dx)){reset();return}
      if(!drag&&Math.abs(dx)>10&&Math.abs(dx)>Math.abs(dy)*1.2)drag=true;
      if(drag){if(e.cancelable)e.preventDefault();visual(dx)}
    };
    const finish=(x,y,e)=>{
      if(!start)return;
      move(x,y,e);
      const direction=drag&&Math.abs(dx)>=48?Math.sign(dx):0;
      if(drag)suppressUntil=Date.now()+500;
      reset();if(direction)commit(direction);
    };
    // Touch events handle Safari directly. Ignore their companion pointer events.
    el.addEventListener('touchstart',e=>{
      if(e.touches.length!==1){reset();return}
      const t=e.touches[0];begin(t.clientX,t.clientY,t.identifier);
    },{passive:true});
    el.addEventListener('touchmove',e=>{
      if(e.touches.length!==1){reset();return}
      const t=Array.from(e.touches).find(t=>t.identifier===start?.id);
      if(t)move(t.clientX,t.clientY,e);
    },{passive:false});
    el.addEventListener('touchend',e=>{
      const t=Array.from(e.changedTouches).find(t=>t.identifier===start?.id);
      if(t)finish(t.clientX,t.clientY,e);
    },{passive:false});
    el.addEventListener('touchcancel',reset);
    el.addEventListener('pointerdown',e=>{
      if(e.pointerType==='touch'||e.button!==0)return;
      begin(e.clientX,e.clientY,e.pointerId);
    });
    el.addEventListener('pointermove',e=>{
      if(e.pointerType==='touch'||!start||e.pointerId!==start.id)return;
      move(e.clientX,e.clientY,e);
      if(drag&&el.setPointerCapture)el.setPointerCapture(e.pointerId);
    });
    el.addEventListener('pointerup',e=>{
      if(e.pointerType!=='touch'&&start&&e.pointerId===start.id)finish(e.clientX,e.clientY,e);
    });
    el.addEventListener('pointercancel',e=>{if(e.pointerType!=='touch')reset()});
    el.addEventListener('click',e=>{if(Date.now()<suppressUntil){e.preventDefault();e.stopImmediatePropagation()}},true);
    el.addEventListener('keydown',e=>{if(e.target===el&&(e.key==='ArrowLeft'||e.key==='ArrowRight')){e.preventDefault();commit(e.key==='ArrowRight'?1:-1)}});
  }
  if(typeof module==='object')module.exports={bind};else root.MMSwipe={bind};
})(typeof globalThis!=='undefined'?globalThis:this);
