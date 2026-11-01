// Proveedor de pagos falso para desarrollo y pruebas.
// Modos: "normal" (aprueba al instante) y "lento-cobra" (cobra, pero responde tarde,
// que es justo el comportamiento real que causó el doble cobro).

export function crearProveedorSimulado({ modo = "normal", retrasoMs = 200 } = {}) {
  const cobros = [];
  return {
    cobros, // cada cobro realmente hecho; las pruebas cuentan aquí
    async cobrar(datos) {
      cobros.push(datos);
      if (modo === "lento-cobra") {
        await new Promise((r) => setTimeout(r, retrasoMs));
      }
      return { estado: "aprobado", referencia: `ref-${cobros.length}` };
    },
  };
}
