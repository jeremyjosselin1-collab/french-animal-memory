/* Shared sentence data for Conversations and Lingo.
   100 everyday phrases and 100 questions & answers, written as templates whose {slots}
   are filled with animals, colours, family, objects, foods and numbers, in fr / es / en. */
(function(){
const V_FR=/^[aeiouyéèêàâîôûœ]/i,V_EN=/^[aeiou]/i;
// [emoji, en, en plural, fr, g, fr plural, fr sound, es, g, es plural, es sound]
const AN=[["🐱","cat","cats","chat","m","chats","miaou","gato","m","gatos","miau"],["🐶","dog","dogs","chien","m","chiens","ouaf ouaf","perro","m","perros","guau guau"],
["🦆","duck","ducks","canard","m","canards","coin-coin","pato","m","patos","cuac cuac"],["🐰","rabbit","rabbits","lapin","m","lapins","","conejo","m","conejos",""],
["🐘","elephant","elephants","éléphant","m","éléphants","pouêt","elefante","m","elefantes","pruuu"],["🦒","giraffe","giraffes","girafe","f","girafes","","jirafa","f","jirafas",""],
["🐵","monkey","monkeys","singe","m","singes","hou hou ha ha","mono","m","monos","uh uh ah ah"],["🐻","bear","bears","ours","m","ours","grrr","oso","m","osos","grrr"],
["🐯","tiger","tigers","tigre","m","tigres","grrraou","tigre","m","tigres","grrraaa"],["🐴","horse","horses","cheval","m","chevaux","hihihan","caballo","m","caballos","iiijiji"],
["🐮","cow","cows","vache","f","vaches","meuh","vaca","f","vacas","muuu"],["🐷","pig","pigs","cochon","m","cochons","groin groin","chancho","m","chanchos","oinc oinc"],
["🐑","sheep","sheep","mouton","m","moutons","bêê","oveja","f","ovejas","beee"],["🐔","hen","hens","poule","f","poules","cot cot","gallina","f","gallinas","coc coc"],
["🐸","frog","frogs","grenouille","f","grenouilles","coa coa","rana","f","ranas","croac croac"],["🦁","lion","lions","lion","m","lions","rrraou","león","m","leones","grrraaa"],
["🐭","mouse","mice","souris","f","souris","couic couic","ratón","m","ratones","iii iii"],["🐢","turtle","turtles","tortue","f","tortues","","tortuga","f","tortugas",""],
["🐟","fish","fish","poisson","m","poissons","","pez","m","peces",""],["🐦","bird","birds","oiseau","m","oiseaux","cui cui","pájaro","m","pájaros","pío pío"]
].map(a=>({e:a[0],en:a[1],enp:a[2],fr:{w:a[3],g:a[4],pl:a[5],s:a[6]},es:{w:a[7],g:a[8],pl:a[9],s:a[10]}}));
// [emoji, en, fr m, fr f, es m, es f]
const COL=[["🔵","blue","bleu","bleue","azul","azul"],["🔴","red","rouge","rouge","rojo","roja"],["🟢","green","vert","verte","verde","verde"],["🟡","yellow","jaune","jaune","amarillo","amarilla"],
["🩷","pink","rose","rose","rosa","rosa"],["🟣","purple","violet","violette","violeta","violeta"],["⚫","black","noir","noire","negro","negra"],["⚪","white","blanc","blanche","blanco","blanca"],
["🟠","orange","orange","orange","naranja","naranja"],["🟤","brown","marron","marron","marrón","marrón"]].map(a=>({e:a[0],en:a[1],fr:[a[2],a[3]],es:[a[4],a[5]]}));
// [emoji, en, fr, g, es, g]
const mk=a=>({e:a[0],en:a[1],fr:{w:a[2],g:a[3]},es:{w:a[4],g:a[5]}});
const FAM=[["👩","mum","maman","f","mamá","f"],["👨","dad","papa","m","papá","m"],["👧","sister","sœur","f","hermana","f"],["👦","brother","frère","m","hermano","m"],
["👵","grandma","mamie","f","abuela","f"],["👴","grandpa","papi","m","abuelo","m"],["👩‍🦰","aunt","tante","f","tía","f"],["🧔","uncle","oncle","m","tío","m"],
["👶","little brother","petit frère","m","hermanito","m"],["🧒","friend","ami","m","amigo","m"]].map(mk);
const OBJ=[["⚽","ball","ballon","m","pelota","f"],["📖","book","livre","m","libro","m"],["🚗","car","voiture","f","auto","m"],["🎩","hat","chapeau","m","sombrero","m"],
["🚲","bike","vélo","m","bici","f"],["📱","phone","téléphone","m","teléfono","m"],["☕","cup","tasse","f","taza","f"],["🧸","teddy bear","nounours","m","osito","m"],
["☂️","umbrella","parapluie","m","paraguas","m"],["👟","shoe","chaussure","f","zapatilla","f"],["✏️","pencil","crayon","m","lápiz","m"],["🔑","key","clé","f","llave","f"],
["👕","T-shirt","t-shirt","m","remera","f"],["🪁","kite","cerf-volant","m","barrilete","m"],["🥁","drum","tambour","m","tambor","m"]].map(mk);
// [emoji, en, fr, g, es, g, en "love" form, fr love form, es love form, es love form is plural]
const FOOD=[["🍎","apple","pomme","f","manzana","f","apples","les pommes","las manzanas",1],["🍌","banana","banane","f","banana","f","bananas","les bananes","las bananas",1],
["🍓","strawberry","fraise","f","frutilla","f","strawberries","les fraises","las frutillas",1],["🍕","pizza","pizza","f","pizza","f","pizza","la pizza","la pizza",0],
["🍦","ice cream","glace","f","helado","m","ice cream","la glace","el helado",0],["🍞","bread","pain","m","pan","m","bread","le pain","el pan",0],
["🧀","cheese","fromage","m","queso","m","cheese","le fromage","el queso",0],["🥕","carrot","carotte","f","zanahoria","f","carrots","les carottes","las zanahorias",1],
["🍰","cake","gâteau","m","torta","f","cake","les gâteaux","las tortas",1],["🍊","orange","orange","f","naranja","f","oranges","les oranges","las naranjas",1],
["🍪","cookie","biscuit","m","galletita","f","cookies","les biscuits","las galletitas",1],["🥐","croissant","croissant","m","medialuna","f","croissants","les croissants","las medialunas",1],
["🍅","tomato","tomate","f","tomate","m","tomatoes","les tomates","los tomates",1],["🥚","egg","œuf","m","huevo","m","eggs","les œufs","los huevos",1]
].map(a=>Object.assign(mk(a),{lv:{en:a[6],fr:a[7],es:a[8]},esPl:a[9]}));
const DAYS={en:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],fr:["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"],es:["lunes","martes","miércoles","jueves","viernes","sábado","domingo"]};
const NUMS={en:["zero","one","two","three","four","five","six","seven","eight","nine","ten"],fr:S.fr.NUM,es:S.es.NUM};
const PETS=["Max","Lola","Coco","Pipo","Nala","Rocky"];

/* [unit, picture, en, fr, es] — unit is used by Lingo */
const P=[
["greet","👋","Hello!","Bonjour !","¡Hola!"],["greet","👋😊","Goodbye!","Au revoir !","¡Chau!"],["greet","🌙","Good night!","Bonne nuit !","¡Buenas noches!"],
["greet","🙏","Thank you!","Merci !","¡Gracias!"],["greet","🙏💖","Thank you very much!","Merci beaucoup !","¡Muchas gracias!"],["greet","🥺","Please.","S'il te plaît.","Por favor."],
["greet","😊","You're welcome.","De rien.","De nada."],["greet","😔","Sorry!","Pardon !","¡Perdón!"],["greet","👍","Yes.","Oui.","Sí."],["greet","👎","No.","Non.","No."],
["greet","👌","OK!","D'accord !","¡Dale!"],["greet","❤️","I love you.","Je t'aime.","Te quiero."],["greet","📅","See you tomorrow!","À demain !","¡Hasta mañana!"],
["greet","🚶‍♂️","See you later!","À plus tard !","¡Hasta luego!"],["greet","☀️😊","Have a good day!","Bonne journée !","¡Que tengas un lindo día!"],
["greet","🎂","Happy birthday!","Joyeux anniversaire !","¡Feliz cumpleaños!"],["greet","👏","Well done!","Bravo !","¡Muy bien!"],["greet","🍴","Enjoy your meal!","Bon appétit !","¡Buen provecho!"],
["greet","🤧","Bless you!","À tes souhaits !","¡Salud!"],["greet","🙋","Me too!","Moi aussi !","¡Yo también!"],["greet","🙅","Not me!","Pas moi !","¡Yo no!"],
["greet","👋🧒","Hello, {k}!","Bonjour, {k} !","¡Hola, {k}!"],["greet","🌟","Good job, {k}!","Bravo, {k} !","¡Muy bien, {k}!"],
["daily","🍽️","I'm hungry.","J'ai faim.","Tengo hambre."],["daily","💧","I'm thirsty.","J'ai soif.","Tengo sed."],["daily","😴","I'm sleepy.","J'ai sommeil.","Tengo sueño."],
["daily","🥶","I'm cold.","J'ai froid.","Tengo frío."],["daily","🥵","I'm hot.","J'ai chaud.","Tengo calor."],["daily","😱","I'm scared.","J'ai peur.","Tengo miedo."],
["daily","🤷","I don't know.","Je ne sais pas.","No sé."],["daily","😕","I don't understand.","Je ne comprends pas.","No entiendo."],
["daily","🔁","Again, please!","Encore, s'il te plaît !","¡Otra vez, por favor!"],["daily","🏃","Let's go!","On y va !","¡Vamos!"],["daily","👀","Look!","Regarde !","¡Mirá!"],
["daily","👂","Listen!","Écoute !","¡Escuchá!"],["daily","🫴","Come here!","Viens ici !","¡Vení acá!"],["daily","✋","Wait!","Attends !","¡Esperá!"],
["daily","⚠️","Be careful!","Attention !","¡Cuidado!"],["daily","☝️","It's my turn!","C'est mon tour !","¡Me toca a mí!"],["daily","👉","It's your turn!","C'est ton tour !","¡Te toca a vos!"],
["daily","✅","I've finished!","J'ai fini !","¡Terminé!"],["daily","🎲","I want to play.","Je veux jouer.","Quiero jugar."],["daily","🚽","I need a wee.","J'ai envie de faire pipi.","Tengo ganas de hacer pis."],
["daily","🧼","Wash your hands!","Lave-toi les mains !","¡Lavate las manos!"],["daily","🪥","Brush your teeth!","Brosse-toi les dents !","¡Lavate los dientes!"],
["daily","👕","Get dressed!","Habille-toi !","¡Vestite!"],["daily","🪑","Sit down, please.","Assieds-toi, s'il te plaît.","Sentate, por favor."],
["daily","🛏️","It's time for bed.","C'est l'heure d'aller au lit.","Es hora de ir a la cama."],["daily","🍽️⏰","Time to eat!","À table !","¡A comer!"],
["daily","😋","It's delicious!","C'est délicieux !","¡Está riquísimo!"],["daily","🤩","It's fun!","C'est rigolo !","¡Es divertido!"],["daily","🌧️","It's raining.","Il pleut.","Está lloviendo."],
["daily","☀️","It's sunny.","Il y a du soleil.","Hay sol."],["daily","❄️","It's cold today.","Il fait froid aujourd'hui.","Hace frío hoy."],["daily","⚽🏃","Let's play ball!","On joue au ballon !","¡Juguemos a la pelota!"],
["animal","{ae}","I see {a}.","Je vois {a}.","Veo {a}."],["animal","{ae}👀","Look at {the}!","Regarde {the} !","¡Mirá {the}!"],["animal","{ae}❤️","I like {lp}.","J'aime {lp}.","Me gustan {lp}."],
["animal","{ae}😴","{the} is sleeping.","{the} dort.","{the} está durmiendo."],["animal","{ae}{foe}","{the} is eating {food}.","{the} mange {food}.","{the} está comiendo {food}."],
["animal","{ae}⬆️","{the} is jumping.","{the} saute.","{the} está saltando."],["animal","{ae}💨","{the} is running.","{the} court.","{the} está corriendo."],
["animal","{ae}🌊","{the} is swimming.","{the} nage.","{the} está nadando."],["animal","{ae}🤏","{the} is small.","{the} est {g:petit|petite}.","{the} es {g:chiquito|chiquita}."],
["animal","{ae}❓","Where is {the}?","Où est {the} ?","¿Dónde está {the}?"],["animal","{ae}👉","Here is {the}!","Voici {the} !","¡Acá está {the}!"],
["animal","{ae}👋","{the} says hello!","{the} dit bonjour !","¡{the} dice hola!"],["animal","{ae}","It's {a}!","C'est {a} !","¡Es {a}!"],
["animal","{ae}{oe}","{the} has {o}.","{the} a {o}.","{the} tiene {o}."],["animal","{ae}{oe}","{the} is playing with {od}.","{the} joue avec {od}.","{the} está jugando con {od}."],
["colour","{ae}{ce}","I have {ac}.","J'ai {ac}.","Tengo {ac}."],["colour","{ae}{ce}","{the} is {ca}.","{the} est {ca}.","{the} es {ca}."],
["colour","✏️{ae}{ce}","I'm drawing {ac}.","Je dessine {ac}.","Estoy dibujando {ac}."],["colour","{ce}","My favourite colour is {col}.","Ma couleur préférée, c'est le {col}.","Mi color favorito es el {col}."],
["colour","{oe}{ce}","My {ow} is {co}.","{mo} est {co}.","{mo} es {co}."],["colour","{fae}{ae}{ce}","{fam} has {ac}.","{fam} a {ac}.","{fam} tiene {ac}."],
["family","{fae}❤️","I love {fam}.","J'aime {fam}.","Quiero a {fam}."],["family","{fae}😴","{fam} is sleeping.","{fam} dort.","{fam} está durmiendo."],
["family","{fae}🍳","{fam} is cooking.","{fam} fait la cuisine.","{fam} está cocinando."],["family","{fae}📖","{fam} is reading a book.","{fam} lit un livre.","{fam} está leyendo un libro."],
["family","{fae}👈","This is {fam}.","C'est {fam}.","{fg:Este|Esta} es {fam}."],["family","{fae}🎲","I'm playing with {fam}.","Je joue avec {fam}.","Juego con {fam}."],
["family","{fae}❓","Where is {fam}?","Où est {fam} ?","¿Dónde está {fam}?"],["family","{fae}{ae}","{fam} sees {a}.","{fam} voit {a}.","{fam} ve {a}."],
["object","{oe}","I have {o}.","J'ai {o}.","Tengo {o}."],["object","{oe}❓","Where is {mo}?","Où est {mo} ?","¿Dónde está {mo}?"],["object","{oe}😢","I've lost {mo}.","J'ai perdu {mo}.","Perdí {mo}."],
["object","{oe}🎉","I found {mo}!","J'ai trouvé {mo} !","¡Encontré {mo}!"],["object","{oe}🙏","Can I have {o}, please?","Je peux avoir {o}, s'il te plaît ?","¿Me das {o}, por favor?"],
["object","{oe}🫴","Give me {od}, please.","Donne-moi {od}, s'il te plaît.","Dame {od}, por favor."],["object","{oe}🍽️","{od} is on the table.","{od} est sur la table.","{od} está sobre la mesa."],
["object","{oe}🛏️","{od} is under the bed.","{od} est sous le lit.","{od} está debajo de la cama."],
["food","{foe}","I'm eating {food}.","Je mange {food}.","Estoy comiendo {food}."],["food","{foe}🙏","I would like {food}, please.","Je voudrais {food}, s'il te plaît.","Quiero {food}, por favor."],
["food","{foe}😍","I love {fl}!","J'adore {fl} !","¡Me {fp:encanta|encantan} {fl}!"],["food","{fae}{foe}","{fam} is eating {food}.","{fam} mange {food}.","{fam} está comiendo {food}."],
["number","{ane}","I see {an}.","Je vois {an}.","Veo {an}."],["number","{ane}","There are {an}.","Il y a {an}.","Hay {an}."],
["number","🔢","I can count to {n}!","Je sais compter jusqu'à {n} !","¡Sé contar hasta {n}!"],["number","1️⃣2️⃣3️⃣","One, two, three!","Un, deux, trois !","¡Uno, dos, tres!"]
].map(a=>({u:a[0],p:a[1],en:a[2],fr:a[3],es:a[4]}));

/* [unit, picture, en Q, en A, fr Q, fr A, es Q, es A] */
const Q=[
["qa","🧒","What's your name?","My name is {k}.","Comment tu t'appelles ?","Je m'appelle {k}.","¿Cómo te llamás?","Me llamo {k}."],
["qa","🙂","How are you?","I'm fine, thank you.","Comment ça va ?","Ça va bien, merci.","¿Cómo estás?","Bien, gracias."],
["qa","🎂{nd}","How old are you?","I'm {n} years old.","Quel âge as-tu ?","J'ai {n} ans.","¿Cuántos años tenés?","Tengo {n} años."],
["qa","🏠","Where do you live?","I live in a house.","Où habites-tu ?","J'habite dans une maison.","¿Dónde vivís?","Vivo en una casa."],
["animal","{ae}","What is it?","It's {a}.","Qu'est-ce que c'est ?","C'est {a}.","¿Qué es?","Es {a}."],
["colour","{ae}{ce}","What colour is {the}?","{the} is {ca}.","De quelle couleur est {the} ?","{the} est {ca}.","¿De qué color es {the}?","{the} es {ca}."],
["number","{ane}","How many {apl} are there?","There are {an}.","Combien {deapl} y a-t-il ?","Il y a {an}.","¿{g:Cuántos|Cuántas} {apl} hay?","Hay {an}."],
["animal","{ae}🌳","Where is {the}?","{the} is in the garden.","Où est {the} ?","{the} est dans le jardin.","¿Dónde está {the}?","{the} está en el jardín."],
["animal","{ae}😴","What is {the} doing?","{the} is sleeping.","Que fait {the} ?","{the} dort.","¿Qué hace {the}?","{the} está durmiendo."],
["animal","{ae}❤️","Do you like {lp}?","Yes, I love {lp}!","Tu aimes {lp} ?","Oui, j'adore {lp} !","¿Te gustan {lp}?","¡Sí, me encantan {lp}!"],
["animal","{ae}🏠","Do you have a pet?","Yes, I have {a}.","Tu as un animal ?","Oui, j'ai {a}.","¿Tenés mascota?","Sí, tengo {a}."],
["colour","{ce}","What's your favourite colour?","My favourite colour is {col}.","Quelle est ta couleur préférée ?","Ma couleur préférée, c'est le {col}.","¿Cuál es tu color favorito?","Mi color favorito es el {col}."],
["animal","{ae}⭐","What's your favourite animal?","My favourite animal is {the}.","Quel est ton animal préféré ?","Mon animal préféré, c'est {the}.","¿Cuál es tu animal favorito?","Mi animal favorito es {the}."],
["family","{fae}🖼️","Who is in the photo?","It's {fam}.","Qui est sur la photo ?","C'est {fam}.","¿Quién está en la foto?","Es {fam}."],
["family","{fae}🍳","Where is {yf}?","{fam} is in the kitchen.","Où est {yf} ?","{fam} est dans la cuisine.","¿Dónde está {yf}?","{fam} está en la cocina."],
["family","{fae}📖","What is {yf} doing?","{fam} is reading.","Que fait {yf} ?","{fam} lit.","¿Qué está haciendo {yf}?","{fam} está leyendo."],
["daily","🍽️","Are you hungry?","Yes, I'm hungry!","Tu as faim ?","Oui, j'ai faim !","¿Tenés hambre?","¡Sí, tengo hambre!"],
["daily","💧","Are you thirsty?","Yes, I'd like some water.","Tu as soif ?","Oui, je voudrais de l'eau.","¿Tenés sed?","Sí, quiero agua."],
["daily","😴","Are you sleepy?","Yes, I want to sleep.","Tu as sommeil ?","Oui, je veux dormir.","¿Tenés sueño?","Sí, quiero dormir."],
["daily","🥶","Are you cold?","Yes, I'm cold.","Tu as froid ?","Oui, j'ai froid.","¿Tenés frío?","Sí, tengo frío."],
["food","{foe}","Do you want {food}?","Yes, please!","Tu veux {food} ?","Oui, s'il te plaît !","¿Querés {food}?","¡Sí, por favor!"],
["daily","🎲","Do you want to play?","Yes, let's play!","Tu veux jouer ?","Oui, on joue !","¿Querés jugar?","¡Sí, juguemos!"],
["food","{foe}🍽️","What do you want to eat?","I want {food}.","Qu'est-ce que tu veux manger ?","Je veux {food}.","¿Qué querés comer?","Quiero {food}."],
["food","{foe}😋","What are you eating?","I'm eating {food}.","Qu'est-ce que tu manges ?","Je mange {food}.","¿Qué estás comiendo?","Estoy comiendo {food}."],
["food","{foe}❤️","Do you like {fl}?","Yes, I love {fl}!","Tu aimes {fl} ?","Oui, j'adore {fl} !","¿Te {fp:gusta|gustan} {fl}?","¡Sí, me {fp:encanta|encantan} {fl}!"],
["colour","{oe}{ce}","What colour is {yo}?","My {ow} is {co}.","De quelle couleur est {yo} ?","{mo} est {co}.","¿De qué color es {yo}?","{mo} es {co}."],
["object","{oe}🛏️","Where is {yo}?","My {ow} is under the bed.","Où est {yo} ?","{mo} est sous le lit.","¿Dónde está {yo}?","{mo} está debajo de la cama."],
["object","{oe}","What do you have?","I have {o}.","Qu'est-ce que tu as ?","J'ai {o}.","¿Qué tenés?","Tengo {o}."],
["object","{oe}🫴","Can you give me {od}?","Yes, here you go!","Tu peux me donner {od} ?","Oui, tiens !","¿Me das {od}?","¡Sí, tomá!"],
["daily","📅","What day is it today?","Today is {day}.","Quel jour sommes-nous ?","Aujourd'hui, c'est {day}.","¿Qué día es hoy?","Hoy es {day}."],
["daily","🌧️","What's the weather like?","It's raining.","Quel temps fait-il ?","Il pleut.","¿Cómo está el tiempo?","Está lloviendo."],
["daily","🏫","Where are you going?","I'm going to school.","Où vas-tu ?","Je vais à l'école.","¿Adónde vas?","Voy a la escuela."],
["number","🕐","What time is it?","It's {n} o'clock.","Quelle heure est-il ?","Il est {n} heures.","¿Qué hora es?","Son las {n}."],
["daily","🤝","Can I help you?","Yes, thank you!","Je peux t'aider ?","Oui, merci !","¿Te ayudo?","¡Sí, gracias!"],
["qa","🗣️","Do you speak {L}?","Yes, I speak a little {L}.","Tu parles {Lfr} ?","Oui, je parle un peu {Lfr}.","¿Hablás {Les}?","Sí, hablo un poco de {Les}."],
["animal","{ae}🔊","What does {the} say?","{the} says \"{snd}\".","Que dit {the} ?","{the} dit « {snd} ».","¿Qué dice {the}?","{the} dice « {snd} »."],
["number","🔢","Can you count to {n}?","Yes! One, two, three...","Tu sais compter jusqu'à {n} ?","Oui ! Un, deux, trois…","¿Sabés contar hasta {n}?","¡Sí! Uno, dos, tres…"],
["animal","{ae}🍽️","Is {the} sleeping?","No, {the} is eating.","{the} dort ?","Non, {the} mange.","¿{the} está durmiendo?","No, {the} está comiendo."],
["colour","{ae}{ce}","Is {the} {ca}?","Yes, {the} is {ca}.","{the} est {ca} ?","Oui, {the} est {ca}.","¿{the} es {ca}?","Sí, {the} es {ca}."],
["food","{foe}🙋","Who wants {food}?","Me! Me!","Qui veut {food} ?","Moi ! Moi !","¿Quién quiere {food}?","¡Yo! ¡Yo!"],
["daily","🏃","Shall we go?","Yes, let's go!","On y va ?","Oui, allons-y !","¿Vamos?","¡Sí, vamos!"],
["daily","🛏️","Did you sleep well?","Yes, very well.","Tu as bien dormi ?","Oui, très bien.","¿Dormiste bien?","Sí, muy bien."],
["daily","🎲","What are you doing?","I'm playing.","Qu'est-ce que tu fais ?","Je joue.","¿Qué estás haciendo?","Estoy jugando."],
["daily","🖍️","What do you want to do?","I want to draw.","Qu'est-ce que tu veux faire ?","Je veux dessiner.","¿Qué querés hacer?","Quiero dibujar."],
["daily","🛝","Do you want to go to the park?","Yes, I love the park!","Tu veux aller au parc ?","Oui, j'adore le parc !","¿Querés ir a la plaza?","¡Sí, me encanta la plaza!"],
["family","{fae}❤️","Do you love {yf}?","Yes, I love {fam} very much!","Tu aimes {yf} ?","Oui, j'aime beaucoup {fam} !","¿Querés a {yf}?","¡Sí, quiero mucho a {fam}!"],
["family","{fae}🏠","Is {yf} at home?","Yes, {fam} is at home.","{yf} est à la maison ?","Oui, {fam} est à la maison.","¿{yf} está en casa?","Sí, {fam} está en casa."],
["animal","{ae}🏷️","What is {the} called?","It's called {pn}.","Comment s'appelle {the} ?","{g:Il|Elle} s'appelle {pn}.","¿Cómo se llama {the}?","Se llama {pn}."],
["animal","{ae}🛏️","Where is {the} sleeping?","{the} is sleeping in the bed.","Où dort {the} ?","{the} dort dans le lit.","¿Dónde duerme {the}?","{the} duerme en la cama."],
["daily","🥵","Is it hot or cold?","It's hot!","Il fait chaud ou froid ?","Il fait chaud !","¿Hace calor o frío?","¡Hace calor!"],
["number","{nd}⭐","What's your favourite number?","My favourite number is {n}.","Quel est ton nombre préféré ?","Mon nombre préféré, c'est le {n}.","¿Cuál es tu número favorito?","Mi número favorito es el {n}."],
["colour","✏️{ae}","Do you want to draw {a}?","Yes, {ac}!","Tu veux dessiner {a} ?","Oui, {ac} !","¿Querés dibujar {a}?","¡Sí, {ac}!"],
["colour","🖍️{ce}","Which colour do you want?","I want {col}.","Quelle couleur tu veux ?","Je veux le {col}.","¿Qué color querés?","Quiero el {col}."],
["object","🎒{oe}","What's in your bag?","There's {o} in my bag.","Qu'est-ce qu'il y a dans ton sac ?","Il y a {o} dans mon sac.","¿Qué hay en tu mochila?","Hay {o} en mi mochila."],
["family","{fae}🎲","Who are you playing with?","I'm playing with {fam}.","Avec qui tu joues ?","Je joue avec {fam}.","¿Con quién jugás?","Juego con {fam}."],
["animal","{ae}👀","Can you see {the}?","Yes, {the} is there!","Tu vois {the} ?","Oui, {the} est là !","¿Ves {the}?","¡Sí, {the} está ahí!"],
["daily","🛁","Do you want to have a bath?","No, I don't want to!","Tu veux prendre un bain ?","Non, je ne veux pas !","¿Querés bañarte?","¡No, no quiero!"],
["daily","🧼","Did you wash your hands?","Yes, they're clean.","Tu t'es lavé les mains ?","Oui, elles sont propres.","¿Te lavaste las manos?","Sí, están limpias."],
["daily","⏰🍽️","Is it time to eat?","Yes, let's eat!","C'est l'heure de manger ?","Oui, à table !","¿Es hora de comer?","¡Sí, a comer!"],
["daily","🥤","What do you want to drink?","Water, please.","Qu'est-ce que tu veux boire ?","De l'eau, s'il te plaît.","¿Qué querés tomar?","Agua, por favor."],
["daily","🥛🧃","Do you want milk or juice?","Juice, please.","Tu veux du lait ou du jus ?","Du jus, s'il te plaît.","¿Querés leche o jugo?","Jugo, por favor."],
["food","{ae}{foe}","Is {the} hungry?","Yes, {the} wants {food}.","{the} a faim ?","Oui, {the} veut {food}.","¿{the} tiene hambre?","Sí, {the} quiere {food}."],
["food","{fae}{foe}","What is {yf} eating?","{fam} is eating {food}.","Qu'est-ce que {yf} mange ?","{fam} mange {food}.","¿Qué está comiendo {yf}?","{fam} está comiendo {food}."],
["object","{oe}❓","Where is {mo}?","Your {ow} is in the bedroom.","Où est {mo} ?","{yo} est dans la chambre.","¿Dónde está {mo}?","{yo} está en el cuarto."],
["qa","{ae}💬","How do you say \"{xA}\" in {L}?","You say \"{tA}\".","Comment on dit « {xA} » en {Lfr} ?","On dit « {tA} ».","¿Cómo se dice « {xA} » en {Les}?","Se dice « {tA} »."],
["qa","{ae}🤔","What does \"{tA}\" mean?","It means \"{xA}\".","Que veut dire « {tA} » ?","Ça veut dire « {xA} ».","¿Qué quiere decir « {tA} »?","Quiere decir « {xA} »."],
["animal","📖{ae}","Shall we read a book?","Yes, the one about {lp}!","On lit un livre ?","Oui, celui avec {lp} !","¿Leemos un libro?","¡Sí, el de {lp}!"],
["daily","🤗","Do you want a hug?","Yes, a big hug!","Tu veux un câlin ?","Oui, un gros câlin !","¿Querés un abrazo?","¡Sí, un abrazo grande!"],
["daily","🙂","Are you sad?","No, I'm fine!","Tu es triste ?","Non, ça va !","¿Estás triste?","¡No, estoy bien!"],
["daily","🩹","Does it hurt?","Yes, my knee hurts.","Tu as mal ?","Oui, j'ai mal au genou.","¿Te duele?","Sí, me duele la rodilla."],
["daily","💃","Do you like dancing?","Yes, I love dancing!","Tu aimes danser ?","Oui, j'adore danser !","¿Te gusta bailar?","¡Sí, me encanta bailar!"],
["daily","🎤","Do you like singing?","Yes, I sing all the time!","Tu aimes chanter ?","Oui, je chante tout le temps !","¿Te gusta cantar?","¡Sí, canto todo el tiempo!"],
["daily","🏊","Can you swim?","Yes, I can swim!","Tu sais nager ?","Oui, je sais nager !","¿Sabés nadar?","¡Sí, sé nadar!"],
["animal","{ae}⬆️","Can you jump like {a}?","Yes, look!","Tu sais sauter comme {a} ?","Oui, regarde !","¿Sabés saltar como {a}?","¡Sí, mirá!"],
["animal","📦{ae}","What's in the box?","There's {a} in the box!","Qu'est-ce qu'il y a dans la boîte ?","Il y a {a} dans la boîte !","¿Qué hay en la caja?","¡Hay {a} en la caja!"],
["daily","🚽","Where is the toilet?","It's over there.","Où sont les toilettes ?","C'est là-bas.","¿Dónde está el baño?","Está allá."],
["object","{oe}😢","What's wrong?","I've lost {mo}.","Qu'est-ce qui ne va pas ?","J'ai perdu {mo}.","¿Qué pasa?","Perdí {mo}."],
["animal","{ae}😈","Who did this?","It was {the}!","Qui a fait ça ?","C'est {the} !","¿Quién hizo esto?","¡Fue {the}!"],
["object","{oe}🤔","Is this yours?","Yes, it's {mo}.","C'est à toi ?","Oui, c'est {mo}.","¿Es {og:tuyo|tuya}?","Sí, es {mo}."],
["colour","👀{ae}{ce}","What do you see?","I see {ac}.","Qu'est-ce que tu vois ?","Je vois {ac}.","¿Qué ves?","Veo {ac}."],
["object","{oe}{fae}","Who has {od}?","{fam} has it.","Qui a {od} ?","C'est {fam} qui l'a.","¿Quién tiene {od}?","{og:Lo|La} tiene {fam}."],
["daily","📺","Do you want to watch a film?","Yes, a cartoon!","Tu veux regarder un film ?","Oui, un dessin animé !","¿Querés ver una película?","¡Sí, unos dibujitos!"],
["daily","🤝","Can you help me?","Of course!","Tu peux m'aider ?","Bien sûr !","¿Me ayudás?","¡Claro!"],
["animal","{ae}☀️","What did you do today?","I played with {a}.","Qu'est-ce que tu as fait aujourd'hui ?","J'ai joué avec {a}.","¿Qué hiciste hoy?","Jugué con {a}."],
["object","{oe}🙅","Do you want {o}?","No, thank you.","Tu veux {o} ?","Non, merci.","¿Querés {o}?","No, gracias."],
["animal","{ae}{ae2}","Do you prefer {lp} or {lp2}?","I prefer {lp}!","Tu préfères {lp} ou {lp2} ?","Je préfère {lp} !","¿Preferís {lp} o {lp2}?","¡Prefiero {lp}!"],
["colour","🚲{ce}","Do you have a bike?","Yes, a {col} bike.","Tu as un vélo ?","Oui, un vélo {cm}.","¿Tenés bici?","Sí, una bici {cf}."],
["colour","🌤️","What colour is the sky?","The sky is blue.","De quelle couleur est le ciel ?","Le ciel est bleu.","¿De qué color es el cielo?","El cielo es azul."],
["colour","🌱","What colour is the grass?","The grass is green.","De quelle couleur est l'herbe ?","L'herbe est verte.","¿De qué color es el pasto?","El pasto es verde."],
["daily","😁","How do you feel?","I feel great!","Comment tu te sens ?","Je me sens super bien !","¿Cómo te sentís?","¡Me siento súper bien!"],
["animal","{ae2}❓","Is that {a}?","No, it's {a2}!","C'est {a} ?","Non, c'est {a2} !","¿Es {a}?","¡No, es {a2}!"],
["daily","🏃‍♀️","Are you coming?","Yes, I'm coming!","Tu viens ?","Oui, j'arrive !","¿Venís?","¡Sí, ya voy!"],
["daily","🏠","Do you want to go home?","Yes, let's go home!","Tu veux rentrer à la maison ?","Oui, on rentre !","¿Querés volver a casa?","¡Sí, volvamos!"],
["colour","{ae}{ce}{ce2}","Is {the} {col} or {col2}?","{the} is {col}!","{the} est {ca} ou {ca2} ?","{the} est {ca} !","¿{the} es {ca} o {ca2}?","¡{the} es {ca}!"],
["object","{oe}⭐","What's your favourite toy?","My favourite toy is my {ow}.","Quel est ton jouet préféré ?","Mon jouet préféré, c'est {mo}.","¿Cuál es tu juguete favorito?","Mi juguete favorito es {mo}."],
["colour","✏️{ae}{ce}","What are you drawing?","I'm drawing {ac}.","Qu'est-ce que tu dessines ?","Je dessine {ac}.","¿Qué estás dibujando?","Estoy dibujando {ac}."],
["object","{oe}🎲","Do you want to play with {od}?","Yes, great!","Tu veux jouer avec {od} ?","Oui, super !","¿Querés jugar con {od}?","¡Sí, genial!"],
["family","{fae}😊","Is {yf} nice?","Yes, very nice!","{yf} est {fg:gentil|gentille} ?","Oui, très {fg:gentil|gentille} !","¿{yf} es {fg:bueno|buena}?","¡Sí, muy {fg:bueno|buena}!"],
["animal","{ae}🌳","Where is {the} hiding?","Behind the tree!","Où se cache {the} ?","Derrière l'arbre !","¿Dónde se esconde {the}?","¡Detrás del árbol!"],
["number","🙈{nd}","Who wants to play hide and seek?","Me! I'll count to {n}!","Qui veut jouer à cache-cache ?","Moi ! Je compte jusqu'à {n} !","¿Quién quiere jugar a las escondidas?","¡Yo! ¡Cuento hasta {n}!"]
].map(a=>({u:a[0],p:a[1],q:{en:a[2],fr:a[4],es:a[6]},a:{en:a[3],fr:a[5],es:a[7]}}));

/* ---------- rendering ---------- */
const pick=a=>a[Math.floor(Math.random()*a.length)];
function other(a,x){let y;do{y=pick(a)}while(y===x);return y}
function bind(item){
  const txt=JSON.stringify(item),an=pick(txt.includes("{snd}")?AN.filter(a=>a.fr.s&&a.es.s):AN),co=pick(COL);
  return {an,an2:other(AN,an),co,co2:other(COL,co),fa:pick(FAM),ob:pick(OBJ),fo:pick(FOOD),n:2+Math.floor(Math.random()*9),day:pick(DAYS.en.map((_,i)=>i)),pn:pick(PETS),
    k:localStorage.getItem("fr_current")||"Mateo"}}
function indef(x,L){if(L=="en"){const w=x.en;return (V_EN.test(w)?"an ":"a ")+w}const v=x[L];return (v.g=="f"?(L=="fr"?"une ":"una "):"un ")+v.w}
function def(x,L){if(L=="en")return "the "+x.en;const v=x[L];if(L=="fr")return V_FR.test(v.w)?"l'"+v.w:(v.g=="f"?"la ":"le ")+v.w;return (v.g=="f"?"la ":"el ")+v.w}
function poss(x,L,you){if(L=="en")return (you?"your ":"my ")+x.en;const v=x[L];if(L=="es")return (you?"tu ":"mi ")+v.w;
  const f=v.g=="f"&&!V_FR.test(v.w);return (you?(f?"ta ":"ton "):(f?"ma ":"mon "))+v.w}
function agree(c,x,L){return L=="en"?c.en:c[L][x[L].g=="f"?1:0]}
function tok(k,b,L){
  const A=b.an,T=LANG;
  switch(k){
    case "a":return indef(A,L);case "a2":return indef(b.an2,L);case "the":return def(A,L);
    case "lp":case "lp2":{const x=k=="lp"?A:b.an2;if(L=="en")return x.enp;return (L=="fr"?"les ":x.es.g=="f"?"las ":"los ")+x[L].pl}
    case "apl":return L=="en"?A.enp:A[L].pl;
    case "deapl":return (V_FR.test(A.fr.pl)?"d'":"de ")+A.fr.pl;
    case "an":return NUMS[L][b.n]+" "+(L=="en"?A.enp:A[L].pl);
    case "n":return NUMS[L][b.n];
    case "ac":return L=="en"?(V_EN.test(b.co.en)?"an ":"a ")+b.co.en+" "+A.en:indef(A,L)+" "+agree(b.co,A,L);
    case "ca":return agree(b.co,A,L);case "ca2":return agree(b.co2,A,L);
    case "col":return L=="en"?b.co.en:b.co[L][0];case "col2":return L=="en"?b.co2.en:b.co2[L][0];
    case "cm":return b.co[L][0];case "cf":return b.co[L][1];
    case "co":return agree(b.co,b.ob,L);
    case "fam":return poss(b.fa,L);case "yf":return poss(b.fa,L,1);
    case "o":return indef(b.ob,L);case "od":return def(b.ob,L);case "mo":return poss(b.ob,L);case "yo":return poss(b.ob,L,1);case "ow":return b.ob.en;
    case "food":return indef(b.fo,L);case "fl":return b.fo.lv[L];
    case "k":return b.k;case "pn":return b.pn;case "day":return DAYS[L][b.day];
    case "L":return LANG=="es"?"Spanish":"French";case "Lfr":return LANG=="es"?"espagnol":"français";case "Les":return LANG=="es"?"español":"francés";case "snd":return A[T].s;
    case "tA":return indef(A,T);case "xA":return indef(A,L==T?BASE:L);
  }
  const m=k.match(/^(g|fg|og|fp):(.*)\|(.*)$/);if(m){const fem=m[1]=="g"?A[L].g=="f":m[1]=="fg"?b.fa[L].g=="f":m[1]=="og"?b.ob[L].g=="f":b.fo.esPl;return fem?m[3]:m[2]}
  return "{"+k+"}";
}
function R(s,b,L){return s.replace(/\{([^}]+)\}/g,(_,k)=>tok(k,b,L)).replace(/^([¡¿«"\s]*)(\p{L})/u,(m,a,c)=>a+c.toUpperCase())}
function pic(s,b){return s.replace(/\{(\w+)\}/g,(_,k)=>({ae:b.an.e,ae2:b.an2.e,ce:b.co.e,ce2:b.co2.e,fae:b.fa.e,oe:b.ob.e,foe:b.fo.e,ane:b.an.e.repeat(b.n),nd:String(b.n)})[k]||"")}
/* phrase(i) -> {tgt,en,pic,key}; qa(i) -> {q:{tgt,en},a:{tgt,en},pic,key} */
const LS=["en","fr","es"],all=(o,b)=>Object.fromEntries(LS.map(L=>[L,R(o[L],b,L)]));
function phrase(i,b){const it=P[i];b=b||bind(it);const tx=all(it,b);return {i,u:it.u,tx,tgt:tx[LANG],pic:pic(it.p,b),b}}
function qa(i,b){const it=Q[i];b=b||bind(it);const q=all(it.q,b),a=all(it.a,b);return {i,u:it.u,q,a,tgt:q[LANG],pic:pic(it.p,b),b}}
/* the kid's own language (for hints and translations): Tata speaks French, the boys English */
const KID=localStorage.getItem("fr_current")||"x",BK="fr_base_"+KID;
let BASE=localStorage.getItem(BK)||(KID=="Tata"?"fr":"en");if(BASE==LANG)BASE="en";
const FLAG={en:"🇬🇧",fr:"🇫🇷",es:"🇦🇷"},LNAME={en:"English",fr:"Français",es:"Español"};
const HELP=LANG=="es"?["en","fr","es"]:["en","fr"];
function setBase(L){try{localStorage.setItem(BK,L)}catch(e){}location.reload()}
window.CONV={get BASE(){return BASE},setBase,FLAG,LNAME,HELP,KID,P,Q,AN,COL,FAM,OBJ,FOOD,NUMS,bind,R,pic,phrase,qa,indef,def,poss,pick};
})();
