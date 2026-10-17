# Receipt-Driven Development

RDD revisa y autoriza un candidato inmutable mediante una autoridad nativa. SDD conserva intención y evidencia; RDD no sustituye las pruebas ni concede permiso para commit, push o deploy.

## Estado de este proyecto

Modo observado: `disabled/unmanaged`. No se configuró ni verificó un runtime de autoridad RDD. No hay recibo para los cambios actuales.

## Reglas

- El recibo debe corresponder a la huella exacta del candidato.
- Un cambio posterior invalida la autorización previa para el nuevo contenido.
- Checklists y notas Markdown no son recibos nativos.
- Si no hay autoridad compatible, registrar `disabled/unmanaged`; está prohibido simular `approved`.
