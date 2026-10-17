# Aula abierta — contexto para agentes

## Proyecto

Sitio educativo de una sola página sobre entornos digitales accesibles e incluyentes en y para el aprendizaje. La audiencia principal son estudiantes y docentes; el contenido debe ser claro, respetuoso, verificable y en español.

## Stack y comandos

| Área | Tecnología | Comando |
|---|---|---|
| Interfaz | HTML semántico, CSS y TypeScript | `npm run dev` |
| Build | Vite 8 + TypeScript | `npm run build` |
| Preview | Vite | `npm run preview` |
| Hosting | Vercel, salida `dist` | automático desde `main` |

No hay backend, base de datos, linter ni suite de pruebas configurados.

## Flujo de trabajo

Seguir `ANÁLISIS → SPEC → DISEÑO → IMPLEMENTACIÓN → RDD → VERIFICACIÓN → ENTREGA` según `harnesses/phase.md`.

- Leer primero `Engram.md`, `harnesses/state.md` y la spec activa.
- Requerir aprobación explícita de la spec antes de iniciar una feature nueva.
- Mantener el contenido educativo y sus fuentes dentro del alcance aprobado.
- Declarar comprobaciones omitidas o inconclusas; nunca inventar resultados.
- RDD está `disabled/unmanaged` hasta que se configure una autoridad nativa. No fabricar recibos ni afirmar que el candidato fue aprobado por RDD.
- Commit, push y deploy requieren autorización del usuario; una spec o recibo no la sustituyen.

## Estructura

- `src/features/`: lógica de interfaz autocontenida por feature.
- `src/main.ts`: composición e inicialización.
- `public/assets/`: recursos publicados sin transformación.
- `specs/`: alcance, comportamiento y evidencia.
- `harnesses/`: reglas del ciclo SDD/RDD.
- `docs/`: decisiones de arquitectura.
- `Engram.md`: contexto y decisiones durables.

Para cambios posteriores, adapta la spec activa o crea una nueva. Mantén las páginas accesibles con teclado, texto alternativo y controles con estado anunciado.
