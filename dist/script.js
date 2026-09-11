const brandReveal = document.querySelector("#brandReveal");
const emblemTrigger = document.querySelector("#emblemTrigger");
const countdown = document.querySelector("#countdown");
const countdownFields = {
  days: document.querySelector('[data-countdown="days"]'),
  hours: document.querySelector('[data-countdown="hours"]'),
  minutes: document.querySelector('[data-countdown="minutes"]'),
  seconds: document.querySelector('[data-countdown="seconds"]'),
};

const launchDate = new Date(2026, 9, 20, 0, 0, 0, 0);
let timer = null;

function setNumber(field, value) {
  const nextValue = String(value).padStart(2, "0");
  const node = countdownFields[field];
  if (node.textContent === nextValue) return;

  node.textContent = nextValue;
  node.classList.remove("is-ticking");
  requestAnimationFrame(() => node.classList.add("is-ticking"));
}

function renderCountdown() {
  const remaining = Math.max(0, Math.ceil((launchDate.getTime() - Date.now()) / 1000));
  const days = Math.floor(remaining / 86400);
  const hours = Math.floor((remaining % 86400) / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  setNumber("days", days);
  setNumber("hours", hours);
  setNumber("minutes", minutes);
  setNumber("seconds", seconds);
  countdown.setAttribute("aria-label", `${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds remaining`);
}

function showCountdown() {
  renderCountdown();
  brandReveal.classList.add("is-countdown");
  countdown.setAttribute("aria-hidden", "false");
  emblemTrigger.setAttribute("aria-expanded", "true");
  emblemTrigger.setAttribute("aria-label", "Show Vectiloom logo");
  timer ??= window.setInterval(renderCountdown, 250);
}

function showLogo() {
  brandReveal.classList.remove("is-countdown");
  countdown.setAttribute("aria-hidden", "true");
  emblemTrigger.setAttribute("aria-expanded", "false");
  emblemTrigger.setAttribute("aria-label", "Show launch countdown");
  if (timer !== null) {
    window.clearInterval(timer);
    timer = null;
  }
}

emblemTrigger.addEventListener("pointerenter", showCountdown);
emblemTrigger.addEventListener("pointerleave", showLogo);
emblemTrigger.addEventListener("focus", showCountdown);
emblemTrigger.addEventListener("blur", showLogo);
