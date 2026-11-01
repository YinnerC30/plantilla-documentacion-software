<!--
PLANTILLA: REFERENCIA  (el mapa de la pared)
Tipo Diátaxis: información exacta. Nadie la lee de corrido: se consulta.
Reglas: mismo formato SIEMPRE para cada operación; solo hechos (nada de opiniones ni tutorial);
        si se puede, GENÉRALA desde el código/OpenAPI en lugar de escribirla a mano.
Se vuelve falsa cuando cambia una entrada, salida o error: actualízala en el mismo pull request.
Ejemplo rellenado: ../ejemplo-api-boletos/docs/referencia/api.md
-->

# Referencia: <nombre de la API / módulo / CLI>

**Base:** `<URL base o paquete>` · **Versión:** `<x.y.z>` · **Formato:** <JSON, etc.>
<!-- Si está generada: "Generado desde <fuente> el <fecha>. No editar a mano." -->

## Convenciones

- <Autenticación, cabeceras comunes, unidades (p. ej. dinero en centavos), formato de errores>.

---

## `<MÉTODO> <ruta>` — <qué hace en una línea>

**Entrada**

| Campo | Tipo | Obligatorio | Descripción |
| ----- | ---- | ----------- | ----------- |
| `<campo>` | `<tipo>` | sí/no | <descripción> |

**Respuesta exitosa** — `<código>`

```json
{ "<campo>": "<ejemplo>" }
```

**Errores**

| Código HTTP | `error` | Cuándo ocurre |
| ----------- | ------- | ------------- |
| `<código>` | `<CODIGO_ERROR>` | <condición> |

<!-- Repite el bloque "## MÉTODO ruta" para cada operación, sin cambiar el formato. -->

---
Responsable: <persona o equipo> · Última revisión: <AAAA-MM-DD>
