import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const InicioSesion = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateForm = () => {
    const newErrors = {}
    if (!formData.email.trim()) newErrors.email = 'Correo requerido'
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Correo inválido'
    if (!formData.password.trim()) newErrors.password = 'Contraseña requerida'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateForm()) {
      alert('Inicio de sesión exitoso!')
      navigate('/inicio') // Redirigir a inicio
    }
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">
      
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-6">

        {/* Izquierda: Video */}
        <div className="relative rounded-2xl overflow-hidden shadow-xl">
          <video
            src={assets.inicioSesionVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
         
        </div>

        {/* Derecha: Formulario */}
        <div className="flex flex-col justify-center items-center p-8 bg-light-bg rounded-2xl shadow-xl">
          <div className="w-full max-w-md">
            <div className="text-center mb-6">
              <img src={assets.logoIcon} alt="Logo" className="w-25 h-12 mx-auto mb-2" />
              <h1 className="text-3xl font-bold">Iniciar Sesión</h1>
            </div>

            <form onSubmit={handleSubmit}>
              {/* Email */}
              <div className="mb-5 relative">
                <img src={assets.correoIcon} alt="Correo" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="email"
                  name="email"
                  placeholder="Correo electrónico"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Contraseña */}
              <div className="mb-5 relative">
                <img src={assets.passwordIcon} alt="Contraseña" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                    errors.password ? 'border-red-500' : 'border-gray-300'
                  }`}
                />
                {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-cta hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-lg"
              >
                Iniciar Sesión
              </button>

              <div className="mt-6 text-center text-sm">
                ¿No tienes cuenta?{' '}
                <Link to="/registro" className="text-cta hover:underline font-medium">
                  Regístrate aquí
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InicioSesion