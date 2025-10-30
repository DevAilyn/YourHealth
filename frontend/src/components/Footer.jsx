import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className="bg-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6">
        
        {/* ---------- Lado Izquierdo ---------- */}
        <div className="flex flex-col">
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


      </div>
    </div>
  )
}

export default Footer


