const facts = [
  ["A day on Venus is longer than a year on Venus.", "Venus rotates once in about 243 Earth days, while it orbits the Sun in about 225 Earth days.", "Venus"],
  ["Neutron stars are absurdly dense.", "A neutron star packs roughly the mass of the Sun into a sphere only around 20 km across.", "Stars"],
  ["Saturn could float in water.", "Saturn's average density is lower than water. You would just need an absolutely enormous bathtub.", "Planets"],
  ["Mars has blue sunsets.", "Fine dust in the Martian atmosphere scatters light differently from Earth's atmosphere, producing a bluish glow near sunset.", "Mars"],
  ["A million Earths could fit inside the Sun.", "The Sun's volume is roughly 1.3 million times Earth's volume.", "Sun"],
  ["There are volcanoes on Io.", "Jupiter's moon Io is the most volcanically activconst savedTheme =
  localStorage.getItem("nightfall-theme") || "winter";

document.body.dataset.theme = savedTheme;


// Clock
function updateClock() {
  const clock = document.getElementById("clock");

  if (clock) {
    clock.textContent =
      new Date().toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit"
      });
  }
}

updateClock();
setInterval(updateClock, 1000);


// Date
const date = document.getElementById("date");

if (date) {
  date.textContent =
    new Date().toLocaleDateString([], {
      weekday: "long",
      month: "long",
      day: "numeric"
    });
}


// Home comfort line
const lines = [
  "make yourself comfortable.",
  "nothing here needs to be productive.",
  "stay a while.",
  "you can just wander.",
  "one small thing at a time."
];

const comfort = document.getElementById("comfortLine");

if (comfort) {
  comfort.textContent =
    lines[Math.floor(Math.random() * lines.length)];
}


// Theme changer
function setTheme(themeName) {
  document.body.dataset.theme = themeName;
  localStorage.setItem("nightfall-theme", themeName);
}e world known in our solar system.", "Moons"],
  ["Space is not completely silent.", "Sound needs a medium such as air, so ordinary sound waves don't travel through the vacuum of interplanetary space.", "Physics"],
  ["A teaspoon of neutron-star material would be ridiculously heavy.", "Neutron-star matter is extraordinarily dense; everyday analogies quickly become difficult to imagine.", "Stars"],
  ["Jupiter has a giant storm.", "The Great Red Spot is a long-lived storm system larger than Earth.", "Jupiter"],
  ["Uranus rotates on its side.", "Its axial tilt is about 98 degrees, likely connected to a dramatic event early in its history.", "Uranus"],
  ["The Moon is slowly moving away from Earth.", "The average distance increases by about 3.8 cm per year due to tidal interactions.", "Moon"],
  ["Light from the Sun takes about 8 minutes to reach Earth.", "Sunlight travels roughly 150 million km to Earth, taking around 8 minutes 20 seconds.", "Light"],
  ["There are galaxies far beyond the Milky Way.", "The observable universe contains an enormous number of galaxies, each potentially holding billions of stars.", "Galaxies"],
  ["A black hole is not a cosmic vacuum cleaner.", "From far away, its gravity behaves like the gravity of any other object with the same mass.", "Black Holes"],
  ["Mercury has huge temperature swings.", "With almost no atmosphere to redistribute heat, its dayside and nightside temperatures differ dramatically.", "Mercury"],
  ["Mars has the tallest volcano in the solar system.", "Olympus Mons rises roughly 22 km above the surrounding plains.", "Mars"],
  ["Spacecraft can use gravity to change speed.", "Gravity assists let spacecraft exchange energy with planets to alter their trajectories.", "Spaceflight"],
  ["The International Space Station orbits Earth repeatedly each day.", "At its orbital speed, the station circles Earth about once every 90 minutes.", "Spaceflight"],
  ["The Milky Way and Andromeda are on a collision course.", "Their future interaction is expected on a timescale of billions of years.", "Galaxies"],
  ["Some stars are much cooler than the Sun.", "Red dwarfs are cooler and smaller than the Sun, yet they can live for extraordinarily long periods.", "Stars"]
];
document.getElementById("factCount").textContent = facts.length;

const thoughts = [
  "Somewhere out there, two photons are probably having the weirdest conversation.",
  "You are made of atoms that once lived in stars. That's objectively pretty wild.",
  "The universe has been doing this for billions of years and somehow you still have homework.",
  "Your browser tab is a tiny portal into a machine made of sand, electricity, and human ideas.",
  "There is no official rule saying you can't name a star after a snack."
];
const missions = [
  "Invent a name for an imaginary planet and give it one ridiculous law.",
  "Find the weirdest object within arm's reach. Give it a space-captain rank.",
  "Look outside for 10 seconds and name the first cloud you see.",
  "Draw an alien with exactly three elbows.",
  "Make up a constellation using objects on your desk.",
  "Try to explain gravity using only food metaphors.",
  "Pick a random emoji. It is now the official mascot of your space agency."
];

function $(id){return document.getElementById(id);}
function scrollToId(id){$(id).scrollIntoView({behavior:"smooth"});}
function newThought(){ $("thought").textContent = thoughts[Math.floor(Math.random()*thoughts.length)]; }
function newMission(){ $("mission").textContent = missions[Math.floor(Math.random()*missions.length)]; }

function changeName(){
  const name = prompt("Choose your space name:", localStorage.getItem("nookName") || "STARWALKER");
  if(name && name.trim()){
    const n = name.trim().slice(0,18).toUpperCase();
    localStorage.setItem("nookName", n);
    $("heroName").textContent=n; $("profileName").textContent=n;
  }
}
const savedName = localStorage.getItem("nookName");
if(savedName){ $("heroName").textContent=savedName; $("profileName").textContent=savedName; }

function newFact(){
  const i = Math.floor(Math.random()*facts.length), f=facts[i];
  $("factText").textContent=f[0]; $("factDetail").textContent=f[1];
  $("factNumber").textContent = String(i+1).padStart(2,"0");
}
const factTags = [...new Set(facts.map(f=>f[2]))];
$("factTags").innerHTML = factTags.map(t=>`<span class="fact-tag"># ${t}</span>`).join("");

const botReplies = {
  fact: () => "🚀 FACT DROP: " + facts[Math.floor(Math.random()*facts.length)][0],
  mission: () => "Your mission: " + missions[Math.floor(Math.random()*missions.length)],
  joke: () => ["Why did the astronaut break up with the moon? It needed space. 🌙","I tried to organize a space party, but there was no atmosphere. 🪐","What do planets like to read? Comet books. ☄️"][Math.floor(Math.random()*3)],
  bored: () => "Boredom detected. Initiating emergency fun protocol: roll the dice, play Reaction Rush, then invent an alien language.",
  hello: () => "Greetings, cosmic traveler. I am NOVA, your extremely unofficial space companion. 🤖",
  help: () => "I can tell you facts, assign missions, make jokes, translate alien nonsense, or encourage you to play a game.",
  default: () => ["Interesting. I have stored that in my imaginary database.","Hmm. Fascinating. The stars offer no comment.","NOVA has considered this deeply. My answer is: probably.",
    "That sounds like something an explorer would say.","I support this level of cosmic chaos. ✨"][Math.floor(Math.random()*5)]
};
function novaReply(text){
  const t=text.toLowerCase();
  if(t.includes("fact")||t.includes("space")) return botReplies.fact();
  if(t.includes("mission")) return botReplies.mission();
  if(t.includes("joke")) return botReplies.joke();
  if(t.includes("bored")) return botReplies.bored();
  if(t.match(/\b(hi|hello|hey|yo)\b/)) return botReplies.hello();
  if(t.includes("help")) return botReplies.help();
  return botReplies.default();
}
function addMsg(text, who="nova"){
  const d=document.createElement("div"); d.className=`msg ${who}`; d.textContent=text; $("messages").appendChild(d); $("messages").scrollTop=$("messages").scrollHeight;
}
function sendSuggestion(text){ $("chatInput").value=text; $("chatForm").requestSubmit(); }
function clearChat(){ $("messages").innerHTML=""; addMsg("Welcome back, "+($("profileName").textContent)+"! What cosmic nonsense shall we investigate?"); }
$("chatForm").addEventListener("submit",e=>{
  e.preventDefault(); const input=$("chatInput"), text=input.value.trim(); if(!text)return;
  addMsg(text,"you"); input.value=""; setTimeout(()=>addMsg(novaReply(text)),350);
});
clearChat();

// Planet Picker
let planetAnswer="";
function startPlanetGame(){
  const planets=[
    ["Mercury","I'm the closest planet to the Sun and have extreme temperature changes."],
    ["Venus","I'm wrapped in thick clouds and rotate unusually slowly."],
    ["Mars","I have polar ice caps and the solar system's tallest volcano."],
    ["Jupiter","I'm the largest planet and have a famous giant storm."],
    ["Saturn","My rings are made mostly of ice and rock."],
    ["Neptune","I'm a distant blue giant with extremely fast winds."]
  ];
  const p=planets[Math.floor(Math.random()*planets.length)]; planetAnswer=p[0];
  $("planetGame").innerHTML=`<div><strong>${p[1]}</strong><div style="margin-top:12px;display:flex;gap:5px;flex-wrap:wrap;justify-content:center">${planets.map(x=>`<button class="fact-tag" onclick="planetGuess('${x[0]}')">${x[0]}</button>`).join("")}</div></div>`;
}
function planetGuess(x){ $("planetGame").innerHTML=x===planetAnswer?`<strong style="color:var(--green)">✨ Correct! ${x}!</strong>`:`<strong style="color:var(--pink)">Not quite — it was ${planetAnswer}.</strong>`; }

// Reaction game
let reactionTimer, reactionStart=0, reactionWaiting=false;
function startReaction(){
  const box=$("reactionGame"), btn=$("reactionBtn"); clearTimeout(reactionTimer);
  reactionWaiting=true; box.className="game-area reaction-box"; box.textContent="WAIT...";
  btn.textContent="WAITING";
  reactionTimer=setTimeout(()=>{ reactionWaiting=false; box.classList.add("go"); box.textContent="CLICK!"; reactionStart=performance.now(); }, 900+Math.random()*2500);
}
$("reactionGame").addEventListener("click",()=>{
  const box=$("reactionGame"); if(reactionWaiting){clearTimeout(reactionTimer); reactionWaiting=false; box.classList.add("too-soon"); box.textContent="TOO SOON 😭"; $("reactionBtn").textContent="TRY AGAIN"; return;}
  if(reactionStart){const ms=Math.round(performance.now()-reactionStart); box.className="game-area reaction-box"; box.textContent=`${ms} ms ⚡`; $("reactionBtn").textContent="AGAIN"; reactionStart=0;}
});

// Guess
let target=Math.floor(Math.random()*100)+1, guesses=7;
function guessNumber(){
  const v=Number($("guessInput").value); if(!v)return;
  guesses--; let msg=v===target?"🎯 Nailed it! New number loaded.":guesses<=0?`💥 Out of guesses! It was ${target}.`:(v<target?"⬆️ Higher!":"⬇️ Lower!")+` ${guesses} left.`;
  $("guessResult").textContent=msg;
  if(v===target||guesses<=0){target=Math.floor(Math.random()*100)+1;guesses=7;}
}

// Memory
let memorySeq=[], memoryUser=[], memoryRound=0;
function startMemory(){
  memorySeq=[]; memoryUser=[]; memoryRound=0; $("memoryGame").innerHTML="";
  for(let i=0;i<16;i++){const c=document.createElement("button");c.className="memory-cell";c.onclick=()=>memoryClick(i);$("memoryGame").appendChild(c);}
  nextMemoryRound();
}
function nextMemoryRound(){
  memoryRound++; memoryUser=[]; memorySeq.push(Math.floor(Math.random()*16));
  setTimeout(async()=>{ for(const i of memorySeq){await new Promise(r=>setTimeout(r,180));const c=$("memoryGame").children[i];c.classList.add("on");await new Promise(r=>setTimeout(r,320));c.classList.remove("on");}},300);
}
function memoryClick(i){
  if(!memorySeq.length)return;
  memoryUser.push(i);
  if(i!==memorySeq[memoryUser.length-1]){alert("💫 Orbit lost! You reached round "+memoryRound+".");memorySeq=[];return;}
  if(memoryUser.length===memorySeq.length){if(memoryRound>=8){alert("🏆 You reached the edge of the known memory universe!");memorySeq=[];}else nextMemoryRound();}
}

// Lab
function rollDice(){const d=$("dice"); d.animate([{transform:"rotate(0) scale(.7)"},{transform:"rotate(360deg) scale(1)"}],{duration:400}); d.textContent=Math.floor(Math.random()*20)+1;}
function randomNebula(){
  const a=["#9b7cff","#56e7ff","#ff6fd8","#6fffb0","#ffe37a"], r=()=>a[Math.floor(Math.random()*a.length)];
  $("nebula").style.background=`radial-gradient(circle at ${20+Math.random()*60}% ${20+Math.random()*60}%, ${r()}, transparent 30%),radial-gradient(circle at ${20+Math.random()*60}% ${20+Math.random()*60}%, ${r()}, transparent 28%),#080b19`;
}
const future=["A strangely specific good idea will arrive when you least expect it.","You will discover a new favorite song soon.","Someone will laugh at something you say. This is good.","You will look at the Moon tonight and briefly become the main character.","A snack will become significantly more important than planned.","You will learn one tiny fact that you remember for years."];
function futureMessage(){ $("futureMsg").textContent=future[Math.floor(Math.random()*future.length)]; }
function alienTranslate(){
  const s=$("alienInput").value.trim(); if(!s){$("alienOutput").textContent="👽 ...please provide human words.";return;}
  const syll=["za","qri","vex","plo","nui","ka","shi","tor","umi","gra"];
  $("alienOutput").textContent=s.split(/\s+/).map(w=>syll[Math.floor(Math.random()*syll.length)]+syll[Math.floor(Math.random()*syll.length)]).join(" · ").toUpperCase()+" 👽";
}
$("themeBtn").onclick=()=>document.body.classList.toggle("light");
randomNebula();
newFact();

// Nebula Nook v2: page navigation helper
document.querySelectorAll('nav a').forEach(a => {
  const href = a.getAttribute('href');
  if (href === '#chat') a.href = 'chat.html';
  if (href === '#games') a.href = 'games.html';
  if (href === '#facts') a.href = 'facts.html';
  if (href === '#lab') a.href = 'lab.html';
});
