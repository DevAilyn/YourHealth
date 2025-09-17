import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Reservas = () => {
  const { entId } = useParams()
  const { trainers } = useContext(AppContext)

  // Días de la semana: Solo DOM a VIE (6 días, SÁB excluido)
  const daysOfWeek = ['DOM', 'LUN', 'MAR', 'MIÉ', 'JUE', 'VIE']
  const [selectedDayIndex, setSelectedDayIndex] = useState(0)
  const [selectedSlotIndex, setSelectedSlotIndex] = useState(null) // Estado para hora seleccionada

  const [entInfo, setEntInfo] = useState(null)
  const [entSlots, setEntSlots] = useState([])

  // Función para generar horarios disponibles (solo 6 días)
  const getAvailableSlots = () => {
    const slotsByDay = []
    const today = new Date()

    for (let i = 0; i < 6; i++) {
      const currentDate = new Date(today)
      currentDate.setDate(today.getDate() + i)

      // Configurar hora de cierre según el día
      const endTime = new Date(currentDate)
      if (i === 5) { // Viernes → índice 5
        endTime.setHours(17, 0, 0, 0) // Última sesión a las 5:00 PM
      } else {
        endTime.setHours(21, 0, 0, 0) // Otros días: hasta 9:00 PM
      }

      let startTime = new Date(currentDate)

      // Si es hoy, empezar desde la hora actual +1h, mínimo 10 AM
      if (i === 0) {
        const currentHour = today.getHours()
        const currentMinute = today.getMinutes()
        startTime.setHours(currentHour > 9 ? currentHour + 1 : 10)
        startTime.setMinutes(currentMinute > 30 ? 30 : 0)
      } else {
        startTime.setHours(10, 0, 0, 0) // 10 AM en días futuros
      }

      const timeSlots = []

      while (startTime < endTime) {
        const formattedTime = startTime.toLocaleTimeString('es-ES', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false
        })

        timeSlots.push({
          datetime: new Date(startTime),
          time: formattedTime
        })

        startTime.setMinutes(startTime.getMinutes() + 30)
      }

      slotsByDay.push(timeSlots)
    }

    setEntSlots(slotsByDay)
  }

  useEffect(() => {
    const foundTrainer = trainers.find(ent => ent._id === entId)
    setEntInfo(foundTrainer)
  }, [trainers, entId])

  useEffect(() => {
    if (entInfo) {
      getAvailableSlots()
    }
  }, [entInfo])

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

            {/* Precio destacado */}
            <div className="mb-4">
              <span className="text-2xl font-bold text-cta">
                ${entInfo.price.toLocaleString('es-CO')}
              </span>
              <span className="text-sm text-gray-600 ml-2">por sesión</span>
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

        {/* Sección de Selección de Día y Horarios */}
        <div className="p-6 md:p-8 bg-white">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Selecciona un día y horario</h3>

          {/* Botones de días */}
          <div className="flex flex-wrap gap-2 mb-6">
            {daysOfWeek.map((day, index) => (
              <button
                key={index}
                onClick={() => {
                  setSelectedDayIndex(index)
                  setSelectedSlotIndex(null) // Resetear selección al cambiar día
                }}
                className={`px-4 py-2 rounded-full font-medium transition cursor-pointer ${
                  selectedDayIndex === index
                    ? 'bg-cta text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Lista de horarios disponibles */}
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
            {entSlots[selectedDayIndex]?.length > 0 ? (
              entSlots[selectedDayIndex].map((slot, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedSlotIndex(idx)}
                  className={`p-3 border rounded-2xl font-medium transition-all duration-200
                    ${selectedSlotIndex === idx
                      ? 'bg-accent border-primary' // Estado seleccionado
                      : 'bg-gray-100 text-gray-800 border-gray-300 hover:bg-primary hover:border-primary' // Estado normal + hover
                    }`}
                >
                  {slot.time}
                </button>
              ))
            ) : (
              <p className="col-span-full text-gray-500 italic">No hay horarios disponibles este día.</p>
            )}
          </div>

         
          {selectedSlotIndex !== null && (
            <div className="mt-6 p-4 bg-accent rounded-lg text-center font-medium">
              🕒 Has seleccionado: <strong>{daysOfWeek[selectedDayIndex]} - {entSlots[selectedDayIndex][selectedSlotIndex]?.time}</strong>
            </div>
          )}
        </div>

   
        <div className="bg-gray-50 p-6 md:p-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">¿Listo para entrenar con {entInfo.name}?</h3>
          <p className="text-gray-600 mb-6">
            Reserva tu primera sesión por solo <strong className="text-cta">${entInfo.price.toLocaleString('es-CO')}</strong> y comienza tu transformación hoy mismo.
          </p>
          <button 
            disabled={selectedSlotIndex === null} 
            className={`font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-red-300
              ${selectedSlotIndex === null 
                ? 'bg-gray-400 cursor-not-allowed text-gray-200' 
                : 'bg-cta hover:bg-red-700 text-white'
              }`}
          >
            {selectedSlotIndex === null ? 'Selecciona un horario primero' : 'Confirmar Reserva'}
          </button>
        </div>

      </div>
    </div>
  )
}

export default Reservas