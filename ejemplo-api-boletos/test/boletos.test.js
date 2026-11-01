import test from "node:test";
import assert from "node:assert/strict";
import { comprarBoleto, crearBuses } from "../src/boletos.js";
import { crearProveedorSimulado } from "../src/proveedor-simulado.js";

const base = () => ({ buses: crearBuses(), proveedor: crearProveedorSimulado(), tarjeta: "4111111111111111" });

test("compra exitosa devuelve boleto y referencia de pago", async () => {
  const b = await comprarBoleto({ ...base(), busId: "bus-101" });
  assert.match(b.boletoId, /^bol-bus-101-1$/);
  assert.equal(b.referenciaPago, "ref-1");
});

test("bus lleno responde BUS_LLENO", async () => {
  const ctx = base();
  await comprarBoleto({ ...ctx, busId: "bus-102" });
  await comprarBoleto({ ...ctx, busId: "bus-102" });
  await assert.rejects(comprarBoleto({ ...ctx, busId: "bus-102" }), { codigo: "BUS_LLENO" });
});

test("cobro desconocido responde COBRO_DESCONOCIDO y no reintenta", async () => {
  const ctx = { ...base(), proveedor: crearProveedorSimulado({ modo: "lento-cobra", retrasoMs: 200 }) };
  await assert.rejects(
    comprarBoleto({ ...ctx, busId: "bus-101", opcionesPago: { tiempoMaxMs: 50 } }),
    { codigo: "COBRO_DESCONOCIDO" },
  );
  assert.equal(ctx.proveedor.cobros.length, 1);
});
