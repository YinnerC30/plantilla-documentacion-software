# Cómo revisar un cobro desconocido

**Cuándo hacerlo:** un cliente recibió `COBRO_DESCONOCIDO` (HTTP 202): el proveedor no respondió a tiempo
y no sabemos si cobró.
**Requisitos:** acceso al panel del proveedor.
**Riesgo:** si el cliente vuelve a comprar antes de que revises, podría pagar dos veces.

## Pasos

1. Anota el `boletoId` del mensaje de error (por ejemplo `bol-bus-101-7`).
2. En el panel del proveedor, busca un cobro con ese `boletoId` en los últimos 30 minutos.
3. Según lo que encuentres:
   - **Existe y está aprobado:** el boleto es válido. Avisa al cliente y entrégale el boleto.
   - **No existe:** no se cobró. Libera el asiento y pide al cliente que compre de nuevo.
4. Registra el resultado en la hoja de incidencias del equipo.

## Comprobar que funcionó

- El cliente tiene exactamente **un** cobro por ese boleto, o ninguno y el asiento liberado.

## Deshacer

- Si cobraste de más por error, solicita el reembolso desde el panel del proveedor.

## Ver también

- Por qué esto es manual: [Decisión 0007](../decisiones/0007-no-reintentar-cobros.md)

---
Responsable: Equipo de Pagos y Boletos · Última revisión: 2026-10-31
