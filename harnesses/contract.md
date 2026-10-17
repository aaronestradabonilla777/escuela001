# Contrato de resultado y evidencia

Antes de iniciar una feature debe existir una spec aprobada con alcance, criterios identificables, edge cases, invariantes, riesgos y métodos de verificación.

| Criterio | Método | Evidencia esperada | Resultado |
|---|---|---|---|
| AC-001 | Inspección de contenido | Apartados de la consigna presentes | Pendiente |
| AC-004 | `npm run build` | TSC sin errores y salida Vite en `dist` | `passed` — Vite 8.3.4, 2026-10-17 |

Usa `passed`, `failed`, `not-run` o `inconclusive`. Nunca presentes una comprobación omitida como exitosa. Un resultado de build no demuestra por sí solo accesibilidad ni exactitud del contenido.
