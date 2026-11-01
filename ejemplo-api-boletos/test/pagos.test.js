import test from "node:test";
import assert from "node:assert/strict";
import { cobrar, ESTADOS_COBRO } from "../src/pagos.js";
import { crearProveedorSimulado } from "../src/proveedor-simulado.js";

const datos = { boletoId: "bol-1", montoCentavos: 8500, tarjeta: "4111111111111111" };

test("cobro normal: se cobra una vez y queda aprobado", async () => {
  const proveedor = crearProveedorSimulado();
  const r = await cobrar(proveedor, datos);
  assert.equal(r.estado, ESTADOS_COBRO.APROBADO);
  assert.equal(proveedor.cobros.length, 1);
});

// Protege la decisión 7 (docs/decisiones/0007-no-reintentar-cobros.md).
// Si alguien agrega reintentos automáticos, este test falla.
test("proveedor lento que sí cobra: NUNCA se cobra dos veces", async () => {
  const proveedor = crearProveedorSimulado({ modo: "lento-cobra", retrasoMs: 200 });
  const r = await cobrar(proveedor, datos, { tiempoMaxMs: 50 });
  await new Promise((resolve) => setTimeout(resolve, 300)); // deja pasar cualquier reintento
  assert.equal(r.estado, ESTADOS_COBRO.DESCONOCIDO);
  assert.equal(proveedor.cobros.length, 1, "el boleto se cobró más de una vez");
});
