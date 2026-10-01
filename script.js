const NEW_YORK = "America/New_York";

function updateClock() {
  const now = new Date();

  const time = new Intl.DateTimeFormat("en-US", {
    timeZone: NEW_YORK,
    hour: "numeric",
    minute: "2-digit",
    hour12: true
  }).format(now);

  const date = new Intl.DateTimeFormat("en-US", {
    timeZone: NEW_YORK,
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(now);

  const zone = new Intl.DateTimeFormat("en-US", {
    timeZone: NEW_YORK,
    timeZoneName: "short"
  }).formatToParts(now)
    .find(part => part.type === "timeZoneName")?.value || "ET";

  const clock = document.getElementById("clock");
  const dateEl = document.getElementById("date");
  const zoneEl = document.getElementById("tzLabel");

  if (clock) clock.textContent = time;
  if (dateEl) dateEl.textContent = date;
  if (zoneEl) zoneEl.textContent = `NEW YORK · ${zone}`;
}

updateClock();
setInterval(updateClock, 1000);


/* ---------------- BACKGROUNDS ---------------- */

const scenes = [
  "https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1473445361085-b9a07f55608b?auto=format&fit=crop&w=2200&q=90",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=2200&q=90"
];

function setScene() {
  const scene = document.getElementById("scene");
  if (!scene) return;

  let number = Number(localStorage.getItem("nightfallScene") || 0);
  number = number % scenes.length;

  scene.style.backgroundImage = `url("${scenes[number]}")`;
}

function nextScene() {
  let number = Number(localStorage.getItem("nightfallScene") || 0);
  number++;

  localStorage.setItem("nightfallScene", number);

  setScene();
}

setScene();

document
  .getElementById("sceneBtn")
  ?.addEventListener("click", nextScene);


/* ---------------- THEMES ---------------- */

function setTheme(theme) {
  localStorage.setItem("nightfallTheme", theme);
  document.documentElement.dataset.theme = theme;
}

setTheme(
  localStorage.getItem("nightfallTheme") || "winter"
);

document.querySelectorAll("[data-theme]").forEach(button => {
  button.addEventListener("click", () => {
    setTheme(button.dataset.theme);
  });
});
