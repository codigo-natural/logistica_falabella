import { Pedido } from "../models/pedido.js";
import { Conductor } from "../models/conductor.js";
import { VehicleCapacityService } from "../services/vehicleCapacityService.js";
import { RouteOptimizationService } from "../services/routeOptimizationService.js";

export const asignarPedidosAutomaticamente = async (req, res) => {
  try {
    const conductores = await Conductor.getAll()
    const pedidos = await Pedido.getAll()

    for (const conductor of conductores) {
      const vehichleVolume = VehicleCapacityService.getVehicleCapacity(conductor.id)
      const pedidosAsignables = await VehicleCapacityService.calculateCapacity(vehichleVolume)

      const origins = pedidosAsignables.map(pedido => pedido.direccionSeller)
      const destinations = pedidosAsignables.map(pedido => pedido.direccionBuyer)

      const optimizedRoutes = await RouteOptimizationService.optimizeRoute(origins, destinations)

      for (const pedido of pedidosAsignables) {
        await Pedido.asignarConductor(pedido.id, conductor.id)
      }
    }

    res.json({ message: 'Pedidos asignados correctamente' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
