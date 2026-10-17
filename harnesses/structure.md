# Estructura de interfaz

```text
src/
  features/
    accessibility-controls/
      accessibilityControls.viewModel.ts
    site-navigation/
      siteNavigation.viewModel.ts
  main.ts
public/
  assets/
```

Cada feature contiene su lógica e interacción. `src/main.ts` las inicializa. El contenido estable vive en HTML semántico, no en templates JavaScript. Mueve a `shared/` solo cuando una pieza sea realmente reutilizada por varias features. Agrega framework o rutas cuando una spec lo justifique.
