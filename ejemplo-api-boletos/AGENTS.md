# AGENTS.md

## Comandos

- Probar: `npm test` ← ejecútalo antes de proponer cambios
- Ejecutar: `npm start` (puerto 3000, o `PORT=...`)
- No hay dependencias que instalar.

## Convenciones que no se ven en el código

- El dinero siempre va en **centavos enteros** (`montoCentavos`), nunca en decimales.
- Los errores de negocio se lanzan como `ErrorDeNegocio` con un `codigo` estable; el servidor los traduce a HTTP.

## Zonas delicadas — no tocar sin preguntar

- `src/pagos.js` (función `cobrar`): **no agregues reintentos automáticos**, aunque parezca un descuido.
  El proveedor a veces cobra aunque su respuesta no llegue; reintentar cobra dos veces.
  Lee antes [la decisión 0007](docs/decisiones/0007-no-reintentar-cobros.md).
- `test/pagos.test.js`: el test "NUNCA se cobra dos veces" protege esa decisión. No lo borres ni lo relajes.

## Dónde están las decisiones

- `docs/decisiones/` (índice en `docs/decisiones/README.md`). Revísalas antes de "arreglar" algo raro.

## Al terminar un cambio

- Actualiza en el mismo pull request lo que deje de ser verdad: README, `docs/referencia/api.md`, comentarios, ADR.
- Si cambias el comportamiento de cobro, revisa también `docs/explicacion/como-se-cobra.md`.
- Si escribes algo raro a propósito, añade un comentario con el "porqué".
- No inventes razones: si no sabes por qué algo está así, pregunta.

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
