# Cómo cambiar la clave del proveedor de pagos

**Cuándo hacerlo:** la clave venció, se filtró o el proveedor la rotó.
**Requisitos:** acceso al panel del proveedor y al gestor de secretos del equipo (ficticios en este ejemplo).
**Riesgo:** cobros fallidos si el servicio se reinicia con la clave vieja o mal copiada.

> Este ejemplo usa un proveedor simulado (`src/proveedor-simulado.js`). Los pasos describen cómo sería con uno real.

## Pasos

1. Genera la clave nueva en el panel del proveedor. **No** revoques la anterior todavía.
2. Guarda la clave nueva en el gestor de secretos con el nombre `PROVEEDOR_PAGOS_CLAVE`.
3. Reinicia el servicio.
   ```bash
   npm start
   ```
4. Haz una compra de prueba de monto mínimo.
   ```bash
   curl -X POST http://localhost:3000/boletos -d '{"busId":"bus-101","tarjeta":"<tarjeta-de-prueba>"}'
   ```
5. Revoca la clave anterior en el panel del proveedor.

## Comprobar que funcionó

- La compra de prueba responde `201` con una `referenciaPago`.

## Deshacer

- Mientras no hayas hecho el paso 5, vuelve a poner la clave anterior en `PROVEEDOR_PAGOS_CLAVE` y reinicia.

## Si falla

- `PAGO_RECHAZADO` en la compra de prueba → la clave está mal copiada; repite el paso 2.
- `COBRO_DESCONOCIDO` → **no repitas la compra**; sigue [Cómo revisar un cobro desconocido](revisar-cobro-desconocido.md).

## Ver también

- Por qué nunca se reintenta un cobro: [Decisión 0007](../decisiones/0007-no-reintentar-cobros.md)

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
