# Cómo se cobra un boleto (y por qué no se reintenta)

## El problema

Cobrar con tarjeta depende de un proveedor externo que a veces tarda. Cuando tarda, el sistema no puede
saber si el cobro se hizo. Ese "no sé" es la parte difícil.

## Cómo funciona

```text
Cliente ── POST /boletos ──► reserva asiento ──► cobrar() ──► proveedor de pagos
                                                    │
              aprobado ─────────────────────────────┤ → 201, boleto confirmado
              rechazado ────────────────────────────┤ → 402, asiento liberado
              sin respuesta en 3 s (desconocido) ───┘ → 202, asiento retenido, revisión humana
```

1. Se **reserva el asiento antes de cobrar**, para no vender el mismo asiento a dos personas.
2. `cobrar()` espera la respuesta del proveedor hasta 3 segundos.
3. Si no llega, el resultado es `desconocido`: el asiento queda retenido y una persona revisa el cobro
   en el panel del proveedor ([guía](../guias/revisar-cobro-desconocido.md)).

## Por qué es así

- **Un cobro dudoso nunca se reintenta automáticamente.** El proveedor a veces cobra aunque su respuesta no
  llegue a tiempo; un reintento cobra dos veces → [Decisión 0007](../decisiones/0007-no-reintentar-cobros.md).
- **Una regla escrita no basta:** el test `test/pagos.test.js` falla si alguien agrega reintentos.

## Alternativas que descartamos

- **Reintentar hasta 3 veces:** más conversión en el caso lento, pero provocó dobles cobros reales.
- **Idempotencia con el proveedor:** sería lo ideal; el proveedor actual no la ofrece.

## Qué cambiaría esto

Si el proveedor ofreciera una clave de idempotencia (el mismo cobro enviado dos veces se cobra una),
podría revisarse la decisión 0007 con un ADR nuevo que la reemplace.

## Para profundizar

- [Referencia de la API](../referencia/api.md) · [Código](../../src/pagos.js)

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
