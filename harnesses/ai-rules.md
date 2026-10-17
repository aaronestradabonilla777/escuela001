# Reglas para agentes

- No agregar comportamiento fuera de una spec aprobada.
- Reutilizar patrones del proyecto y justificar cambios de arquitectura.
- Mantener tipos estrictos y controles accesibles.
- No afirmar que un comando pasó sin haberlo ejecutado y visto el resultado.
- Diferenciar `passed`, `failed`, `not-run` e `inconclusive`.
- No fabricar aprobaciones o recibos; señalar RDD como `disabled/unmanaged` cuando no haya autoridad nativa.
- No interpretar el proceso SDD/RDD como permiso de commit, push, PR o deploy.
