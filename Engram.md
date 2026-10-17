# Engram — Aula abierta

Memoria técnica durable. El estado de la sesión vive en `harnesses/state.md`; la intención de producto vive en `specs/`.

## Stack

| Área | Tecnología |
|---|---|
| Frontend | HTML semántico, CSS, TypeScript 5.9+ |
| Tooling | Vite 8, npm |
| Hosting | Vercel, `dist` |
| Backend / DB | No aplica |

## Decisiones

| ADR | Decisión | Razón |
|---|---|---|
| [ADR-001](docs/ADR-001-vite-typescript.md) | Vite con TypeScript vanilla y features pequeñas | La interfaz es una guía estática; conserva tiempos de carga ligeros y añade tipos a la interacción sin un framework innecesario. |

## Convenciones

- Idioma de interfaz y documentación: español.
- Features en `src/features/<kebab-case>/`.
- Lógica de interacción en `*.viewModel.ts`; `src/main.ts` solo inicializa features.
- npm como gestor; no se deben versionar secretos ni datos personales.
- Mantener recursos gráficos locales y con alternativa textual cuando aporten significado.

## Restricciones

- Respetar la spec activa y usar fuentes institucionales en afirmaciones educativas, legales y técnicas.
- No afirmar conformidad WCAG solo por tener controles visuales; cualquier conformidad requiere evaluación completa.
- No cambiar HTML de contenido por una imagen de texto.
- RDD permanece `disabled/unmanaged` mientras no haya autoridad nativa configurada.

## Estado resumido

| Área | Estado | Spec |
|---|---|---|
| Guía educativa de una página | Implementada; verificación de build pendiente | [SPEC-2026-001](specs/SPEC-2026-001-aula-abierta.md) |
| Interacciones TypeScript | Implementadas | [SPEC-2026-001](specs/SPEC-2026-001-aula-abierta.md) |

El detalle de la sesión vive en `harnesses/state.md`.

## Comandos

```bash
npm install
npm run dev
npm run build
npm run preview
```
