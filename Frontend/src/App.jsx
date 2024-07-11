
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Sidebar } from './components/Layout/Sidebar'
import { Header } from './components/Layout/Header'
import { Dashboard } from './pages/Dashboard'
import { Pedidos } from './pages/Pedidos'
import { Conductores } from './pages/Conductores'
import { Asignacion } from './pages/Asignacion'

function App() {

  return (
    <BrowserRouter>
      <div className="flex h-screen bg-gray-100">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <main className='flex-1 overflow-x-hidden overflow-y-auto bg-gray-200'>
            <div className="container mx-auto px-6 py-8">
              <Routes>
                <Route path="/" Component={Dashboard} />
                <Route path='/pedidos' Component={Pedidos} />
                <Route path='/conductores' Component={Conductores} />
                <Route path='/asignacion' Component={Asignacion} />
              </Routes>
            </div>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
