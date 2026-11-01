<!--
PLANTILLA: ADR — Registro de Decisión de Arquitectura  (la bitácora de la caseta)
Archivo corto, numerado, en el mismo repo que el código: docs/decisiones/NNNN-titulo-en-kebab-case.md
Cuándo: decisiones difíciles de revertir (base de datos, proveedor, patrón) o cosas "raras a propósito".
Reglas:
  - Una página. Cuenta qué pasó, qué se decidió, qué se ganó y qué se perdió (consecuencias buenas Y malas).
  - Un ADR aprobado NO se reescribe. Si el equipo cambia de opinión, escribe uno nuevo y marca el viejo
    como "Reemplazada por NNNN" (como una nueva entrada en la bitácora, sin tachar la anterior).
  - Referénciala desde un comentario junto al código afectado.
Ejemplo rellenado: ../ejemplo-api-boletos/docs/decisiones/0007-no-reintentar-cobros.md
-->

# <NNNN>. <Título corto en forma de decisión>

- **Estado:** Propuesta | Aceptada | Reemplazada por [NNNN](<ruta>) | Descartada
- **Fecha:** <AAAA-MM-DD>
- **Decidió:** <persona(s) o equipo>
- **Reemplaza a:** <NNNN o "—">

## Contexto

<Qué pasó o qué fuerza obliga a decidir. Hechos, fechas, incidentes. Sin juzgar.>

## Decisión

<Qué haremos, escrito en voz activa: "No reintentaremos…", "Usaremos…".>

## Consecuencias

**Buenas**
- <Qué ganamos>.

**Malas / costos**
- <Qué perdemos o qué trabajo nuevo implica>.

**Cómo se protege esta decisión**
- <Test, permiso o comentario en el código que la hace cumplir. Un documento solo no basta.>

## Alternativas consideradas

- <Alternativa> — <por qué no>.

## Para quien quiera revertirla

<Qué tendría que ser distinto para que esta decisión deje de aplicar.>
