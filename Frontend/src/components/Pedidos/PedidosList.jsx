import { useEffect, useState } from "react"
import { api } from '../../services/api'

export const PedidosList = () => {
  const [pedidos, setPedidos] = useState([])

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get('/pedidos')
        setPedidos(response.data)
      } catch (error) {
        console.error(error)
      }
    }

    fetchPedidos()
  }, [])

  return (
    <div className="mt-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Número de Envío
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Seller
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Fecha de Registro
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pedidos.map((pedido) => (
              <tr key={pedido.id}>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.numeroEnvio}</td>
                <td className="px-6 py-4 whitespace-nowrap">{pedido.seller}</td>
                <td className="px-6 py-4 whitespace-nowrap">{new Date(pedido.fechaRegistroEnvio).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
