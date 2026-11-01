# Tutorial: haz tu primera compra de prueba

**Al terminar habrás:** levantado la API, consultado los buses y comprado un boleto, hasta ver
cómo se agota un bus pequeño.
**Tiempo estimado:** 10 minutos · **Necesitas:** Node.js 20+ y `curl`, dentro de la carpeta `ejemplo-api-boletos`.

## Paso 1. Ejecuta las pruebas

```bash
npm test
```

✅ **Deberías ver:** `pass 5` y `fail 0`.

## Paso 2. Arranca la API

En una terminal, déjala abierta:

```bash
npm start
```

✅ **Deberías ver:** `API de boletos escuchando en http://localhost:3000`.

## Paso 3. Mira los buses disponibles

En otra terminal:

```bash
curl http://localhost:3000/buses
```

✅ **Deberías ver:** una lista con `bus-101` (40 asientos, `"disponibles":40`) y `bus-102` (2 asientos).

## Paso 4. Compra un boleto

```bash
curl -X POST http://localhost:3000/boletos -d '{"busId":"bus-102","tarjeta":"4111111111111111"}'
```

✅ **Deberías ver:** `{"boletoId":"bol-bus-102-1","busId":"bus-102","referenciaPago":"ref-1"}`.

## Paso 5. Llena el bus

Repite el comando del paso 4 **dos veces más**.

✅ **Deberías ver:** la segunda compra funciona (`bol-bus-102-2`) y la tercera responde
`{"error":"BUS_LLENO","mensaje":"El bus bus-102 está lleno"}`.

## Paso 6. Confirma los asientos

```bash
curl http://localhost:3000/buses
```

✅ **Deberías ver:** `bus-102` con `"disponibles":0`.

## Lo que lograste

Hiciste el flujo completo una vez: consultar, comprar y encontrarte con el error de bus lleno.
Cierra la API con `Ctrl+C`.

## Si algo no coincide

- `EADDRINUSE` al arrancar → el puerto 3000 está ocupado; usa `PORT=3001 npm start` y cambia la URL de los `curl`.
- En Windows PowerShell, `curl` es otro comando → usa `curl.exe`, o Git Bash.

## Siguientes pasos

- Cambiar la clave del proveedor: [guía](../guias/cambiar-clave-proveedor-pagos.md)
- Todos los endpoints y errores: [referencia](../referencia/api.md)
- Cómo se cobra por dentro: [explicación](../explicacion/como-se-cobra.md)

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
