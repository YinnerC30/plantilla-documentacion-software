<!--
PLANTILLA: AGENTS.md  (el "README para agentes de IA", en la raíz del repositorio)
Para agentes como Codex, Claude o Copilot; otras herramientas usan nombres como CLAUDE.md.
Escribe SOLO lo que el agente NO puede deducir leyendo el código. Un estudio de ETH Zurich (2026) halló que los
archivos largos y genéricos no mejoran resultados y suben costos: sé breve y específico.
Recuerda: es contexto, no una orden que siempre se obedezca. Las reglas que NUNCA deben romperse necesitan
un test automático o un permiso, no solo una línea aquí.
Ejemplo rellenado: ../ejemplo-api-boletos/AGENTS.md
-->

# AGENTS.md

## Comandos

- Instalar: `<comando>`
- Probar: `<comando>`  ← ejecútalo antes de proponer cambios
- Ejecutar: `<comando>`

## Convenciones que no se ven en el código

- <Convención no obvia, p. ej. "el dinero siempre va en centavos enteros">.

## Zonas delicadas — no tocar sin preguntar

- `<ruta/al/archivo>`: <por qué es delicado>. Lee antes [<decisión>](<ruta>).

## Dónde están las decisiones

- Decisiones de arquitectura: `<docs/decisiones/>`. Revísalas antes de "arreglar" algo que parezca un descuido.

## Al terminar un cambio

- Actualiza en el mismo pull request los documentos que dejen de ser verdad (README, referencia, comentarios, ADR).
- Si escribes algo raro a propósito, añade un comentario con el "porqué".
- No inventes razones: si no conoces el motivo de una decisión, pregunta o déjalo marcado como pendiente.

---
Responsable: <persona o equipo> · Última revisión: <AAAA-MM-DD>
