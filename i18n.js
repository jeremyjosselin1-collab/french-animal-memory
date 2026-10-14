/* Shared language layer for Jeux des animaux / Juegos de animales */
(function(){
const LANG=localStorage.getItem("fr_lang")==="es"?"es":"fr";
const A={
fr:[{w:"canard",e:"🦆",g:"m",pl:"canards",s:"coin-coin"},{w:"chien",e:"🐶",g:"m",pl:"chiens",s:"ouaf ouaf"},{w:"chat",e:"🐱",g:"m",pl:"chats",s:"miaou"},{w:"lapin",e:"🐰",g:"m",pl:"lapins",s:"grignote"},{w:"éléphant",e:"🐘",g:"m",pl:"éléphants",s:"pouêt"},{w:"girafe",e:"🦒",g:"f",pl:"girafes",s:"mmm",alt:["giraffe"]},{w:"zèbre",e:"🦓",g:"m",pl:"zèbres",s:"hihan"},{w:"singe",e:"🐵",g:"m",pl:"singes",s:"hou hou ha ha"},{w:"ours",e:"🐻",g:"m",pl:"ours",s:"grrr"},{w:"tigre",e:"🐯",g:"m",pl:"tigres",s:"grrraou"}],
es:[{w:"pato",e:"🦆",g:"m",pl:"patos",s:"cuac cuac"},{w:"perro",e:"🐶",g:"m",pl:"perros",s:"guau guau"},{w:"gato",e:"🐱",g:"m",pl:"gatos",s:"miau"},{w:"conejo",e:"🐰",g:"m",pl:"conejos",s:"ñam ñam"},{w:"elefante",e:"🐘",g:"m",pl:"elefantes",s:"pruuu"},{w:"jirafa",e:"🦒",g:"f",pl:"jirafas",s:"mmm",alt:["girafa"]},{w:"cebra",e:"🦓",g:"f",pl:"cebras",s:"iii"},{w:"mono",e:"🐵",g:"m",pl:"monos",s:"uh uh ah ah"},{w:"oso",e:"🐻",g:"m",pl:"osos",s:"grrr"},{w:"tigre",e:"🐯",g:"m",pl:"tigres",s:"grrraaa"}]};
const S={
fr:{menu:"🏠 Menu",again:"Rejouer",switchKid:"Changer de joueur",who:"Qui joue ?",bravo:"Bravo !",lang:"🇫🇷 Français",
 play:"Jouer",addPhoto:"📷 Ajouter une photo",changePhoto:"📷 Changer la photo",games:"🐾 Jeux des animaux",bigPhoto:"Photo trop grande, essaie une autre.",badPhoto:"Impossible de lire cette image.",
 gMemoire:["Memory des animaux","Trouve les paires et dis le nom !"],gRepete:["Dis-le 10 fois !","Répète le mot pour faire envoler l'animal"],gEcoute:["Écoute et touche !","Écoute le mot et touche le bon animal"],gRapide:["Course éclair !","Trouve le bon nom avant la fin du temps"],gLettres:["Les lettres cachées","Trouve les lettres qui manquent"],gHistoire:["Histoires rigolotes","Invente une phrase drôle en français"],gCombien:["Combien ?","Compte les animaux en français"],gBonjour:["Dis bonjour !","Dis bonjour ou au revoir à l'animal, puis fais son bruit"],
 m_turn:"Tourne deux cartes pour trouver une paire !",m_score:(c,p,t)=>`Paires : ${c} / ${p} · Essais : ${t}`,m_pair:"Une paire ! 🎉",m_say:"Dis le nom en français !",talk:"🎤 Parler",hint:"💡 Indice",m_nomic:"Micro non disponible : utilise Chrome ou Safari récent.",m_diff:"Pas pareil, essaie encore !",m_ok:w=>`✅ Bravo ! C'est « ${w} » !`,nosr:"La reconnaissance vocale n'est pas disponible ici.",listening:"J'écoute… 👂",heard:x=>`J'ai entendu : « ${x} »`,m_wrong:"❌ Pas tout à fait, réessaie !",tryAgain:"Essaie encore",allowMic:"Autorise le micro dans le navigateur.",nothing:"Je n'ai rien entendu, réessaie.",hintIs:"Indice : ",won:"Bravo ! Tu as gagné !",
 r_how:"🔊 Comment dire en français?",listen:"🎤 Écouter",stop:"⏹ Arrêter",r_tap:"👆 J'ai dit le mot",r_go:"Appuie sur 🎤 et dis le mot 10 fois !",r_nosr:"La reconnaissance vocale n'est pas disponible ici. Essaie Chrome ou Safari. Tu peux taper sur le bouton jaune à chaque fois que tu dis le mot.",hearing:x=>`J'entends : « ${x} »`,r_bravo:"Bravo ! 🎉",r_end:"Bravo ! Tous les animaux se sont envolés !",
 hearBtn:"🔊 Écouter",e_q:(r,n,s)=>`Question ${r} / ${n} · ⭐ ${s}`,e_go:"Écoute et touche le bon animal !",e_notts:w=>"Pas de son ici. Lis le mot : "+w,e_yes:x=>"✅ Oui ! "+x,e_no:x=>`Non, ça c'est ${x}. Essaie encore !`,e_end:(s,n)=>`${s} / ${n} bonnes réponses !`,
 k_go:"▶️ C'est parti !",k_msg:"Touche le bon nom, vite !",k_oops:x=>`Oups ! C'est ${x} (moins 2 secondes)`,k_end:s=>`Score : ${s} ⭐`,
 l_hear:"🔊 Écouter le mot",l_word:(i,n)=>`Mot ${i} / ${n}`,l_q:"Quelle lettre manque ?",l_ok:x=>"✅ Bravo ! "+x,l_no:"Pas cette lettre, essaie encore !",l_end:s=>`Tu as trouvé ${s} mots !`,
 h_read:"🔊 Lire l'histoire",h_rand:"🎲 Au hasard",h_1:"1. Un animal",h_2:"2. Une couleur",h_3:"3. Il fait quoi ?",h_first:"Choisis d'abord un animal !",h_notts:"Pas de son sur cet appareil, mais tu peux lire ton histoire !",
 c_q:a=>`Combien de ${a.pl} ?`,c_go:"Compte et touche le bon nombre !",c_no:"Non, recompte !",c_nosay:k=>k+" ? Non, recompte !",c_end:(s,n)=>`${s} / ${n} ! Tu sais compter en français !`,
 b_title:"Dis bonjour !",b_sound:a=>`Fais le bruit ${deArt(a)}${a.w} ! 🔊`,b_tapSound:"🔊 J'ai fait le bruit",b_eg:s=>`Continue ! Par exemple : « ${s} »`,b_now:s=>"Bravo ! Maintenant fais le bruit ! "+s,b_super:"✅ Super !",b_superSay:"Super !",b_instr:g=>`Dis ${g} + le nom, puis fais son bruit !`,b_nomic:"Micro non disponible ici, essaie Chrome ou Safari. Tape sur le bouton jaune quand tu l'as dit.",b_other:(w,o)=>`Presque ! Cette fois dis « ${w} », pas « ${o} » 😊`,b_addName:x=>`Bien ! Ajoute le nom : « ${x} »`,b_retry:x=>`Essaie encore : « ${x} »`,b_end:(s,n,k)=>`${s} / ${n} ! Bravo ${k} !`,b_animal:(r,n,s)=>`Animal ${r} / ${n} · ⭐ ${s}`,
 G:{b:{say:"bonjour",p:"Dis bonjour ! 👋",tap:"👆 J'ai tout dit",ok:["bonjour"]},r:{say:"au revoir",p:"Dis au revoir ! 👋🚪",tap:"👆 J'ai tout dit",ok:["aurevoir"]}},
 NUM:["zéro","un","deux","trois","quatre","cinq","six","sept","huit","neuf","dix"],
 COLS:[["bleu","bleue","🔵"],["rouge","rouge","🔴"],["vert","verte","🟢"],["jaune","jaune","🟡"],["rose","rose","🩷"],["violet","violette","🟣"]],
 ACTS:[["danse","💃"],["chante","🎤"],["saute","🦘"],["dort","😴"],["mange une glace","🍦"],["fait du vélo","🚲"],["joue au foot","⚽"],["rigole","😂"]]},
es:{menu:"🏠 Menú",again:"Jugar de nuevo",switchKid:"Cambiar de jugador",who:"¿Quién juega?",bravo:"¡Muy bien!",lang:"🇦🇷 Español (Argentina)",
 play:"Jugar",addPhoto:"📷 Agregar una foto",changePhoto:"📷 Cambiar la foto",games:"🐾 Juegos de animales",bigPhoto:"La foto es muy grande, probá con otra.",badPhoto:"No se puede leer esta imagen.",
 gMemoire:["Memoria de animales","¡Encontrá los pares y decí el nombre!"],gRepete:["¡Decilo 10 veces!","Repetí la palabra para que el animal se vaya volando"],gEcoute:["¡Escuchá y tocá!","Escuchá la palabra y tocá el animal correcto"],gRapide:["¡Carrera relámpago!","Encontrá el nombre antes de que se acabe el tiempo"],gLettres:["Las letras escondidas","Encontrá las letras que faltan"],gHistoire:["Cuentos locos","Inventá una frase divertida en español"],gCombien:["¿Cuántos hay?","Contá los animales en español"],gBonjour:["¡Decí hola!","Decile hola o adiós al animal y hacé su ruido"],
 m_turn:"¡Tocá dos cartas para encontrar un par!",m_score:(c,p,t)=>`Pares: ${c} / ${p} · Intentos: ${t}`,m_pair:"¡Un par! 🎉",m_say:"¡Decí el nombre en español!",talk:"🎤 Hablar",hint:"💡 Pista",m_nomic:"Micrófono no disponible: usá Chrome o Safari actualizado.",m_diff:"¡No son iguales, probá de nuevo!",m_ok:w=>`✅ ¡Muy bien! ¡Es « ${w} »!`,nosr:"El reconocimiento de voz no está disponible acá.",listening:"Te escucho… 👂",heard:x=>`Escuché: « ${x} »`,m_wrong:"❌ ¡Casi! Probá otra vez.",tryAgain:"Probá otra vez",allowMic:"Permití el micrófono en el navegador.",nothing:"No escuché nada, probá otra vez.",hintIs:"Pista: ",won:"¡Muy bien! ¡Ganaste!",
 r_how:"🔊 ¿Cómo se dice en español?",listen:"🎤 Escuchar",stop:"⏹ Parar",r_tap:"👆 Ya dije la palabra",r_go:"¡Tocá 🎤 y decí la palabra 10 veces!",r_nosr:"El reconocimiento de voz no está disponible acá. Probá con Chrome o Safari. Podés tocar el botón amarillo cada vez que digas la palabra.",hearing:x=>`Escucho: « ${x} »`,r_bravo:"¡Muy bien! 🎉",r_end:"¡Muy bien! ¡Todos los animales se fueron volando!",
 hearBtn:"🔊 Escuchar",e_q:(r,n,s)=>`Pregunta ${r} / ${n} · ⭐ ${s}`,e_go:"¡Escuchá y tocá el animal correcto!",e_notts:w=>"No hay sonido acá. Leé la palabra: "+w,e_yes:x=>"✅ ¡Sí! "+x,e_no:x=>`No, ese es ${x}. ¡Probá otra vez!`,e_end:(s,n)=>`¡${s} / ${n} respuestas correctas!`,
 k_go:"▶️ ¡Arrancamos!",k_msg:"¡Tocá el nombre correcto, rápido!",k_oops:x=>`¡Uy! Es ${x} (menos 2 segundos)`,k_end:s=>`Puntaje: ${s} ⭐`,
 l_hear:"🔊 Escuchar la palabra",l_word:(i,n)=>`Palabra ${i} / ${n}`,l_q:"¿Qué letra falta?",l_ok:x=>"✅ ¡Muy bien! "+x,l_no:"Esa letra no, ¡probá otra vez!",l_end:s=>`¡Encontraste ${s} palabras!`,
 h_read:"🔊 Leer el cuento",h_rand:"🎲 Al azar",h_1:"1. Un animal",h_2:"2. Un color",h_3:"3. ¿Qué hace?",h_first:"¡Primero elegí un animal!",h_notts:"No hay sonido en este aparato, ¡pero podés leer tu cuento!",
 c_q:a=>`¿${a.g=="f"?"Cuántas":"Cuántos"} ${a.pl} hay?`,c_go:"¡Contá y tocá el número correcto!",c_no:"¡No, contá de nuevo!",c_nosay:k=>`¿${k}? ¡No, contá de nuevo!`,c_end:(s,n)=>`¡${s} / ${n}! ¡Sabés contar en español!`,
 b_title:"¡Decí hola!",b_sound:a=>`¡Hacé el ruido ${deArt(a)}${a.w}! 🔊`,b_tapSound:"🔊 Ya hice el ruido",b_eg:s=>`¡Seguí! Por ejemplo: « ${s} »`,b_now:s=>"¡Muy bien! ¡Ahora hacé el ruido! "+s,b_super:"✅ ¡Genial!",b_superSay:"¡Genial!",b_instr:g=>`¡Decí ${g} + el nombre y después hacé su ruido!`,b_nomic:"Micrófono no disponible acá, probá con Chrome o Safari. Tocá el botón amarillo cuando lo hayas dicho.",b_other:(w,o)=>`¡Casi! Esta vez decí « ${w} », no « ${o} » 😊`,b_addName:x=>`¡Bien! Agregá el nombre: « ${x} »`,b_retry:x=>`Probá otra vez: « ${x} »`,b_end:(s,n,k)=>`¡${s} / ${n}! ¡Muy bien ${k}!`,b_animal:(r,n,s)=>`Animal ${r} / ${n} · ⭐ ${s}`,
 G:{b:{say:"hola",p:"¡Decí hola! 👋",tap:"👆 Ya lo dije todo",ok:["hola"]},r:{say:"adiós",p:"¡Decí adiós! 👋🚪",tap:"👆 Ya lo dije todo",ok:["adios","chau"]}},
 NUM:["cero","uno","dos","tres","cuatro","cinco","seis","siete","ocho","nueve","diez"],
 COLS:[["azul","azul","🔵"],["rojo","roja","🔴"],["verde","verde","🟢"],["amarillo","amarilla","🟡"],["rosa","rosa","🩷"],["violeta","violeta","🟣"]],
 ACTS:[["baila","💃"],["canta","🎤"],["salta","🦘"],["duerme","😴"],["come un helado","🍦"],["anda en bici","🚲"],["juega al fútbol","⚽"],["se ríe","😂"]]}};
function deArt(a){if(LANG=="es")return a.g=="f"?"de la ":"del ";return /^[aeiouyéè]/i.test(a.w)?"de l'":(a.g=="f"?"de la ":"du ")}
function art(a){if(LANG=="es")return a.g=="f"?"la ":"el ";return /^[aeiouyéè]/i.test(a.w)?"l'":(a.g=="f"?"la ":"le ")}
function un(a){return LANG=="es"?(a.g=="f"?"una":"un"):(a.g=="f"?"une":"un")}
const VOICE=LANG=="es"?["es-AR","es-US","es-419","es-MX","es-ES","es"]:["fr-FR","fr-CA","fr"];
let voice=null;
function pickVoice(){if(!("speechSynthesis" in window))return;const vs=speechSynthesis.getVoices().map(v=>[v,v.lang.replace("_","-")]);for(const c of VOICE){const f=vs.find(([v,l])=>l.toLowerCase()==c.toLowerCase())||vs.find(([v,l])=>l.toLowerCase().startsWith(c.toLowerCase()));if(f){voice=f[0];return}}}
if("speechSynthesis" in window){pickVoice();speechSynthesis.onvoiceschanged=pickVoice}
function speak(t){if(!("speechSynthesis" in window))return;try{speechSynthesis.cancel();const u=new SpeechSynthesisUtterance(t);u.lang=voice?voice.lang:VOICE[0];if(voice)u.voice=voice;u.rate=.9;speechSynthesis.speak(u)}catch(e){}}
const norm=s=>s.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"").replace(/[^a-z]+/g," ").trim();
function names(a){return [norm(a.w),...(a.alt||[])]}
function t(k,...x){const v=S[LANG][k];return typeof v=="function"?v(...x):v}
function setLang(l){localStorage.setItem("fr_lang",l);location.reload()}
function header(){
  document.documentElement.lang=LANG=="es"?"es-AR":"fr";
  document.querySelectorAll("[data-t]").forEach(e=>{const v=t(e.dataset.t);e.textContent=Array.isArray(v)?v[+(e.dataset.i||0)]:v});
  const k=document.getElementById("kid");if(!k)return;
  const other=LANG=="es"?"fr":"es";
  const lb=`<button id="langBtn" title="Langue / Idioma" style="font-size:.9rem;padding:6px 10px;margin:0;background:#fff;color:#333;box-shadow:0 1px 4px #0003">${S[LANG].lang} ⇄ ${S[other].lang.split(" ")[0]}</button>`;
  const n=localStorage.getItem("fr_current");
  if(!n){k.innerHTML=`<a href="./">${t("who")}</a> `+lb}
  else{
    const p=localStorage.getItem("fr_photo_"+n),c={Mateo:"#0984e3",Felipe:"#e17055"}[n]||"#a29bfe";
    k.innerHTML=`<div class="kav" style="width:48px;height:48px;border-radius:50%;background:${c} center/cover no-repeat;color:#fff;display:flex;align-items:center;justify-content:center;font-size:1.4rem"></div><span class="kname"></span><a href="./" id="swKid" style="font-size:.9rem;font-weight:normal;color:#6c5ce7">${t("switchKid")}</a> `+lb;
    const a=k.querySelector(".kav");if(p)a.style.backgroundImage="url("+p+")";else a.textContent=n[0];k.querySelector(".kname").textContent=n;
    k.querySelector("#swKid").onclick=()=>localStorage.removeItem("fr_current");
  }
  k.querySelector("#langBtn").onclick=()=>setLang(other);
}
Object.assign(window,{LANG,ANIMALS:A[LANG],S,t,art,un,deArt,speak,norm,names,setLang,header,SRLANG:LANG=="es"?"es-AR":"fr-FR",TTS:"speechSynthesis" in window});
})();
