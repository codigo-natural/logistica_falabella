import { useEffect, useState } from "react"
import { api } from "../services/api"
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

export const Dashboard = () => {
  const [recolecciones, setRecolecciones] = useState([])

  useEffect(() => {
    api.get('/pedidos')
      .then(response => {
        setRecolecciones(response.data);
        console.log(response)
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  // Registrar las escalas, ejes y elementos
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: [65, 59, 80, 81, 56, 55, 40],
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: [28, 48, 40, 19, 86, 27, 90],
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
      },
    ],
  };

  return (
    <div>
      <h1>Dashboard de Recolecciones</h1>
      <Bar options={options} data={data} />
      <table>
        <thead>
          <tr>
            <th>Usuario</th>
            <th>Número de Envío</th>
            <th>Nombre de Oficina</th>
            <th>Fecha de Registro</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {recolecciones.map((rec) => (
            <tr key={rec.id}>
              <td>{rec.usuario}</td>
              <td>{rec.numeroEnvio}</td>
              <td>{rec.nombreOficina}</td>
              <td>{new Date(rec.fechaRegistroEnvio).toLocaleString()}</td>
              <td>{rec.estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
