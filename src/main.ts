const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
const nav = document.querySelector<HTMLElement>("#main-nav");

menuButton?.addEventListener("click", () => {
  const expanded = menuButton.getAttribute("aria-expanded") === "true";
  menuButton.setAttribute("aria-expanded", String(!expanded));
  nav?.classList.toggle("open", !expanded);
});

nav?.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuButton?.setAttribute("aria-expanded", "false");
  });
});

document.querySelector<HTMLButtonElement>("#text-size")?.addEventListener("click", () => {
  document.body.classList.toggle("large-text");
});

document.querySelector<HTMLButtonElement>("#contrast")?.addEventListener("click", (event) => {
  const button = event.currentTarget;
  if (!(button instanceof HTMLButtonElement)) return;

  const enabled = document.body.classList.toggle("high-contrast");
  button.setAttribute("aria-pressed", String(enabled));
});
