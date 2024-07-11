import { useEffect, useState } from "react"
import { api } from "../../services/api"

export const ConductoresList = () => {
  const [conductores, setConductores] = useState([])

  useEffect(() => {
    const fetchConductores = async () => {
      try {
        const response = await api.get('/conductores')
        setConductores(response.data)
        console.log(response)
      } catch (error) {
        console.error(error)
      }
    }

    fetchConductores()
  }, [])

  return (
    <div className="mt-4">
      <div className="bg-white shadow overflow-hidden sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Placa
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Documento
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operador Logístico
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {conductores.map((conductor) => (
              <tr key={conductor.id}>
                <td className="px-6 py-4 whitespace-nowrap">{conductor.placa}</td>
                <td className="px-6 py-4 whitespace-nowrap">{conductor.documento}</td>
                <td className="px-6 py-4 whitespace-nowrap">{conductor.operadorLogistico}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
