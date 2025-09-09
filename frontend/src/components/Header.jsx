import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Header = () => {

  const navigate = useNavigate ()
  return (
    <div className="flex flex-col md:flex-row flex-wrap bg-light-bg rounded-lg 
                    px-6 md:px-10 lg:px-20 mx-4 md:mx-10 lg:mx-20 mt-8 md:mt-12 lg:mt-16 h-auto">

      {/* -------- Lado Izquierdo --------*/}
      <div className="md:w-1/2 flex flex-col gap-5 mt-6 md:mt-12">
        <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold mt-15">
          Entrena hoy.
        </p>
        <div className="flex flex-row gap-2 md:gap-4">
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-accent">Supérate</p>
          <p className="text-3xl md:text-5xl lg:text-6xl font-extrabold">mañana.</p>
        </div>
        <p className="text-sm md:text-base lg:text-lg text-gray-700">
          En nuestra plataforma encontrarás la manera más sencilla y efectiva de alcanzar tus objetivos de salud y condición física. 
          Ofrecemos clases personalizadas con entrenadores profesionales, diseñadas para ajustarse a tu nivel, tu ritmo y tus metas.
        </p>

        <button onClick={(()=>navigate('/Registro'))} className="cursor-pointer w-35 inline-flex items-center gap-2 mt-4 px-4 py-2 bg-cta text-white font-semibold rounded-full shadow hover:bg-red-700 transition">
          ¡Comienza ya!
        </button>

      </div>
      
      {/* ------- Lado derecho ---------- */}
      <div className="md:w-1/2 relative flex justify-center items-center mt-6 md:mt-0">
        <img className="w-40 sm:w-30 md:w-72 lg:w-50 h-auto z-10 -rotate-10" src={assets.womanHome} alt="Mujer entrenando" />
        <img className="w-64 sm:w-80 md:w-96 lg:w-[500px] h-auto absolute bottom-0" src={assets.elipse} alt="Fondo decorativo" />
      </div>
    </div>
  )
}

export default Header
