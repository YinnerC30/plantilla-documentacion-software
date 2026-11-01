// Pagos con tarjeta. Este módulo habla con el proveedor de pagos.

export const ESTADOS_COBRO = Object.freeze({
  APROBADO: "aprobado",
  RECHAZADO: "rechazado",
  DESCONOCIDO: "desconocido", // el proveedor no respondió a tiempo
});

/**
 * Cobra un boleto a una tarjeta.
 *
 * Devuelve `{ estado, referencia }` donde `estado` es uno de ESTADOS_COBRO.
 * Si el proveedor tarda más de `tiempoMaxMs`, devuelve `desconocido`: el cobro
 * puede haberse hecho o no, y debe revisarlo una persona (ver docs/guias/revisar-cobro-desconocido.md).
 *
 * @param {{ cobrar: Function }} proveedor Cliente del proveedor de pagos.
 * @param {{ boletoId: string, montoCentavos: number, tarjeta: string }} datos
 * @param {{ tiempoMaxMs?: number }} [opciones]
 */
export async function cobrar(proveedor, datos, { tiempoMaxMs = 3000 } = {}) {
  // NO REINTENTAR este cobro, ni siquiera ante un timeout.
  // El proveedor a veces cobra aunque su respuesta no llegue a tiempo; un
  // reintento automático cobra dos veces (pasó en febrero).
  // Razón completa: docs/decisiones/0007-no-reintentar-cobros.md
  let temporizador;
  const limite = new Promise((resolve) => {
    temporizador = setTimeout(() => resolve({ estado: ESTADOS_COBRO.DESCONOCIDO, referencia: null }), tiempoMaxMs);
  });

  try {
    return await Promise.race([proveedor.cobrar(datos), limite]);
  } finally {
    clearTimeout(temporizador);
  }
}
