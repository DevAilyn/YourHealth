// src/pages/MisReservas.jsx
import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const MisReservas = () => {
  const { trainers } = useContext(AppContext);
  const navigate = useNavigate();

  // Simulamos reservas usando datos de entrenadores + fechas/horas ficticias
  const reservasSimuladas = [
    {
      id: 'res-001',
      trainerId: 'entrenadorCarlos',
      date: '2025-11-05',
      time: '15:30',
      status: 'pendiente'
    },
    {
      id: 'res-002',
      trainerId: 'entrenadoraLucia',
      date: '2025-11-12',
      time: '10:00',
      status: 'pendiente'
    }
  ];

  // Buscar info del entrenador por ID
  const getTrainerById = (id) => {
    return trainers.find(t => t._id === id);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Mis Reservas</h1>

        {reservasSimuladas.length === 0 ? (
          <p className="text-center text-gray-400 text-lg">
            No tienes reservas aún. ¡Agenda tu primera sesión!
          </p>
        ) : (
          <div className="space-y-6">
            {reservasSimuladas.map((res) => {
              const trainer = getTrainerById(res.trainerId);
              if (!trainer) return null;

              return (
                <div
                  key={res.id}
                  className="bg-light-bg rounded-xl p-6 shadow-md border border-gray-200"
                >
                  <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
                    {/* Foto del entrenador */}
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-primary flex-shrink-0">
                      <img
                        src={trainer.image}
                        alt={trainer.name}
                        className=" object-cover"
                      />
                    </div>

                    {/* Información */}
                    <div className="flex-grow text-gray-800">
                      <h2 className="text-xl font-bold">{trainer.name}</h2>
                      <p className="text-sm text-gray-600">{trainer.objetivo}</p>
                      <p className="font-mono text-sm mt-1">
                        📅 {res.date} | 🕒 {res.time}
                      </p>
                    </div>

                    {/* Botones */}
                    <div className="flex gap-3 mt-4 md:mt-0">
                      <button
                        onClick={() => alert('Simulación: Pago procesado')}
                        className="px-4 py-2 bg-cta text-white rounded-full text-sm font-medium hover:bg-red-700 transition"
                      >
                        Pagar
                      </button>
                      <button
                        onClick={() => {
                          alert('Reserva cancelada');
                          // En el futuro: eliminar de localStorage o API
                        }}
                        className="px-4 py-2 bg-gray-300 text-gray-800 rounded-full text-sm font-medium hover:bg-gray-400 transition"
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/entrenadores')}
            className="text-primary hover:underline font-medium"
          >
            ← Volver a entrenadores
          </button>
        </div>
      </div>
    </div>
  );
};

export default MisReservas;