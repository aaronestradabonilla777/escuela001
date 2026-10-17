export function initializeSiteNavigation(): void {
  const menuButton = document.querySelector<HTMLButtonElement>(".menu-toggle");
  const nav = document.querySelector<HTMLElement>("#main-nav");

  if (!menuButton || !nav) return;

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    nav.classList.toggle("open", !expanded);
  });

  nav.querySelectorAll<HTMLAnchorElement>("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    });
  });
}
