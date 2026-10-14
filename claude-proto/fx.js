/* Prototype helpers: Web Audio sfx + confetti/particle overlay */
(function(){
let ac=null;function ctx(){if(!ac){const A=window.AudioContext||window.webkitAudioContext;if(A)ac=new A()}if(ac&&ac.state=="suspended")ac.resume();return ac}
function tone(f1,f2,d,type,vol){const a=ctx();if(!a)return;const o=a.createOscillator(),g=a.createGain();o.type=type||"sine";o.frequency.setValueAtTime(f1,a.currentTime);o.frequency.exponentialRampToValueAtTime(Math.max(30,f2),a.currentTime+d);g.gain.setValueAtTime(vol||.2,a.currentTime);g.gain.exponentialRampToValueAtTime(.001,a.currentTime+d);o.connect(g);g.connect(a.destination);o.start();o.stop(a.currentTime+d)}
const SFX={pop:()=>tone(500,1200,.12,"triangle"),good:()=>{tone(523,523,.12,"square",.1);setTimeout(()=>tone(659,659,.12,"square",.1),110);setTimeout(()=>tone(784,784,.2,"square",.1),220)},bad:()=>tone(220,110,.3,"sawtooth",.12),whoosh:()=>tone(900,200,.35,"sine",.15),jump:()=>tone(300,700,.15,"square",.08),snap:()=>tone(1200,800,.06,"square",.1)};
const cv=document.createElement("canvas");cv.style.cssText="position:fixed;inset:0;pointer-events:none;z-index:50";
let P=[];function size(){cv.width=innerWidth*devicePixelRatio;cv.height=innerHeight*devicePixelRatio}
addEventListener("resize",size);
function burst(x,y,n,emojis){for(let i=0;i<(n||30);i++){const a=Math.random()*Math.PI*2,s=2+Math.random()*7;P.push({x,y,vx:Math.cos(a)*s,vy:Math.sin(a)*s-3,l:60+Math.random()*30,c:`hsl(${Math.random()*360},90%,60%)`,r:3+Math.random()*5,e:emojis&&Math.random()<.3?emojis[Math.floor(Math.random()*emojis.length)]:null,rot:Math.random()*6})}}
function confetti(){for(let i=0;i<120;i++)P.push({x:Math.random()*innerWidth,y:-20-Math.random()*200,vx:(Math.random()-.5)*3,vy:2+Math.random()*3,l:160,c:`hsl(${Math.random()*360},90%,60%)`,r:4+Math.random()*4,rot:Math.random()*6,conf:1})}
function loop(){const g=cv.getContext("2d");g.setTransform(devicePixelRatio,0,0,devicePixelRatio,0,0);g.clearRect(0,0,innerWidth,innerHeight);
  P=P.filter(p=>p.l-->0);for(const p of P){p.x+=p.vx;p.y+=p.vy;p.vy+=p.conf?.05:.25;p.rot+=.1;g.globalAlpha=Math.min(1,p.l/30);
    if(p.e){g.font="22px sans-serif";g.fillText(p.e,p.x,p.y)}else{g.save();g.translate(p.x,p.y);g.rotate(p.rot);g.fillStyle=p.c;g.fillRect(-p.r,-p.r/2,p.r*2,p.r);g.restore()}}
  g.globalAlpha=1;requestAnimationFrame(loop)}
addEventListener("DOMContentLoaded",()=>{document.body.appendChild(cv);size();loop()});
function langBar(){const b=document.createElement("div");b.style.cssText="position:fixed;top:8px;left:8px;right:8px;display:flex;gap:8px;justify-content:space-between;z-index:60;pointer-events:none";
  const other=LANG=="es"?"fr":"es";b.innerHTML=`<a href="./" style="pointer-events:auto;background:#6c5ce7;color:#fff;padding:8px 12px;border-radius:12px;text-decoration:none;font:600 15px system-ui">⬅ Prototypes</a><button style="pointer-events:auto;border:0;border-radius:12px;padding:8px 12px;font:600 14px system-ui;background:#fff;box-shadow:0 1px 4px #0003">${S[LANG].lang} ⇄ ${S[other].lang.split(" ")[0]}</button>`;
  b.querySelector("button").onclick=()=>setLang(other);document.body.appendChild(b)}
Object.assign(window,{SFX,burst,confetti,langBar,unlockAudio:ctx});
})();
