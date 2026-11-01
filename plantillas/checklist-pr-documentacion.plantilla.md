<!--
PLANTILLA: CHECKLIST DE DOCUMENTACIÓN PARA PULL REQUESTS
"Documentación como código": los documentos cambian en el MISMO pull request que el código,
y quien revisa ve ambos juntos. Copia esto a .github/pull_request_template.md (ya hay una en este repo).
-->

## Documentación

**Pregunta clave: ¿qué documento deja de ser verdad por este cambio?**

- [ ] Revisé el **README** (comandos, arranque rápido, enlaces)
- [ ] Revisé el **tutorial** (¿algún paso o salida ya no coincide?)
- [ ] Revisé las **guías prácticas** afectadas
- [ ] Actualicé la **referencia** (entradas, salidas, errores) o se regeneró automáticamente
- [ ] Revisé la **explicación** (solo cambia si cambió el diseño)
- [ ] Añadí un **comentario del "porqué"** si escribí algo raro a propósito
- [ ] Escribí un **ADR** si tomé una decisión difícil de revertir (y marqué como reemplazado el anterior, si aplica)
- [ ] Actualicé **AGENTS.md** si cambió algo que un agente no puede deducir
- [ ] Si hay una regla que nunca debe romperse, existe un **test** que falla si se rompe
- [ ] Actualicé la fecha de **última revisión** de los documentos que toqué
- [ ] Ningún documento nuevo duplica información que ya tiene un "hogar principal" (enlazar, no copiar)

Si ningún documento cambia, escribe aquí por qué: <motivo>
