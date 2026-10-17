# ADR-001: Vite con TypeScript vanilla

**Fecha:** 2026-10-17  
**Estado:** Aceptada

## Contexto

Aula abierta es una guía educativa de una página, con interacciones pequeñas de navegación y lectura. Requiere despliegue estático sencillo en Vercel y una base TypeScript clara para seguir ampliándola.

## Opciones consideradas

1. HTML/CSS/JavaScript sin build: mínimo, pero sin comprobación de tipos ni build reproducible.
2. React u otro framework: conveniente para interfaces con estado y rutas, pero añade complejidad que el alcance actual no necesita.
3. Vite + TypeScript vanilla: build estático, tipos para las interacciones y sin framework de interfaz adicional.

## Decisión

Usar Vite 8 y TypeScript vanilla con HTML/CSS semánticos. Las features autocontenidas están en `src/features/` y `src/main.ts` solo las inicializa.

## Consecuencias

- Build y `dist` compatibles con el despliegue estático en Vercel.
- Se requiere Node.js 20.19 o superior para el toolchain configurado.
- Si crecen las rutas o componentes con estado, revisar si conviene incorporar un framework en una nueva ADR.
