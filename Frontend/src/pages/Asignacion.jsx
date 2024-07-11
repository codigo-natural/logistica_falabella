import { AsignacionAutomatica } from "../components/Asignacion/AsignacionAutomatica"
import { AsignacionManual } from "../components/Asignacion/AsignacionManual"

export const Asignacion = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-900">Asignación de Pedidos</h2>
      <div className="mt-4 grid grid-cols-1 gap-6 lg:grid-cols-2">
        <AsignacionManual />
        <AsignacionAutomatica />
      </div>
    </div>
  )
}
