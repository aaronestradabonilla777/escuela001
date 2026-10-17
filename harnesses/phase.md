# Fases SDD/RDD

```text
ANÁLISIS → SPEC → DISEÑO → IMPLEMENTACIÓN → RDD → VERIFICACIÓN → ENTREGA
```

No se omiten fases. RDD puede permanecer `disabled/unmanaged`; ese estado no equivale a aprobación.

## ANÁLISIS

Investiga contexto, límites y riesgos sin cambiar el producto. Identifica una spec existente o la necesidad de una nueva.

## SPEC

Describe el resultado esperado, alcance, criterios verificables, casos límite, invariantes, riesgos y exclusiones. Obtén aprobación explícita antes de una implementación nueva.

## DISEÑO

Define arquitectura y contratos; vincula decisiones con criterios. Registra decisiones durables en ADR.

## IMPLEMENTACIÓN

Trabaja en cambios acotados y dentro del alcance aprobado. Ejecuta las comprobaciones apropiadas y declara lo omitido o inconcluso.

## RDD

Congela y revisa el candidato usando una autoridad nativa si existe. Si no existe, informa `disabled/unmanaged`; no inventes recibos.

## VERIFICACIÓN

Contrasta por separado el candidato con la spec, diseño y tareas. No modifiques el candidato durante esta fase. Si requiere cambios, vuelve a implementación.

## ENTREGA

Valida estado y permisos del repositorio. Ni una spec ni un recibo conceden permiso implícito para commit, push o deploy.
