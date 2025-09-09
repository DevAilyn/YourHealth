import React, { useContext, useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { AppContext } from "../context/AppContext"

const Entrenadores = () => {
  const { especialidad } = useParams()
  const navigate = useNavigate()
  const { trainers } = useContext(AppContext)

  const [filterEntrenador, setFilterEntrenador] = useState([])

  useEffect(() => {
    if (especialidad) {
      const filtrados = trainers.filter(
        (t) => t.speciality.toLowerCase() === especialidad.toLowerCase()
      )
      setFilterEntrenador(filtrados)
    } else {
      setFilterEntrenador(trainers)
    }
  }, [especialidad, trainers])

  const especialidades = [
    "Fuerza",
    "Cardio",
    "Aumento de masa muscular",
    "Tonificación",
    "Entrenamiento Funcional",
    "Bajar de peso con enfoque nutricional",
    "Ganar peso con entrenamiento y nutrición",
    "Entrenamiento postparto",
  ]

  return (
    <div className="text-white px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-6">
        Encuentra a tu entrenador de acuerdo a tu objetivo
      </h1>

      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {/* Botón para ver todos */}
        <button
          onClick={() => navigate("/entrenadores")}
          className={`px-4 py-2 rounded-full transition ${
            !especialidad
              ? "bg-red-500 text-white"
              : "bg-gray-600 text-white hover:bg-gray-500"
          }`}
        >
          Ver todos
        </button>

        {especialidades.map((esp, i) => (
          <button
            key={i}
            onClick={() => navigate(`/entrenadores/${esp}`)}
            className={`px-4 py-2 rounded-full transition ${
              especialidad?.toLowerCase() === esp.toLowerCase()
                ? "bg-red-500 text-white"
                : "bg-primary text-dark-bg hover:bg-accent"
            }`}
          >
            {esp}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filterEntrenador.length > 0 ? (
          filterEntrenador.map((item) => (
            <div
              key={item._id}
              onClick={() => navigate(`/reservas/${item._id}`)}
              className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-light-bg"
            >
              <div className="w-full h-60 flex items-center justify-center bg-highlight">
                <img
                  src={item.image}
                  alt={item.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-green-500">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <p>Disponible</p>
                </div>
                <p className="font-semibold text-black">{item.name}</p>
                <p className="text-sm text-black">{item.speciality}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-400">
            No hay entrenadores disponibles para esta especialidad.
          </p>
        )}
      </div>
    </div>
  )
}

export default Entrenadores
