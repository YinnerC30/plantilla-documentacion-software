# Referencia: API de boletos

**Base:** `http://localhost:3000` · **Versión:** `1.0.0` · **Formato:** JSON

## Convenciones

- Sin autenticación (proyecto de ejemplo).
- Dinero en **centavos enteros** (`8500` = 85,00).
- Los errores tienen la forma `{ "error": "<CODIGO>", "mensaje": "<texto>" }`.

---

## `GET /buses` — lista los buses y sus asientos disponibles

**Entrada:** ninguna.

**Respuesta exitosa** — `200`

```json
[
  { "id": "bus-101", "ruta": "Lima - Cusco", "capacidad": 40, "vendidos": 0, "precioCentavos": 8500, "disponibles": 40 }
]
```

**Errores:** ninguno.

---

## `POST /boletos` — compra un boleto

**Entrada** (cuerpo JSON)

| Campo     | Tipo   | Obligatorio | Descripción                        |
| --------- | ------ | ----------- | ---------------------------------- |
| `busId`   | string | sí          | Id del bus, p. ej. `bus-101`       |
| `tarjeta` | string | sí          | Número de tarjeta a cobrar         |

**Respuesta exitosa** — `201`

```json
{ "boletoId": "bol-bus-101-1", "busId": "bus-101", "referenciaPago": "ref-1" }
```

**Errores**

| HTTP | `error`             | Cuándo ocurre                                                                 |
| ---- | ------------------- | ----------------------------------------------------------------------------- |
| 400  | `JSON_INVALIDO`     | El cuerpo no es JSON válido                                                   |
| 400  | `DATOS_INCOMPLETOS` | Falta `busId` o `tarjeta`                                                     |
| 402  | `PAGO_RECHAZADO`    | La tarjeta fue rechazada; el asiento se libera                                |
| 404  | `BUS_NO_ENCONTRADO` | No existe el `busId`                                                          |
| 409  | `BUS_LLENO`         | No quedan asientos                                                            |
| 202  | `COBRO_DESCONOCIDO` | El proveedor no respondió a tiempo (3 s). **No reintentes**: [qué hacer](../guias/revisar-cobro-desconocido.md) |

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
