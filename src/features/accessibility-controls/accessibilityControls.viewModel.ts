export function initializeAccessibilityControls(): void {
  const textSizeButton = document.querySelector<HTMLButtonElement>("#text-size");
  const contrastButton = document.querySelector<HTMLButtonElement>("#contrast");

  textSizeButton?.addEventListener("click", () => {
    const enlarged = document.body.classList.toggle("large-text");
    textSizeButton.setAttribute("aria-pressed", String(enlarged));
  });

  contrastButton?.addEventListener("click", () => {
    const highContrast = document.body.classList.toggle("high-contrast");
    contrastButton.setAttribute("aria-pressed", String(highContrast));
  });
}
