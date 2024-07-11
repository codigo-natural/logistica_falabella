import { Pedido } from "../models/pedido.js";

export const getAllPedidos = async (req, res) => {
  try {
    const pedidos = await Pedido.getAll();
    res.json(pedidos);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getPedidoById = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.getById({
      where: { id },
    });
    if (pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    } else {
      res.json(pedido);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createPedido = async (req, res) => {
  try {
    const newPedido = await Pedido.create(req.body);
    res.status(400).json(newPedido);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updatePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.update({
      where: { id },
      body: req.body,
    });
    if (!pedido) {
      return res.status(404).json({ message: "Pedido no encontrado" });
    } else {
      await pedido.update(req.body);
      return res.json(pedido);
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deletePedido = async (req, res) => {
  try {
    const { id } = req.params;
    const pedido = await Pedido.delete({
      where: { id },
    });

    if (pedido) {
      return res.json({ message: "pedido eliminado exitosamente" });
    } else {
      return res.status(404).json({ message: "Pedido no encontrado" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
