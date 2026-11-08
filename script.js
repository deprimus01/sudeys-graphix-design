/* Sudeys Graphix Design: scripts. Site data (phone number, stats, reviews) is near the top. */
/* EDIT HERE. Each list that has at least one entry makes its section appear. Empty lists keep the section hidden.
   prices:  {name:"Business cards (100)", from:"N5,000", note:"Matte or gloss", svc:"printing", product:"Business cards"}  (svc: design | printing | framing | gifts)
   befores: {title:"Branded caps", before:"img/caps-before.webp", after:"img/caps-after.webp"}
   stats:   {value:"500+", label:"Jobs completed"}   (only real numbers)
   reviews: {quote:"Exact words from the customer", name:"Customer name", role:"Business or town"}  (only real, permitted quotes) */
window.SG={phone:"2349020425564",prices:[],befores:[],reviews:[],stats:[{value:"4",label:"Services under one roof"},{value:String(document.querySelectorAll(".pc").length),label:"Real jobs in our gallery"},{value:"1",label:"Studio on Igbo Road, Gusau"}]};
(function(){var p=SG.phone,l='0'+p.slice(3),d=document;d.querySelectorAll('[data-wa]').forEach(function(a){a.href='https://wa.me/'+p+(a.dataset.wa?'?text='+a.dataset.wa:'')});d.querySelectorAll('[data-tel]').forEach(function(a){a.href='tel:'+l});d.querySelectorAll('[data-ph]').forEach(function(e){e.textContent=l})})();;
var IM=[];
(function(){var d=document,$=function(s){return d.querySelector(s)},A=function(s){return[].slice.call(d.querySelectorAll(s))};
$('#yr').textContent=new Date().getFullYear();
$('#th').onclick=function(){var r=d.documentElement,t=r.dataset.theme==='dark'?'light':'dark';r.dataset.theme=t;try{localStorage.setItem('sg-theme',t)}catch(e){}};
var dd=$('#dd'),sc=$('#sc'),mn=$('#mn');function menu(o){mn.setAttribute('aria-label',o?'Close menu':'Open menu');dd.classList.toggle('on',o);sc.classList.toggle('on',o);dd.setAttribute('aria-hidden',!o);mn.setAttribute('aria-expanded',o)}
mn.onclick=function(){menu(!dd.classList.contains('on'))};sc.onclick=function(){menu(false)};A('#dd a').forEach(function(a){a.onclick=function(){menu(false)}});d.addEventListener('keydown',function(e){if(e.key==='Escape')menu(false)});
A('.tabs button').forEach(function(b){b.onclick=function(){A('.tabs button').forEach(function(x){x.classList.toggle('on',x===b)});A('.pc').forEach(function(c){c.hidden=!(b.dataset.f==='all'||c.dataset.c===b.dataset.f)})}});
var lb=$('#lb');A('.pc button').forEach(function(b){b.onclick=function(){var f=b.parentNode;$('#li').src=IM[+b.dataset.o];$('#li').alt=b.firstChild.alt;$('#lc').textContent=f.querySelector('b').textContent;lb.showModal()}});
$('#lx').onclick=function(){lb.close()};lb.addEventListener('click',function(e){if(e.target===lb)lb.close()});
A('[data-q]').forEach(function(a){a.addEventListener('click',function(){var r=d.querySelector('input[name=sv][value="'+a.dataset.q+'"]');if(r)r.checked=true})});
$('#bf').onsubmit=function(e){e.preventDefault();var n=$('#bn').value.trim(),q=$('#bq').value.trim(),t=$('#bd').value.trim(),s=A('input[name=sv]:checked').map(function(x){return x.value==='something else'&&$('#bo').value.trim()?$('#bo').value.trim():x.value}),er=$('#ber');if(!s.length){er.hidden=false;er.scrollIntoView({block:'center',behavior:'smooth'});return}er.hidden=true;var l=s.length>1?s.slice(0,-1).join(', ')+' and '+s[s.length-1]:s[0];window.open('https://wa.me/'+SG.phone+'?text='+encodeURIComponent('Hello Sudeys Graphix Design, '+(n?'my name is '+n+'. ':'')+'I need '+l+'.'+(q?' Quantity: '+q+'.':'')+(t?' '+t:'')),'_blank','noopener')};A('input[name=sv]').forEach(function(x){x.addEventListener('change',function(){$('#ber').hidden=true;var o=d.querySelector('input[value="something else"]').checked;$('#bot').hidden=!o;if(o&&x.value==='something else')$('#bo').focus()})});
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.12});A('.rv').forEach(function(e){io.observe(e)})}else A('.rv').forEach(function(e){e.classList.add('in')});
})();;
(function(){var d=document,$=function(s){return d.querySelector(s)};
var G=window.SG||{},M={design:"graphic design",printing:"printing",framing:"framing",gifts:"custom gifts and branding"};
function E(t,c,x){var e=d.createElement(t);if(c)e.className=c;if(x!=null)e.textContent=x;return e}
function on(id){$('#'+id).hidden=false}
if(G.prices&&G.prices.length){G.prices.forEach(function(p){var r=E('div','r'),s=E('span');s.appendChild(E('b',0,p.name));if(p.note)s.appendChild(E('small',0,p.note));var a=E('a','btn s sm','Quote');a.href='#contact';var c=M[p.svc]||'';a.addEventListener('click',function(){var i=d.querySelector('input[name=sv][value="'+c+'"]');if(i)i.checked=true});r.appendChild(s);r.appendChild(E('b','pf',p.from));r.appendChild(a);$('#pl').appendChild(r)});on('pricing')}
if(G.befores&&G.befores.length){G.befores.forEach(function(x){var w=E('figure');w.style.margin=0;var b=E('div','ba'),i1=E('img'),i2=E('img','af'),r=E('input');i1.src=x.before;i1.alt='Before: '+x.title;i2.src=x.after;i2.alt='After: '+x.title;i1.loading=i2.loading='lazy';r.type='range';r.min=0;r.max=100;r.value=50;r.setAttribute('aria-label','Compare before and after: '+x.title);r.oninput=function(){b.style.setProperty('--p',r.value+'%')};
b.appendChild(i1);b.appendChild(i2);b.appendChild(E('span','tg tb g','Before'));b.appendChild(E('span','tg ta g','After'));b.appendChild(E('span','hn'));b.appendChild(r);w.appendChild(b);w.appendChild(E('p',0,x.title));$('#bal').appendChild(w)});on('results')}
var hasT=false;if(G.stats&&G.stats.length){G.stats.forEach(function(x){var v=E('div');v.appendChild(E('b',0,x.value));v.appendChild(E('span',0,x.label));$('#sl').appendChild(v)});hasT=true}
if(G.reviews&&G.reviews.length){G.reviews.forEach(function(x){var c=E('figure','rw');c.style.margin=0;c.appendChild(E('q',0,x.quote));var f=E('figcaption');f.appendChild(E('b',0,x.name));if(x.role)f.appendChild(E('small',0,x.role));c.appendChild(f);$('#rl').appendChild(c)});hasT=true}
if(hasT){var th=d.querySelector('#trust h2');if(th&&!(G.reviews&&G.reviews.length))th.innerHTML='<span class="wmi"><span class="wmg">Sudeys</span></span> at a glance.';on('trust')}
})();;
(function(){var d=document,w=window,$=function(s,r){return(r||d).querySelector(s)},A=function(s,r){return[].slice.call((r||d).querySelectorAll(s))};
var RM=w.matchMedia&&matchMedia('(prefers-reduced-motion:reduce)').matches,FP=w.matchMedia&&matchMedia('(hover:hover) and (pointer:fine)').matches;
function safe(f){try{f()}catch(e){}}
function rst(e,c){e.classList.remove(c);void e.offsetWidth;e.classList.add(c)}
/* progress bar, nav state, back to top */
safe(function(){var pg=d.createElement('div');pg.className='pg';pg.setAttribute('aria-hidden','true');d.body.appendChild(pg);
var tp=d.createElement('button');tp.type='button';tp.className='g ttop';tp.setAttribute('aria-label','Back to top');tp.tabIndex=-1;tp.innerHTML='<svg class="i"><use href="#cv"/></svg>';d.body.appendChild(tp);
tp.onclick=function(){w.scrollTo({top:0,behavior:RM?'auto':'smooth'})};
var nav=$('.nav'),t=0;function f(){t=0;var y=w.pageYOffset,h=d.documentElement.scrollHeight-w.innerHeight,on=y>720;pg.style.transform='scaleX('+(h>0?Math.min(y/h,1):0)+')';nav.classList.toggle('sd',y>24);tp.classList.toggle('on',on);tp.tabIndex=on?0:-1}
w.addEventListener('scroll',function(){if(!t)t=requestAnimationFrame(f)},{passive:true});f()});
/* active section in the nav */
safe(function(){if(!w.IntersectionObserver)return;var L={};A('.lk a').forEach(function(a){L[a.getAttribute('href')]=a});
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;A('.lk a').forEach(function(a){a.classList.remove('act');a.removeAttribute('aria-current')});var l=L['#'+e.target.id];if(l){l.classList.add('act');l.setAttribute('aria-current','true')}})},{rootMargin:'-45% 0px -50% 0px'});A('main section').forEach(function(s){io.observe(s)})});
/* staggered scroll reveal */
safe(function(){function grp(s,n){A(s).forEach(function(p){var i=0;[].slice.call(p.children).forEach(function(c){if(c.classList.contains('rv'))c.style.setProperty('--d',(i++*n)+'ms')})})}
grp('.bento',90);grp('.g3',120);grp('.cg',140);var cg=$('.ctg');if(cg)cg.classList.remove('rv');
var S=A('.pc,.why>div,.ct,.fq details,.big');S.forEach(function(e){e.classList.add('sr')});
A('.rv,.sr').forEach(function(el){el.addEventListener('transitionend',function(e){if(e.target===el&&e.propertyName==='transform'&&(el.classList.contains('in')||el.classList.contains('on')))el.classList.add('rd')})});
if(RM||!w.IntersectionObserver){S.forEach(function(e){e.classList.add('on')});return}
var io=new IntersectionObserver(function(es){var n=0;es.forEach(function(e){if(!e.isIntersecting)return;e.target.style.setProperty('--d',(n++*70)+'ms');e.target.classList.add('on');io.unobserve(e.target)})},{threshold:.1,rootMargin:'0px 0px -5% 0px'});S.forEach(function(e){io.observe(e)})});
/* hero tilt, magnetic buttons, card spotlight */
safe(function(){if(RM||!FP)return;
A('.hx .acts .btn,.bk').forEach(function(b){b.addEventListener('pointermove',function(e){var r=b.getBoundingClientRect();b.style.translate=(e.clientX-r.left-r.width/2)*.18+'px '+(e.clientY-r.top-r.height/2)*.28+'px'});b.addEventListener('pointerleave',function(){b.style.translate=''})});
A('.bt').forEach(function(c){var q=0;c.addEventListener('pointermove',function(e){if(q)return;q=requestAnimationFrame(function(){q=0;var r=c.getBoundingClientRect();c.style.setProperty('--mx',e.clientX-r.left+'px');c.style.setProperty('--my',e.clientY-r.top+'px')})})});
var hx=$('.hx'),st=$('.stack'),raf=0;if(hx&&st){hx.addEventListener('pointermove',function(e){if(raf)return;raf=requestAnimationFrame(function(){raf=0;var r=hx.getBoundingClientRect();st.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*9+'deg');st.style.setProperty('--rx',-((e.clientY-r.top)/r.height-.5)*7+'deg')})});hx.addEventListener('pointerleave',function(){st.style.setProperty('--ry','0deg');st.style.setProperty('--rx','0deg')})}});
/* click ripple */
safe(function(){if(RM)return;var S='.btn,.bk,.chips span,.tabs button,.ib,.ct,.soc a,.chc,.gl a,.dd a,.ttop';
function col(e){return e.matches('.p,.tabs button.on')?'rgba(255,255,255,.55)':e.matches('.bk,.ct,.ft a')?'rgba(255,255,255,.28)':'rgba(230,185,85,.4)'}
function rip(el,x,y){var r=el.getBoundingClientRect(),s=Math.max(r.width,r.height)*2.2,o=d.createElement('i');o.className='rp';o.style.cssText='width:'+s+'px;height:'+s+'px;left:'+(x-r.left-s/2)+'px;top:'+(y-r.top-s/2)+'px;background:'+col(el);el.appendChild(o);o.addEventListener('animationend',function(){o.remove()})}
d.addEventListener('click',function(e){var el=e.target.closest&&e.target.closest(S);if(!el)return;var r=el.getBoundingClientRect();rip(el,e.detail?e.clientX:r.left+r.width/2,e.detail?e.clientY:r.top+r.height/2)},true)});
/* theme switch: circular reveal */
safe(function(){var th=$('#th'),r=d.documentElement;th.onclick=null;th.addEventListener('click',function(){var t=r.dataset.theme==='dark'?'light':'dark';function ap(){r.dataset.theme=t;try{localStorage.setItem('sg-theme',t)}catch(e){}}rst(th,'spin');
if(RM){ap();return}
if(d.startViewTransition){var b=th.getBoundingClientRect(),x=b.left+b.width/2,y=b.top+b.height/2,R=Math.hypot(Math.max(x,w.innerWidth-x),Math.max(y,w.innerHeight-y));
d.startViewTransition(ap).ready.then(function(){r.animate({clipPath:['circle(0px at '+x+'px '+y+'px)','circle('+R+'px at '+x+'px '+y+'px)']},{duration:650,easing:'cubic-bezier(.2,.8,.2,1)',pseudoElement:'::view-transition-new(root)'})}).catch(function(){})}
else{r.classList.add('tt');ap();setTimeout(function(){r.classList.remove('tt')},600)}})});
/* menu icon morph */
safe(function(){var mn=$('#mn'),u=$('use',mn);new MutationObserver(function(){var o=mn.getAttribute('aria-expanded')==='true';u.setAttribute('href',o?'#xx':'#mnu');d.documentElement.classList.toggle('nl',o);rst(mn,'pop')}).observe(mn,{attributes:true,attributeFilter:['aria-expanded']})});
/* work filter: sliding pill + card re-entry */
safe(function(){var tb=$('.tabs');if(!tb)return;var p=d.createElement('span');p.className='tpl';p.setAttribute('aria-hidden','true');tb.insertBefore(p,tb.firstChild);
function mv(q){var b=$('button.on',tb);if(!b)return;if(q)p.style.transition='none';p.style.width=b.offsetWidth+'px';p.style.transform='translateX('+b.offsetLeft+'px)';if(q){void p.offsetWidth;p.style.transition=''}}
mv(1);w.addEventListener('resize',function(){mv(1)});w.addEventListener('load',function(){mv(1)});if(d.fonts&&d.fonts.ready)d.fonts.ready.then(function(){mv(1)});
A('.pc').forEach(function(c){c.addEventListener('animationend',function(){c.classList.remove('pin')})});
A('button',tb).forEach(function(b){b.addEventListener('click',function(){mv();if(RM)return;var n=0;A('.pc').forEach(function(c){if(c.hidden)return;c.classList.remove('pin');c.style.setProperty('--i',n++);void c.offsetWidth;c.classList.add('pin')})})})});
/* lightbox: animated open and close */
safe(function(){var lb=$('#lb'),nc=lb.close.bind(lb);lb.close=function(){if(!lb.open||lb.classList.contains('out'))return;if(RM){nc();return}lb.classList.add('out');setTimeout(function(){lb.classList.remove('out');nc()},240)};lb.addEventListener('cancel',function(e){e.preventDefault();lb.close()})});
/* faq: smooth height */
safe(function(){if(RM||!Element.prototype.animate)return;A('.fq details').forEach(function(dt){var sm=$('summary',dt),an=null,cl=false;
function stop(){if(an){an.onfinish=null;an.cancel();an=null}}
function run(a,b,done){dt.style.overflow='hidden';var x=an=dt.animate({height:[a+'px',b+'px']},{duration:420,easing:'cubic-bezier(.2,.8,.2,1)',fill:'forwards'});x.onfinish=function(){if(done)done();x.cancel();if(an===x)an=null;dt.style.overflow=''}}
sm.addEventListener('click',function(e){e.preventDefault();var from=dt.offsetHeight;stop();
if(dt.open&&!cl){cl=true;dt.classList.add('cl');run(from,sm.offsetHeight+dt.offsetHeight-dt.clientHeight,function(){dt.open=false;cl=false;dt.classList.remove('cl')})}
else{cl=false;dt.classList.remove('cl');dt.open=true;run(from,dt.offsetHeight)}})})});
/* form: pulse on arrival, chip flash, error shake, sent state */
safe(function(){var f=$('#bf'),er=$('#ber'),bt=$('button[type=submit]',f),o=bt.innerHTML;
d.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href="#contact"]');if(!a||RM)return;var q=a.dataset.q;setTimeout(function(){rst(f,'fp');setTimeout(function(){f.classList.remove('fp')},1400);var i=q&&d.querySelector('input[name=sv][value="'+q+'"]');if(i&&i.nextElementSibling){var s=i.nextElementSibling;rst(s,'cf');setTimeout(function(){s.classList.remove('cf')},1200)}},550)});
f.addEventListener('submit',function(){if(!er.hidden){if(!RM)rst($('.ch',f),'shake');return}bt.innerHTML='<svg class="i"><use href="#ck"/></svg>Opening WhatsApp…';bt.classList.add('ok');setTimeout(function(){bt.innerHTML=o;bt.classList.remove('ok')},2600)})});
})();;
(function(){var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;if(rm)return;[].forEach.call(document.querySelectorAll('.chips span'),function(c){c.addEventListener('click',function(){c.classList.remove('pk');void c.offsetWidth;c.classList.add('pk');clearTimeout(c._t);c._t=setTimeout(function(){c.classList.remove('pk')},900)})})})();;
(function(){var d=document,$=function(s){return d.querySelector(s)},rm=matchMedia('(prefers-reduced-motion:reduce)').matches,cs=$('.fcs');if(!cs)return;
var W=['wedding invitations','framed portraits','personalised gifts','certificates','branded caps','award plaques'],cards=[].slice.call(cs.querySelectorAll('.fc')),w=$('#fw'),cur=0,T,tf;
var typeT,firstW=true;
function word(){if(!w)return;clearTimeout(typeT);var tgt=W[cur];if(rm){w.textContent=tgt;return}
var cut=firstW?'':w.textContent;firstW=false;
function type(i){w.textContent=tgt.slice(0,i);if(i<tgt.length)typeT=setTimeout(function(){type(i+1)},55+Math.random()*50)}
function del(){if(cut.length){cut=cut.slice(0,-1);w.textContent=cut;typeT=setTimeout(del,22)}else type(1)}
del()}
function setFl(c,on){c.classList.toggle('flp',on);c.setAttribute('aria-pressed',on)}
function sync(now){word();clearTimeout(tf);cards.forEach(function(c,i){c.classList.toggle('on',i===cur);setFl(c,false)});var f=function(){setFl(cards[cur],true)};if(now)f();else tf=setTimeout(f,rm?0:1400)}
function tick(){if(d.hidden)return;cur=(cur+1)%cards.length;sync()}
function restart(){clearInterval(T);T=setInterval(tick,5200)}
cards.forEach(function(c,i){c.onclick=function(){var was=c.classList.contains('flp');cur=i;c.classList.remove('fcp');void c.offsetWidth;c.classList.add('fcp');sync(true);if(was)setFl(c,false);restart()};
c.onkeydown=function(k){if(k.target===c&&(k.key==='Enter'||k.key===' ')){k.preventDefault();c.onclick()}};});
if(matchMedia('(hover:hover) and (pointer:fine)').matches&&!rm){cs.addEventListener('pointermove',function(e){var r=cs.getBoundingClientRect();cs.style.setProperty('--px',((e.clientX-r.left)/r.width-.5)*2);cs.style.setProperty('--py',((e.clientY-r.top)/r.height-.5)*2)});cs.addEventListener('pointerleave',function(){cs.style.setProperty('--px',0);cs.style.setProperty('--py',0)})}
sync();restart()})();
