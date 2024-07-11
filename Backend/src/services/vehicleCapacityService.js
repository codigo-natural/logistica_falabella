import { Pedido } from "../models/pedido";

export class VehicleCapacityService {
  static async calculateCapacity(vehicleVolume) {
    const pedidos = await Pedido.getAll();
    let currentVolume = 0;
    const assignedPedidos = [];

    for (const pedido of pedidos) {
      const pedidoVolume = pedido.alto * pedido.largo * pedido.ancho;
      if (currentVolume + pedidoVolume <= vehicleVolume) {
        currentVolume += pedidoVolume;
        assignedPedidos.push(pedido);
      }
    }
    return assignedPedidos;
  }
}