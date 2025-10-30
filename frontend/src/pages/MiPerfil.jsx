import React, { useState } from 'react'
import { assets } from '../assets/assets'

const MiPerfil = () => {
  const [userData, setUserData] = useState({
    name: "Mateo Castillo",
    image: assets.perfil,
    email: 'mateoc.mu@gmail.com',
    weight: '70kg',
    age: '20'
  })

  const [isEdit, setIsEdit] = useState(false)

  return (
    <div className="min-h-screen bg-dark-bg text-white py-12 px-4">
      <div className="max-w-4xl mx-auto bg-light-bg rounded-2xl p-8 shadow-lg">

        {/* Foto y nombre */}
        <div className="flex flex-col items-center mb-8">
          <img 
            src={userData.image} 
            alt="Perfil" 
            className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-primary"
          />
          {isEdit ? (
            <input
              type="text"
              value={userData.name}
              onChange={(e) => setUserData({ ...userData, name: e.target.value })}
              className="text-2xl font-bold text-gray-800 text-center p-2 border-b-2 border-gray-300 focus:outline-none w-full max-w-xs"
            />
          ) : (
            <p className="text-2xl font-bold text-gray-800">{userData.name}</p>
          )}
          <button
            onClick={() => setIsEdit(!isEdit)}
            className="mt-4 px-4 py-2 bg-accent text-dark-bg rounded-full text-sm font-medium hover:bg-green-500 transition"
          >
            {isEdit ? 'Guardar' : 'Editar'}
          </button>
        </div>

        {/* Datos con íconos */}
        <div className="space-y-6 text-gray-700">

          {/* Correo electrónico */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <img src={assets.correoIcon} alt="Correo" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-semibold">Correo electrónico</p>
              {isEdit ? (
                <input
                  type="email"
                  value={userData.email}
                  onChange={(e) => setUserData({ ...userData, email: e.target.value })}
                  className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                />
              ) : (
                <p>{userData.email}</p>
              )}
            </div>
          </div>

          {/* Peso */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <img src={assets.pesoIcon} alt="Peso" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-semibold">Peso</p>
              {isEdit ? (
                <input
                  type="text"
                  value={userData.weight}
                  onChange={(e) => setUserData({ ...userData, weight: e.target.value })}
                  className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                />
              ) : (
                <p>{userData.weight}</p>
              )}
            </div>
          </div>

          {/* Edad */}
          <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
            <img src={assets.edadIcon} alt="Edad" className="w-6 h-6 text-gray-600" />
            <div>
              <p className="font-semibold">Edad</p>
              {isEdit ? (
                <input
                  type="number"
                  value={userData.age}
                  onChange={(e) => setUserData({ ...userData, age: e.target.value })}
                  className="border border-gray-300 rounded px-2 py-1 w-full max-w-xs"
                />
              ) : (
                <p>{userData.age} años</p>
              )}
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default MiPerfil