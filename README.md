# Plantillas para documentar software

Plantillas en Markdown para documentar un proyecto, basadas en el texto
*Cómo escribir documentación útil (y cuándo no hacerlo)*, más un **proyecto de ejemplo ya documentado**
que usa todas.

**Idea central:** documentar es dejar por escrito lo que otra persona (o un agente de IA) necesita para usar,
cambiar o entender tu software sin tener que preguntarte. Una misma persona necesita cosas distintas según el momento,
por eso no hay un documento gigante, sino cuatro tipos (Diátaxis) más piezas de apoyo.

## Qué plantilla usar

| Necesito…                                   | Tipo           | Plantilla                                                              | Ejemplo rellenado |
| ------------------------------------------- | -------------- | ---------------------------------------------------------------------- | ----------------- |
| Una puerta de entrada al proyecto           | README         | [README](plantillas/README.plantilla.md)                               | [README](ejemplo-api-boletos/README.md) |
| Que alguien nuevo aprenda haciendo          | Tutorial       | [tutorial](plantillas/tutorial.plantilla.md)                           | [primera compra](ejemplo-api-boletos/docs/tutorial/primera-compra.md) |
| Resolver una tarea concreta con prisa       | Guía práctica  | [guía práctica](plantillas/guia-practica.plantilla.md)                 | [cambiar clave](ejemplo-api-boletos/docs/guias/cambiar-clave-proveedor-pagos.md) · [cobro desconocido](ejemplo-api-boletos/docs/guias/revisar-cobro-desconocido.md) |
| Consultar un dato exacto                    | Referencia     | [referencia](plantillas/referencia.plantilla.md)                       | [API](ejemplo-api-boletos/docs/referencia/api.md) |
| Entender cómo y por qué está construido     | Explicación    | [explicación](plantillas/explicacion.plantilla.md)                     | [cómo se cobra](ejemplo-api-boletos/docs/explicacion/como-se-cobra.md) |
| Registrar una decisión difícil de revertir  | ADR            | [ADR](plantillas/adr.plantilla.md)                                     | [decisión 0007](ejemplo-api-boletos/docs/decisiones/0007-no-reintentar-cobros.md) |
| Orientar a agentes de IA                    | AGENTS.md      | [AGENTS](plantillas/agents.plantilla.md)                               | [AGENTS.md](ejemplo-api-boletos/AGENTS.md) |
| Explicar el "porqué" junto al código        | Comentarios    | [comentarios](plantillas/comentarios-codigo.plantilla.md)              | [pagos.js](ejemplo-api-boletos/src/pagos.js) |
| Mantener la documentación al día            | Checklist de PR | [checklist](plantillas/checklist-pr-documentacion.plantilla.md)       | [plantilla de PR](.github/pull_request_template.md) |

## Cómo usarlas

1. Copia la plantilla que necesitas a la carpeta `docs/` de **tu** proyecto (ej.: `docs/tutorial/`, `docs/guias/`, `docs/decisiones/`).
2. Reemplaza todo lo que está entre `<...>` y borra los comentarios `<!-- -->` del inicio.
3. Mira el ejemplo rellenado para ver el nivel de detalle esperado.
4. Pon en cada documento un responsable y la fecha de última revisión.

**Si tu proyecto no tiene nada escrito, no crees cuatro carpetas vacías.** Empieza por un README corto,
comentarios en las partes delicadas y un ADR por cada decisión importante. Tutoriales y guías llegan cuando
otras personas empiezan a usar o mantener el proyecto.

## Reglas de oro

- **No mezcles los tipos.** Una guía que explica desde cero hace perder tiempo; un tutorial que salta pasos deja perdido a quien aprende.
- **La documentación vive junto al código** y cambia en el mismo pull request. Pregunta antes de pedir revisión: *¿qué documento deja de ser verdad por este cambio?*
- **Genera lo que se pueda generar** (la referencia de una API) y escribe a mano lo que no (el "porqué").
- **Un dato, un hogar:** enlaza en lugar de copiar.
- **Una regla que nunca debe romperse necesita un test**, no solo una línea de texto.
- **Documentación incorrecta es peor que ninguna:** cada documento lleva responsable y fecha de revisión.
- Con IA: que te ayude con el "qué" (borradores); el "porqué" lo escribes tú, porque puede inventar una razón convincente pero falsa.

## Qué NO documentar

1. Lo que el código ya dice (un comentario que repite la línea de abajo).
2. Lo que nadie va a mantener (documentos enormes, información duplicada en wiki y repo).
3. Lo que un test puede verificar (si deja de ser verdad, el test falla en vez de volverse mentira silenciosa).
4. Un script desechable de una tarde: una línea basta.

## Estructura del repositorio

```text
plantillas/            las 9 plantillas
ejemplo-api-boletos/   proyecto ficticio (Node.js sin dependencias) documentado con todas ellas
.github/               plantilla de pull request con el checklist de documentación
Cómo escribir documentación útil (y cuándo no hacerlo).txt   texto fuente
```

## Probar el ejemplo

```bash
cd ejemplo-api-boletos
npm test      # incluye el test que falla si un cobro se repite
npm start     # luego sigue docs/tutorial/primera-compra.md
```

El ejemplo cuenta la historia del texto: un agente "arregla" los pagos añadiendo reintentos y provoca dobles cobros.
Aquí, el comentario en el código, la [decisión 0007](ejemplo-api-boletos/docs/decisiones/0007-no-reintentar-cobros.md),
el [AGENTS.md](ejemplo-api-boletos/AGENTS.md) y un test hacen que nadie pague dos veces.
