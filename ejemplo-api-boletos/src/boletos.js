import { cobrar, ESTADOS_COBRO } from "./pagos.js";

export class ErrorDeNegocio extends Error {
  constructor(codigo, mensaje) {
    super(mensaje);
    this.codigo = codigo;
  }
}

/** Crea el catálogo de buses en memoria. */
export function crearBuses() {
  return new Map([
    ["bus-101", { id: "bus-101", ruta: "Lima - Cusco", capacidad: 40, vendidos: 0, precioCentavos: 8500 }],
    ["bus-102", { id: "bus-102", ruta: "Lima - Arequipa", capacidad: 2, vendidos: 0, precioCentavos: 6000 }],
  ]);
}

/**
 * Compra un boleto: reserva el asiento, cobra la tarjeta y confirma.
 *
 * Errores (`ErrorDeNegocio.codigo`): BUS_NO_ENCONTRADO, BUS_LLENO, PAGO_RECHAZADO, COBRO_DESCONOCIDO.
 * Si el cobro queda desconocido el asiento queda retenido hasta que una persona lo revise.
 *
 * @returns {Promise<{ boletoId: string, busId: string, referenciaPago: string }>}
 */
export async function comprarBoleto({ buses, proveedor, busId, tarjeta, opcionesPago }) {
  const bus = buses.get(busId);
  if (!bus) throw new ErrorDeNegocio("BUS_NO_ENCONTRADO", `No existe el bus ${busId}`);
  if (bus.vendidos >= bus.capacidad) throw new ErrorDeNegocio("BUS_LLENO", `El bus ${busId} está lleno`);

  bus.vendidos += 1; // reserva antes de cobrar para no vender el mismo asiento dos veces
  const boletoId = `bol-${busId}-${bus.vendidos}`;

  const cobro = await cobrar(proveedor, { boletoId, montoCentavos: bus.precioCentavos, tarjeta }, opcionesPago);

  if (cobro.estado === ESTADOS_COBRO.RECHAZADO) {
    bus.vendidos -= 1;
    throw new ErrorDeNegocio("PAGO_RECHAZADO", "La tarjeta fue rechazada");
  }
  if (cobro.estado === ESTADOS_COBRO.DESCONOCIDO) {
    throw new ErrorDeNegocio("COBRO_DESCONOCIDO", `No sabemos si se cobró el boleto ${boletoId}; será revisado por una persona`);
  }
  return { boletoId, busId, referenciaPago: cobro.referencia };
}
