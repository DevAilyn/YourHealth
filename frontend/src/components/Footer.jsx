import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* ---------- Lado Izquierdo ---------- */}
        <div className="flex flex-col items-start gap-2">
          <img src={assets.logo} alt="Logo" className="w-35 mb-2" />

          {/* Atribuciones */}
          <p className="text-xs text-gray-600">
            Imágenes de{" "}
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Pexels</a>,{" "}
            <a href="https://www.freepik.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Freepik</a> e íconos de{" "}
            <a href="https://www.flaticon.com" target="_blank" rel="noopener noreferrer" className="text-blue-500">Flaticon</a>.
          </p>

          {/* Copyright */}
          <p className="text-xs text-gray-500 mt-2">
            © {new Date().getFullYear()} YourHealth. Todos los derechos reservados.
          </p>
        </div>

        {/* ---------- Centro ---------- */}
        <div className="flex flex-col gap-2 text-sm font-medium mt-6 md:mt-0">
          <Link to="/inicio" className="text-gray-600 hover:text-blue-500">Inicio</Link>
          <Link to="/entrenadores" className="text-gray-600 hover:text-blue-500">Entrenadores</Link>
          <Link to="/sobre-nosotros" className="text-gray-600 hover:text-blue-500">Sobre nosotros</Link>
        </div>

        {/* ---------- Lado Derecho (Botones) ---------- */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-center mt-6 md:mt-0">
          <Link to="/inicioSesion" className="px-4 py-2 bg-highlight text-black font-medium rounded-lg hover:opacity-80 transition">
            Inicia sesión
          </Link>
          <Link to="/registro" className="px-4 py-2 bg-highlight text-black font-medium rounded-lg hover:opacity-80 transition">
            Regístrate
          </Link>
        </div>

      </div>
    </div>
  )
}

export default Footer
