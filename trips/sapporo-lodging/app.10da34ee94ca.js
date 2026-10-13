const MODEL = {
  "assumptions": {
    "adults": 10,
    "nights": 4,
    "JPY_per_USD": 150,
    "airport_group_JPY": 66060,
    "private_bedroom_shortfall_USD_per_night": 75,
    "small_double_couple_USD_per_night": 20,
    "twin_couple_USD_per_night": 25,
    "bathing_rooms_target": 3,
    "bathroom_shortfall_USD_per_night": 30,
    "bus_to_Hirafu_excluded_JPY": 60000
  },
  "rows": [
    {
      "name": "Miki",
      "quote": 426600,
      "tax": 12000,
      "daily": 16800,
      "transfer": 53020,
      "rooms": 4,
      "small": 0,
      "twins": 0,
      "baths": 4,
      "risk": 0.068,
      "flag": 500,
      "raw": 2924.0,
      "cash": 3829.866666666667,
      "comfort": 800,
      "risk_usd": 193.39200000000002,
      "adjusted": 4823.258666666667
    },
    {
      "name": "CHILLandSTAY",
      "quote": 575000,
      "tax": 12000,
      "daily": 20000,
      "transfer": 53020,
      "rooms": 3,
      "small": 3,
      "twins": 0,
      "baths": 2,
      "risk": 0,
      "flag": 0,
      "raw": 3913.3333333333335,
      "cash": 4840.533333333334,
      "comfort": 960,
      "risk_usd": 0.0,
      "adjusted": 5800.533333333334
    },
    {
      "name": "Lavender",
      "quote": 574980,
      "tax": 12000,
      "daily": 18400,
      "transfer": 53020,
      "rooms": 5,
      "small": 0,
      "twins": 3,
      "baths": 2,
      "risk": 0.038,
      "flag": 0,
      "raw": 3913.2,
      "cash": 4829.733333333334,
      "comfort": 420,
      "risk_usd": 145.6616,
      "adjusted": 5395.394933333334
    },
    {
      "name": "Bryce",
      "quote": 645733,
      "tax": 12000,
      "daily": 0,
      "transfer": 0,
      "rooms": 2,
      "small": 0,
      "twins": 0,
      "baths": 2,
      "risk": 0.038,
      "flag": 100,
      "raw": 4384.886666666666,
      "cash": 4825.286666666666,
      "comfort": 1120,
      "risk_usd": 163.58569333333332,
      "adjusted": 6108.872359999999
    },
    {
      "name": "RESTIA",
      "quote": 757350,
      "tax": 16000,
      "daily": 0,
      "transfer": 0,
      "rooms": 3,
      "small": 0,
      "twins": 1,
      "baths": 3,
      "risk": 0.038,
      "flag": 0,
      "raw": 5155.666666666667,
      "cash": 5596.066666666667,
      "comfort": 700,
      "risk_usd": 191.862,
      "adjusted": 6487.928666666667
    },
    {
      "name": "Snow Light",
      "quote": 884786,
      "tax": 16000,
      "daily": 0,
      "transfer": 0,
      "rooms": 3,
      "small": 0,
      "twins": 1,
      "baths": 3,
      "risk": 0.038,
      "flag": 0,
      "raw": 6005.24,
      "cash": 6445.639999999999,
      "comfort": 700,
      "risk_usd": 224.14578666666668,
      "adjusted": 7369.785786666666
    },
    {
      "name": "Mercure",
      "quote": 1018500,
      "tax": 16000,
      "daily": 0,
      "transfer": 0,
      "rooms": 5,
      "small": 0,
      "twins": 1,
      "baths": 5,
      "risk": 0.1,
      "flag": 0,
      "raw": 6896.666666666667,
      "cash": 7337.066666666667,
      "comfort": 100,
      "risk_usd": 679.0,
      "adjusted": 8116.066666666667
    },
    {
      "name": "WELLZ N5 8BR",
      "quote": 992100,
      "tax": 16000,
      "daily": 0,
      "transfer": 0,
      "rooms": 8,
      "small": 0,
      "twins": 0,
      "baths": 4,
      "risk": 0.038,
      "flag": 0,
      "raw": 6720.666666666667,
      "cash": 7161.066666666667,
      "comfort": 0,
      "risk_usd": 251.332,
      "adjusted": 7412.398666666667
    },
    {
      "name": "Polaris",
      "quote": 1193800,
      "tax": 16000,
      "daily": 16800,
      "transfer": 53020,
      "rooms": 5,
      "small": 0,
      "twins": 2,
      "baths": 3,
      "risk": 0.068,
      "flag": 0,
      "raw": 8065.333333333333,
      "cash": 8971.199999999999,
      "comfort": 200,
      "risk_usd": 541.1893333333334,
      "adjusted": 9712.389333333333
    },
    {
      "name": "THE KNOT",
      "quote": 1216120,
      "tax": 16000,
      "daily": 0,
      "transfer": 0,
      "rooms": 5,
      "small": 0,
      "twins": 0,
      "baths": 5,
      "risk": 0,
      "flag": 200,
      "raw": 8214.133333333333,
      "cash": 8654.533333333333,
      "comfort": 200,
      "risk_usd": 0,
      "adjusted": 8854.533333333333
    }
  ]
};
const metadata = [
{label:'Miki',walk:[20,25],odori:'20–25 min to west Odori; ~40 min to central Odori',pickup:null,bus:'Prince ~2–3 km driving; two-jumbo transfer assumed',beds:'4 real-bed bedrooms with 7 doubles + 4 singles; 2 additional futon rooms. 4 bathing rooms / 4 WCs.',refund:'Full refund within 24h of booking only. Until Jan 28, 3pm JST: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Unresolved winter heating and maintenance complaints, including inadequate basement heating during a snowstorm. Not recommended as-is.',id:'1201843980569920701'},
{label:'CHILLandSTAY',walk:[50,60],odori:'50–60 min on foot; 20–25 min by subway/walk',pickup:null,bus:'Mercure ~4–5 km; Excel also sensible. Two-jumbo transfer assumed.',beds:'3 bedrooms: D / D + small-D / small-D + small-D. 2 bathing rooms / 2 WCs. Three couples use small doubles of unpublished width.',refund:'Full refund before Feb 3, 3pm JST. Until Feb 4, 3pm: first night + service fee lost; later entitlement not established.',caveat:'Bedroom sharing; small-double widths are unconfirmed. No adverse heating issue identified in the limited visible review check.',id:'907618662938369995'},
{label:'Lavender',walk:[30,35],odori:'30–35 min on foot; tram toward Susukino then walk',pickup:null,bus:'Mercure ~2–3 km; Excel ~15–20 min walk alternative. Two-jumbo transfer used for ski luggage.',beds:'5 private bedrooms: D / D / twin / twin / twin. 2 bathing rooms / 2 WCs. Three couples use separate twins.',refund:'Full refund before Jan 5, 3pm JST. Until Jan 28, 3pm: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Twins are not verified joinable. Affordable bedroom privacy if three couples accept separate beds; departure transport remains unconfirmed.',id:'1438712976331240877'},
{label:'Bryce’s “big nice”',short:'Bryce',walk:[8,12],odori:'8–12 min to west Odori; 20–25 min to central Odori',pickup:[6,10],bus:'Prince: 6–10 min walk',beds:'5 doubles, 140 × 195 cm, split across just 2 bedrooms (2D / 3D). 2 full bathrooms.',refund:'Full refund before Jan 5, 4pm JST. Until Jan 28, 4pm: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Host warns excessive hot-water/electricity use can interrupt supply. Worn condition/noise also reported; severe bedroom sharing. Not recommended as-is.',id:'40599431'},
{label:'RESTIA SOLACE',short:'RESTIA',walk:[8,12],odori:'8–12 min to west Odori; 20–25 min to central Odori',pickup:[5,5],bus:'Prince: ~5 min walk',beds:'3 bedrooms: 2Q / 2Q / 3 singles. 3 bathing rooms / 2 WCs. Fifth couple uses singles; two queen bedrooms shared.',refund:'Full refund before Jan 5, 3pm JST. Until Jan 28, 3pm: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Smoke/CO alarms not reported; this does not prove absence or resolution. Conditional option. Tax budget may be ¥4,000 lower if confirmed.',id:'1555020545993079189'},
{label:'Snow Light',walk:[8,12],odori:'8–12 min to west Odori; 20–25 min to central Odori',pickup:[4,6],bus:'Prince: 4–6 min walk',beds:'3 bedrooms: 2Q / 2Q / 3 singles. 3 bathing rooms / 2 WCs. Fifth couple uses singles; two queen bedrooms shared.',refund:'Full refund before Jan 5, 4pm JST. Until Jan 28, 4pm: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Same functional layout as cheaper RESTIA. Opened January 2026, with limited winter history; no heating complaint identified in the limited visible review check.',id:'1542035294771933945'},
{label:'Mercure',walk:[10,12],odori:'10–12 min walk to Odori',pickup:[0,0],bus:'Mercure: own lobby, no transfer walk',beds:'Proposed 5 private rooms / 5 private baths: 4 queens + 1 twin. Fifth couple uses separate beds.',refund:'Nonrefundable: entire ¥1,018,500 lodging quote at risk, including cancellation/modification.',caveat:'Only four queens displayed. Aggregate five-room price uses room cards, not a selected five-room basket; inventory must be revalidated.',url:'https://all.accor.com/booking/en/accor/hotel/7023?dateIn=2027-02-04&nights=4&compositions=2,2,2,2,2'},
{label:'WELLZ N5',walk:[15,20],odori:'15–20 min to west/central Odori; longer to Susukino',pickup:[5,10],bus:'Keio Plaza: estimated 5–10 min walk; exact package identity remains conditional',beds:'4 apartments / 8 bedrooms / 4 full baths. Five couples can take 4 king bedrooms + 1 bedroom with a 140cm double, without assigning small doubles.',refund:'Full refund before Jan 5, 3pm JST. Until Jan 28, 3pm: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'Listing permit identifies another unit in the building; exact units/registration need reconciliation. Ambiguous headcount-change fee excluded from total. Hot water takes 3–7 min; no table for ten established. Free shuttle caps at nine. Conditional.',id:'1651876800068219600'},
{label:'Polaris',walk:null,odori:'Walking time not provided. Subway two stops to Odori: 15–20 min door-to-door.',pickup:null,bus:'Mercure ~2–3 km estimate; two-jumbo transfer assumed',beds:'5 bedrooms with 6 doubles + 4 singles; 3 bathing rooms / 3 WCs. Private-room allocation puts two couples in twins; five shared beds are possible only by sharing bedrooms.',refund:'Full refund within 24h of booking only. Until Jan 28, 3pm JST: lose 50% of nights + service fee; after that, full quote at risk.',caveat:'High cost and remote. Convenience uses private-room allocation with two twin couples. No fabricated walking time or location score.',id:'1665075009906111298'},
{label:'THE KNOT',walk:[5,8],odori:'5–8 min walk to Odori',pickup:[3,5],bus:'Mercure: 3–5 min walk (not THE KNOT lobby)',beds:'5 private 160cm queen rooms, 16 m² each, with 5 private baths.',refund:'Refundable through Feb 2, 23:59 JST. Feb 3, check-in and no-show: 100% loss.',caveat:'Adjacent demolition scheduled through August 2027, normally 8am–5pm, with possible exceptions. No special noise-proof room placement confirmed.',url:'https://hotel-the-knot.jp/sapporo/en/'}
];
const SHORT_NAMES=['Miki','CHILL','Lavender','Bryce','RESTIA','Snow Light','Mercure','WELLZ','Polaris','KNOT'];
const rows=MODEL.rows.map((r,i)=>({...r,...metadata[i],short:SHORT_NAMES[i],index:i+1}));
const $=id=>document.getElementById(id), mean=a=>(a[0]+a[1])/2;
let selected=2;
const money=n=>new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(n);
const yen=n=>'¥'+Math.round(n).toLocaleString('en-US');
function value(r){return r[$('cost').value]/Number($('unit').value)}
function locationScore(r){if(!r.walk)return null;const w=+$('location').value/100;return w*Math.max(0,100*(1-mean(r.walk)/60))+(1-w)*(r.pickup?Math.max(0,100*(1-mean(r.pickup)/20)):0)}
function bedScore(r){let weights=['privacy','bed','bath'].map(id=>+$(id).value);if(!weights.some(Boolean))weights=[1,1,1];const fit=[Math.min(r.rooms,5)/5,(5-r.twins-.5*r.small)/5,Math.min(r.baths,5)/5];return 100*fit.reduce((sum,n,i)=>sum+n*weights[i],0)/weights.reduce((a,b)=>a+b)}
function comfortOpacity(r){const scores=rows.map(bedScore),lo=Math.min(...scores),hi=Math.max(...scores);return .18+.82*(hi===lo?.5:(bedScore(r)-lo)/(hi-lo))}
function placeLabels(points,bounds){
 const ctx=document.createElement('canvas').getContext('2d');ctx.font='600 12px system-ui';
 const boxes=[];
 const overlaps=(a,b,gap=4)=>a.x<b.x+b.w+gap&&a.x+a.w+gap>b.x&&a.y<b.y+b.h+gap&&a.y+a.h+gap>b.y;
 for(const point of [...points].sort((a,b)=>a.y-b.y||a.x-b.x)){
  const w=Math.ceil(ctx.measureText(point.r.short).width)+2,h=16,candidates=[];
  for(const dy of [-26,10,-46,30,-66,50,-86,70])for(const dx of [-w/2,15,-w-15])candidates.push({x:point.x+dx,y:point.y+dy,w,h});
  for(let yy=bounds.top;yy<=bounds.bottom-h;yy+=6)for(let xx=bounds.left;xx<=bounds.right-w;xx+=6)candidates.push({x:xx,y:yy,w,h});
  const valid=candidates.filter(b=>b.x>=bounds.left&&b.x+b.w<=bounds.right&&b.y>=bounds.top&&b.y+b.h<=bounds.bottom&&!boxes.some(other=>overlaps(b,other))&&!points.some(p=>overlaps(b,{x:p.x-10,y:p.y-10,w:20,h:20},2)));
  const distance=b=>Math.hypot(Math.max(b.x-point.x,0,point.x-b.x-b.w),Math.max(b.y-point.y,0,point.y-b.y-b.h));
  valid.sort((a,b)=>distance(a)-distance(b));
  const box=valid[0];if(!box)throw new Error('No collision-free label position');boxes.push(box);point.box=box;
 }
 return points;
}
function choose(i,scroll=false){selected=i;render();if(scroll){$('detail').scrollIntoView({behavior:matchMedia('(prefers-reduced-motion: reduce)').matches?'auto':'smooth',block:'start'});$('detail').focus({preventScroll:true})}}
function render(){
$('locationOut').textContent=$('location').value+'% Odori / '+(100-$('location').value)+'% pickup';['privacy','bed','bath'].forEach(id=>$(id+'Out').textContent=$(id).value);
const width=$('plot').clientWidth,height=470,m={l:50,r:24,t:35,b:58},pw=width-m.l-m.r,ph=height-m.t-m.b;
const vals=rows.map(value),span=Math.max(...vals)-Math.min(...vals),low=Math.min(...vals)-span*.12,high=Math.max(...vals)+span*.12;
const x=n=>m.l+(n-low)/(high-low)*pw,y=n=>m.t+12+(100-n)/100*(ph-24);
let svg=`<title>Cost versus estimated location score</title><desc>Tap named dots to compare price, bed/bath convenience, walking times, refund terms and caveats. Polaris has no walking estimate and is below the chart.</desc><rect x="${m.l}" y="${m.t}" width="${pw}" height="${ph}" fill="none" class="grid"/>`;
for(let n=0;n<=100;n+=25){svg+=`<line x1="${m.l}" x2="${width-m.r}" y1="${y(n)}" y2="${y(n)}" class="grid"/><text x="${m.l-9}" y="${y(n)+4}" text-anchor="end">${n}</text>`}
for(let i=0;i<4;i++){const n=low+(high-low)*i/3;svg+=`<text x="${x(n)}" y="${height-m.b+24}" text-anchor="${i===0?'start':i===3?'end':'middle'}">${money(n)}</text>`}
svg+=`<text x="${m.l}" y="18" class="axis-title" data-axis="y">Location score · 0–100</text><text x="${width/2}" y="${height-8}" text-anchor="middle" class="axis-title" data-axis="x">${$('cost').value==='cash'?'All-in cash':'Stay + tax'} · ${$('unit').value==='10'?'USD / person':'USD / group'}</text>`;
const points=placeLabels(rows.filter(r=>r.walk).map(r=>({r,x:x(value(r)),y:y(locationScore(r))})),{left:m.l+3,right:width-m.r-3,top:m.t+3,bottom:height-m.b-3});
points.forEach(({r,x:xx,y:yy,box:b})=>{const ex=Math.max(b.x,Math.min(xx,b.x+b.w)),ey=Math.max(b.y,Math.min(yy,b.y+b.h)),dist=Math.hypot(ex-xx,ey-yy);svg+=`<g role="button" tabindex="0" data-index="${r.index-1}" aria-label="${r.label}, ${money(value(r))}, location ${locationScore(r).toFixed(0)}, comfort ${bedScore(r).toFixed(0)}. Open details." style="cursor:pointer"><title>${r.label}</title><line class="leader" x1="${xx+(ex-xx)*10/dist}" y1="${yy+(ey-yy)*10/dist}" x2="${ex}" y2="${ey}"/><circle cx="${xx}" cy="${yy}" r="22" fill="transparent"/><circle class="comfort-dot" cx="${xx}" cy="${yy}" r="9" fill="var(--accent)" fill-opacity="${comfortOpacity(r)}" stroke="${selected===r.index-1?'var(--fg)':'var(--accent)'}" stroke-width="${selected===r.index-1?2.5:1}"/><text class="dot-label" x="${b.x}" y="${b.y+12}">${r.short}</text></g>`});
const scores=rows.map(bedScore);$('comfortRange').textContent=`Bed/bath score · colors span ${Math.round(Math.min(...scores))}–${Math.round(Math.max(...scores))}/100 across current options`;
$('plot').setAttribute('viewBox',`0 0 ${width} ${height}`);$('plot').innerHTML=svg;
$('plot').querySelectorAll('[data-index]').forEach(el=>{el.onclick=()=>choose(+el.dataset.index,true);el.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();choose(+el.dataset.index,true)}}});
const pol=rows[8];$('unscored').innerHTML=`<p class="guide">Location unscored · no Odori walking estimate</p><button type="button" id="polaris"><span class="swatch" style="--comfort-opacity:${comfortOpacity(pol)}"></span> Polaris · ${money(value(pol))} · convenience ${Math.round(bedScore(pol))}/100</button>`;$('polaris').onclick=()=>choose(8,true);
$('options').innerHTML=rows.map((r,i)=>`<button type="button" data-i="${i}" aria-pressed="${i===selected}"><span class="swatch" style="--comfort-opacity:${comfortOpacity(r)}"></span><span class="name">${r.short||r.label}</span><span class="amount">${money(value(r))}</span></button>`).join('');$('options').querySelectorAll('button').forEach(b=>b.onclick=()=>choose(+b.dataset.i,true));
const r=rows[selected],loc=locationScore(r),url=r.url||`https://www.airbnb.com/rooms/${r.id}?check_in=2027-02-04&check_out=2027-02-08&adults=10&currency=JPY`;
$('detail').innerHTML=`<div class="eyebrow">Lodging details</div><h2>${r.label}</h2><div class="price">${money(value(r))} <small style="font-size:14px;font-weight:400">${$('unit').value==='10'?'per person':'for 10'}</small></div><p class="subtle">${$('cost').value==='cash'?'Modeled all-in cash':'Stay with estimated local tax'} · four nights</p><div class="facts"><div><span>Location · estimated</span><strong>${loc===null?'Unscored':Math.round(loc)+'/100'}</strong></div><div><span>Bed/bath · derived</span><strong>${Math.round(bedScore(r))}/100</strong></div><div><span>Stay + tax / group</span><strong>${money(r.raw)}</strong></div><div><span>All-in / group</span><strong>${money(r.cash)}</strong></div></div><p class="warning">${r.caveat}</p><h3>Beds & bathing rooms · checked layout</h3><p>${r.beds}</p><h3>On foot & Feb 8 departure · estimates</h3><p>Odori: ${r.odori}<br>Pickup: ${r.bus}</p><h3>Refund terms · checked policy</h3><p>${r.refund}</p><details><summary>Cost & score calculation</summary><p class="formula">Lodging quote ${yen(r.quote)} + tax budget ${yen(r.tax)} = ${money(r.raw)} stay. Airport ${yen(MODEL.assumptions.airport_group_JPY)} + daily transit ${yen(r.daily)} + pickup transfer ${yen(r.transfer)} = ${money(r.cash-r.raw)} transport. All-in ${money(r.cash)} for ten.</p><p class="formula">Privacy ${Math.min(r.rooms,5)}/5 real-bed rooms; shared-bed fit ${5-r.twins-.5*r.small}/5; bath capacity ${Math.min(r.baths,5)}/5. Weighted convenience ${bedScore(r).toFixed(1)}/100.${r.walk?` Odori midpoint ${mean(r.walk)} min → ${Math.max(0,100*(1-mean(r.walk)/60)).toFixed(1)}/100. Pickup ${r.pickup?mean(r.pickup)+' min walk':'vehicle required'} → ${(r.pickup?Math.max(0,100*(1-mean(r.pickup)/20)):0).toFixed(1)}/100. Weighted location ${loc.toFixed(1)}/100.`:' Walking-time data missing; location not calculated.'}</p></details><a class="link" href="${url}" target="_blank" rel="noopener noreferrer">Open listing ↗</a>`;
}
['cost','unit','location','privacy','bed','bath'].forEach(id=>$(id).addEventListener('input',render));$('theme').onchange=()=>{if($('theme').value==='system')delete document.body.dataset.theme;else document.body.dataset.theme=$('theme').value};new ResizeObserver(render).observe($('plot'));render();
