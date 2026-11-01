# API de boletos

API para vender boletos de bus: elige un bus, paga con tarjeta y recibe tu boleto.

> Proyecto **ficticio** de ejemplo. Muestra cómo quedan rellenadas las [plantillas](../plantillas/) del repositorio.

## Arranque rápido

Requiere Node.js 20 o superior. No tiene dependencias.

```bash
npm test          # 5 pruebas deben pasar
npm start         # API en http://localhost:3000
```

Resultado esperado: `API de boletos escuchando en http://localhost:3000`.

## Mapa de la documentación

| Quiero…                          | Voy a…                                                                    |
| -------------------------------- | ------------------------------------------------------------------------- |
| Aprender el proyecto paso a paso | [Tutorial: primera compra](docs/tutorial/primera-compra.md)               |
| Cambiar la clave del proveedor   | [Guía: cambiar la clave](docs/guias/cambiar-clave-proveedor-pagos.md)     |
| Resolver un cobro dudoso         | [Guía: revisar un cobro desconocido](docs/guias/revisar-cobro-desconocido.md) |
| Consultar un endpoint o error    | [Referencia de la API](docs/referencia/api.md)                            |
| Entender cómo se cobra y por qué | [Explicación](docs/explicacion/como-se-cobra.md) · [Decisiones](docs/decisiones/) |
| Trabajar con un agente de IA     | [AGENTS.md](AGENTS.md)                                                    |

## Contribuir

Todo cambio que vuelva falso un documento lo actualiza **en el mismo pull request** (ver la
[lista de verificación](../.github/pull_request_template.md)).

## ¿Ayuda?

Equipo de Pagos y Boletos — canal `#boletos-api` (ficticio).

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
