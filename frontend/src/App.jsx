// App.jsx
import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Inicio from './pages/Inicio'
import Entrenadores from './pages/Entrenadores'
import InicioSesion from './pages/InicioSesion'
import Contacto from './pages/Contacto'
import MiPerfil from './pages/MiPerfil'
import MisReservas from './pages/MisReservas'
import SobreNosotros from './pages/SobreNosotros'
import Reservas from './pages/Reservas'
import Menu from './components/Menu'
import Footer from './components/Footer'

const App = () => {
  return (
    <div>
      <div className='pt-12'>
        <Menu/>

      </div>
      <Routes>
        <Route path="/" element={<Navigate to="/inicio" />} />
        <Route path="/inicio" element={<Inicio />} />
        <Route path="/entrenadores" element={<Entrenadores />} />
        <Route path="/entrenadores/:especialidad" element={<Entrenadores />} />
        <Route path="/inicioSesion" element={<InicioSesion />} />
        <Route path="/sobre-nosotros" element={<SobreNosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/mi-perfil" element={<MiPerfil />} />
        <Route path="/mis-reservas" element={<MisReservas />} />
        <Route path="/reservas/:entId" element={<Reservas />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
