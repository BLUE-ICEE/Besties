/* =========================
   NIGHTFALL THEME
========================= */

const savedTheme =
  localStorage.getItem("nightfall-theme") || "winter";

document.documentElement.dataset.theme = savedTheme;

function setTheme(theme) {

  document.documentElement.dataset.theme = theme;

  localStorage.setItem(
    "nightfall-theme",
    theme
  );
}


/* =========================
   NEW YORK CLOCK
========================= */

function updateClock() {

  const now = new Date();

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  if (!clock) return;

  clock.textContent =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "America/New_York",
        hour: "numeric",
        minute: "2-digit",
        hour12: true
      }
    ).format(now);

  date.textContent =
    new Intl.DateTimeFormat(
      "en-US",
      {
        timeZone: "America/New_York",
        weekday: "long",
        month: "long",
        day: "numeric"
      }
    ).format(now);
}

updateClock();

setInterval(updateClock, 1000);


/* =========================
   HOME BACKGROUND CHANGER
========================= */

const backgrounds = [

  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=2400&q=90",

  "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=2400&q=90",

  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=90",

  "https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=2400&q=90"
];

const changeView =
  document.getElementById("changeView");

const background =
  document.querySelector(".background");

if (changeView && background) {

  changeView.addEventListener("click", () => {

    const image =
      backgrounds[
        Math.floor(
          Math.random() * backgrounds.length
        )
      ];

    background.style.backgroundImage =
      `url("${image}")`;
  });
}
