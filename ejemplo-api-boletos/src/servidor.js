import { createServer } from "node:http";
import { pathToFileURL } from "node:url";
import { comprarBoleto, crearBuses, ErrorDeNegocio } from "./boletos.js";
import { crearProveedorSimulado } from "./proveedor-simulado.js";

const ESTADO_HTTP = {
  BUS_NO_ENCONTRADO: 404,
  BUS_LLENO: 409,
  PAGO_RECHAZADO: 402,
  COBRO_DESCONOCIDO: 202,
};

export function crearServidor({ buses = crearBuses(), proveedor = crearProveedorSimulado() } = {}) {
  return createServer(async (req, res) => {
    const responder = (estado, cuerpo) => {
      res.writeHead(estado, { "content-type": "application/json" });
      res.end(JSON.stringify(cuerpo));
    };

    if (req.method === "GET" && req.url === "/buses") {
      return responder(200, [...buses.values()].map((b) => ({ ...b, disponibles: b.capacidad - b.vendidos })));
    }

    if (req.method === "POST" && req.url === "/boletos") {
      let texto = "";
      for await (const trozo of req) texto += trozo;
      let datos;
      try {
        datos = JSON.parse(texto);
      } catch {
        return responder(400, { error: "JSON_INVALIDO", mensaje: "El cuerpo no es JSON válido" });
      }
      if (!datos.busId || !datos.tarjeta) {
        return responder(400, { error: "DATOS_INCOMPLETOS", mensaje: "Se requieren busId y tarjeta" });
      }
      try {
        const boleto = await comprarBoleto({ buses, proveedor, busId: datos.busId, tarjeta: datos.tarjeta });
        return responder(201, boleto);
      } catch (e) {
        if (e instanceof ErrorDeNegocio) {
          return responder(ESTADO_HTTP[e.codigo] ?? 500, { error: e.codigo, mensaje: e.message });
        }
        throw e;
      }
    }

    responder(404, { error: "RUTA_NO_ENCONTRADA", mensaje: "Ruta no encontrada" });
  });
}

// Arranca solo si se ejecuta directamente: `node src/servidor.js`
if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const puerto = Number(process.env.PORT ?? 3000);
  crearServidor().listen(puerto, () => console.log(`API de boletos escuchando en http://localhost:${puerto}`));
}
