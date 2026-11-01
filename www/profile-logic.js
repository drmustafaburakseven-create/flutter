(function(root){
const norm=s=>String(s||'').toLocaleLowerCase('tr-TR').trim();
function dateKey(d=new Date()){return [d.getFullYear(),String(d.getMonth()+1).padStart(2,'0'),String(d.getDate()).padStart(2,'0')].join('-')}
function parseDate(s){if(!/^\d{4}-\d{2}-\d{2}$/.test(s||''))return null;const [y,m,d]=s.split('-').map(Number),v=new Date(y,m-1,d,12);return dateKey(v)===s?v:null}
function ageMonths(birth,now=new Date()){const d=parseDate(birth);if(!d||dateKey(d)>dateKey(now))return null;return (now.getFullYear()-d.getFullYear())*12+now.getMonth()-d.getMonth()-(now.getDate()<d.getDate()?1:0)}
function nextMonth(s){const d=parseDate(s);if(!d)return null;const day=d.getDate();d.setDate(1);d.setMonth(d.getMonth()+1);d.setDate(Math.min(day,new Date(d.getFullYear(),d.getMonth()+1,0).getDate()));return dateKey(d)}
function due(p,now=new Date()){return !!p&&!!p.nextReview&&p.nextReview<=dateKey(now)&&(!p.snoozeUntil||p.snoozeUntil<=dateKey(now))}
function allergens(r,p){if(!p)return [];const labels=[...(r.allergens||[]),...(r.possibleAllergens||[])].map(norm);const text=norm((r.ingredients||[]).map(i=>i.name+' '+i.amount).join(' '));return (p.allergies||[]).filter(a=>labels.includes(norm(a))||text.includes(norm(a)))}
function permitted(r,p){return !allergens(r,p).length}
const api={dateKey,parseDate,ageMonths,nextMonth,due,allergens,permitted};if(typeof module!=='undefined')module.exports=api;root.MMLogic=api;
})(typeof window!=='undefined'?window:globalThis);
