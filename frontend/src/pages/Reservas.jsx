import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Reservas = () => {
  const { entId } = useParams()
  const { trainers } = useContext(AppContext)

  const [entInfo, setEntInfo] = useState(null)

  useEffect(() => {
    const foundTrainer = trainers.find(ent => ent._id === entId)
    setEntInfo(foundTrainer)
  }, [trainers, entId])

  if (!entInfo) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-dark-bg text-white">
        <p className="text-lg">Cargando información del entrenador...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-dark-bg text-white py-8 px-4 sm:px-6 md:px-10 lg:px-20">

      {/* Tarjeta principal del entrenador */}
      <div className="max-w-5xl mx-auto bg-light-bg rounded-2xl shadow-2xl overflow-hidden border border-gray-200">

        {/* Encabezado con imagen y nombre */}
        <div className="md:flex">
          {/* Imagen del entrenador - SIN BORDE, SIN RECORTES */}
          <div className="md:w-1/3 bg-highlight flex items-center justify-center p-6">
            <img
              src={entInfo.image}
              alt={entInfo.name}
              className="w-48 h-48 md:w-64 md:h-72 object-contain rounded-xl shadow-md"
            />
          </div>

          {/* Información del entrenador */}
          <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
            <div className="flex items-center gap-3 mb-2">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-800">{entInfo.name}</h1>
              <img
                src={assets.verifiedIcon}
                alt="Verificado"
                className="w-6 h-6"
              />
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-4">
              <span className="bg-accent text-dark-bg px-3 py-1 rounded-full text-sm font-medium">
                {entInfo.certifications}
              </span>
              <span className="bg-primary text-dark-bg px-3 py-1 rounded-full text-sm font-medium">
                {entInfo.objetivo}
              </span>
              <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-semibold">
                {entInfo.experience}
              </span>
            </div>

            {/* Sobre el entrenador */}
            <div className="mt-6">
              <div className="flex items-center gap-2 mb-3">
                <h2 className="text-lg font-semibold text-gray-800">Sobre mí</h2>
                <img
                  src={assets.infoIcon}
                  alt="Información"
                  className="w-5 h-5 opacity-70"
                />
              </div>
              <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                {entInfo.about}
              </p>
            </div>
          </div>
        </div>

        {/* Sección de acción */}
        <div className="bg-gray-50 p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">¿Listo para entrenar con {entInfo.name}?</h3>
          <p className="text-gray-600 mb-6">Reserva tu primera sesión y comienza tu transformación hoy mismo.</p>
          <button className="bg-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300">
            Reservar Sesión
          </button>
        </div>

      </div>
    </div>
  )
}

export default Reservas