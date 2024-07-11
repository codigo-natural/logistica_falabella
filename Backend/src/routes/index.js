import express from "express";
import {
  createPedido,
  deletePedido,
  getAllPedidos,
  getPedidoById,
  updatePedido,
} from "../controllers/pedidosController.js";
import {
  createConductor,
  deleteConductor,
  getAllConductors,
  getConductorById,
  updateConductor,
} from "../controllers/conductoresController.js";

const router = express.Router();

// rutas de pedidos
router.get("/pedidos", getAllPedidos);
router.get("/pedidos/:id", getPedidoById);
router.post("/pedidos", createPedido);
router.put("/pedidos/:id", updatePedido);
router.delete("pedidos/:id", deletePedido);

// rutas de conductores
router.get("/conductores", getAllConductors);
router.get("/conductores/:id", getConductorById);
router.post("/conductores", createConductor);
router.put("/conductores/:id", updateConductor);
router.delete("/conductores/:id", deleteConductor);

export default router;
