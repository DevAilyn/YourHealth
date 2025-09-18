// App.jsx
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Entrenadores from './pages/Entrenadores'
import InicioSesion from './pages/InicioSesion'
import MiPerfil from './pages/MiPerfil'
import MisReservas from './pages/MisReservas'
import SobreNosotros from './pages/SobreNosotros'
import Reservas from './pages/Reservas'
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {
  return (
    // Layout principal
    <div className="flex flex-col min-h-screen">

      <div className="pt-12">
        <Menu />
      </div>


      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Navigate to="/inicio" />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/entrenadores" element={<Entrenadores />} />
          <Route path="/entrenadores/:especialidad" element={<Entrenadores />} />
          <Route path="/Sesion" element={<Sesion />} />
          <Route path="/sobre-nosotros" element={<SobreNosotros />} />
          <Route path="/mi-perfil" element={<MiPerfil />} />
          <Route path="/mis-reservas" element={<MisReservas />} />
          <Route path="/reservas/:entId" element={<Reservas />} />
        </Routes>
      </main>


      <Footer />
    </div>
  )
}

export default App
