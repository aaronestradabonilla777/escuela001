---
id: SPEC-2026-001
status: approved
approved_by: user
approved_at: 2026-10-17
---

# Spec: Aula abierta — entornos digitales accesibles e incluyentes

## ¿Qué se construye?

Un sitio web claro, atractivo y adaptable titulado “Hacia entornos digitales accesibles e incluyentes en y para el aprendizaje”. Presenta conceptos, bases normativas, fundamentos teóricos y técnicos, y cinco categorías de tecnologías adaptativas.

## ¿Por qué?

La actividad escolar solicita articular contenido esencial, distribuir texto e imágenes de manera equilibrada y cuidar la redacción. El sitio sirve como guía divulgativa y se publica en Vercel.

## Alcance

- Incluye: definición de entorno digital inclusivo e intercultural; fundamento legal mexicano; inclusión, accesibilidad, usabilidad, interculturalidad y tecnologías adaptativas; WCAG 2.2 y POUR; apoyos para discapacidad visual, auditiva y motriz, dificultades de aprendizaje o cognitivas, e IA; fuentes consultables; diseño responsive; controles opcionales de lectura; TypeScript y organización SDD/RDD.
- No incluye: autenticación, backend, base de datos, formularios, conformidad WCAG certificada ni instalación/configuración de una autoridad RDD.

## Criterios de aceptación y evidencia

| ID | Comportamiento observable | Método de verificación |
|---|---|---|
| AC-001 | La página presenta todos los apartados pedidos por la actividad. | Inspección de contenido en `index.html`. |
| AC-002 | La guía incluye las cinco categorías de tecnologías adaptativas y ejemplos concretos. | Inspección de la sección de tecnologías. |
| AC-003 | Las afirmaciones normativas y técnicas enlazan fuentes institucionales. | Abrir y revisar los enlaces de recursos. |
| AC-004 | Navegación e interacciones básicas están implementadas en TypeScript estricto. | Inspección de `src/` y ejecución de `npm run build`. |
| AC-005 | La estructura se adapta a escritorio y móvil; usa HTML semántico, foco visible y alternativa textual para imágenes informativas. | Inspección responsive y revisión del DOM/atributos. |
| AC-006 | El contenido gráfico acompaña la temática sin sustituir texto esencial ni usar texto dentro de imágenes. | Inspección de la ilustración y sus textos alternativos. |
| AC-007 | Vercel puede compilar el proyecto con `npm run build` y publicar `dist`. | Compilación local y configuración de despliegue. |
| AC-008 | La estructura del repositorio documenta spec, diseño, fase y estado RDD sin simular aprobaciones. | Inspección de `AGENTS.md`, `Engram.md`, `harnesses/` y `docs/`. |

## Edge cases

- Si JavaScript no carga, la estructura y el contenido principal siguen disponibles.
- Si una imagen no carga, su alternativa textual comunica el contenido esencial.
- Los controles de contraste y tamaño de texto son opcionales y su estado debe anunciarse con `aria-pressed`.
- En una pantalla estrecha, la navegación se puede abrir y cerrar y la página no debe exigir desplazamiento horizontal.
- Las herramientas con IA se presentan como apoyos que requieren criterio humano, privacidad y revisión de sesgos.

## Invariantes

- No atribuir al W3C ni a las leyes requisitos que no estén respaldados por las fuentes enlazadas.
- No afirmar que la página cumple plenamente WCAG sin evaluación completa.
- Conservar acceso al contenido con tecnologías de apoyo y navegación por teclado.
- RDD sin autoridad configurada se registra como `disabled/unmanaged`.

## Riesgos

- Las disposiciones legales pueden actualizarse; revisar fuentes oficiales antes de futuras publicaciones.
- Algunos ejemplos tecnológicos pueden cambiar o requerir licencias/compatibilidad que varían por dispositivo.
- La ilustración se genera para esta guía; su alternativa textual debe permanecer junto a ella.

## Diseño

Sitio estático de una página. HTML contiene el contenido y los landmarks; CSS establece composición adaptable; Vite compila TypeScript vanilla organizado en features de navegación y controles de accesibilidad. Las imágenes públicas viven en `public/assets/`. No se necesita framework UI ni backend. La arquitectura se registra en [ADR-001](../docs/ADR-001-vite-typescript.md).

## Tareas

- [x] T-001: Crear contenido semántico y diseño responsive.
- [x] T-002: Organizar interacciones TypeScript por feature.
- [x] T-003: Añadir referencias, recursos visuales y documentación SDD/RDD.
- [x] T-004: Instalar dependencias y ejecutar build de producción.
- [ ] T-005: Revisar visualmente móvil y escritorio.
- [ ] T-006: Publicar desde el repositorio en Vercel y preparar el PDF cuando exista URL.

## Definition of Done

- [ ] Todos los criterios tienen evidencia observable.
- [ ] Build y comprobaciones aplicables están documentados.
- [ ] Las comprobaciones omitidas se declaran.
- [ ] Estado RDD indicado sin fabricar un recibo.
- [ ] URL publicada y captura añadidas al PDF de entrega.
