# 0007. No reintentar cobros automáticamente

- **Estado:** Aceptada
- **Fecha:** 2026-03-04
- **Decidió:** Equipo de Pagos y Boletos
- **Reemplaza a:** —

## Contexto

El proveedor de pagos a veces cobra la tarjeta aunque su respuesta no llegue a tiempo. En febrero de 2026,
en un día de lentitud del proveedor, el sistema interpretó el timeout como un fallo, reintentó y varios
clientes pagaron el mismo boleto dos veces. Hubo que reembolsarlos manualmente.

## Decisión

No reintentaremos cobros automáticamente. Si el resultado de un cobro es desconocido (timeout), el boleto
queda retenido y una persona lo revisa en el panel del proveedor.

## Consecuencias

**Buenas**
- Ningún cliente paga dos veces por el mismo boleto.

**Malas / costos**
- Algunos pagos tardarán más en confirmarse (revisión manual).
- Se pierden algunas ventas cuando el cliente abandona al ver `COBRO_DESCONOCIDO`.

**Cómo se protege esta decisión**
- Comentario "NO REINTENTAR" en `src/pagos.js` (función `cobrar`).
- Test `test/pagos.test.js`: "proveedor lento que sí cobra: NUNCA se cobra dos veces".
- Está señalada como zona delicada en [AGENTS.md](../../AGENTS.md).

## Alternativas consideradas

- Reintentar hasta 3 veces con espera — causó los dobles cobros de febrero.
- Consultar el estado al proveedor antes de reintentar — no hay endpoint de consulta fiable hoy.
- Clave de idempotencia — el proveedor actual no la soporta.

## Para quien quiera revertirla

Se podría reemplazar si el proveedor ofrece idempotencia o un endpoint de consulta de estado fiable.
En ese caso, escribe un ADR nuevo, y marca este como "Reemplazada por NNNN" sin editar su contenido.
Una propuesta intermedia razonable: ante un timeout, **consultar si el cobro existió** antes de ofrecer reintentar.
