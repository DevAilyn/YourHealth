import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../assets/assets'

const Registro = () => {
  const [formData, setFormData] = useState({
    name: '',
    weight: '',
    age: '',
    height: ''
  })
  const [errors, setErrors] = useState({})
  const [step, setStep] = useState(1) // 1: Datos personales, 2: Email & password
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Limpiar error si existe
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const validateStep1 = () => {
    const newErrors = {}
    if (!formData.name.trim()) newErrors.name = 'Nombre requerido'
    if (!formData.weight.trim()) newErrors.weight = 'Peso requerido'
    if (!formData.age.trim()) newErrors.age = 'Edad requerida'
    if (!formData.height.trim()) newErrors.height = 'Estatura requerida'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleContinue = (e) => {
    e.preventDefault()
    if (validateStep1()) {
      setStep(2)
    }
  }

  const handleRegister = (e) => {
    e.preventDefault()
    alert('Registro exitoso! En producción se enviaría al backend.')
    navigate('/inicio')
  }

  return (
    <div className="min-h-screen bg-dark-bg flex items-center justify-center p-4">

      <div className="max-w-6xl w-full grid md:grid-cols-2 ">

        {/* Izquierda: Video */}
        <div className="relative rounded-l-2xl overflow-hidden shadow-xl">
          <video
            src={assets.registroVideo}
            autoPlay
            loop
            muted
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        </div>

        {/* Derecha: Formulario */}
        <div className="flex flex-col justify-center items-center p-8 bg-light-bg rounded-r-2xl shadow-xl">
          <div className="w-full max-w-md">
            {/* Logo del formulario */}
            <div className="text-center mb-6">
              <img src={assets.logoIcon} alt="Logo" className="w-25 h-12 mx-auto mb-2" />
              <h1 className="text-3xl font-bold">{step === 1 ? 'Registro' : 'Completa tu cuenta'}</h1>
            </div>

            {step === 1 && (
              <form onSubmit={handleContinue}>
                {/* Nombre */}
                <div className="mb-5 relative">
                  <img src={assets.usuarioInputIcon} alt="Usuario" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="text"
                    name="name"
                    placeholder="¿Cuál es tu nombre?"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Peso */}
                <div className="mb-5 relative">
                  <img src={assets.pesoIcon} alt="Peso" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="number"
                    name="weight"
                    placeholder="Peso Kg"
                    value={formData.weight}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.weight ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.weight && <p className="text-red-500 text-sm mt-1">{errors.weight}</p>}
                </div>

                {/* Edad */}
                <div className="mb-5 relative">
                  <img src={assets.edadIcon} alt="Edad" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="number"
                    name="age"
                    placeholder="Edad"
                    value={formData.age}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.age ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>

                {/* Estatura */}
                <div className="mb-5 relative">
                  <img src={assets.alturaIcon} alt="Altura" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="number"
                    name="height"
                    placeholder="Estatura"
                    value={formData.height}
                    onChange={handleChange}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all ${
                      errors.height ? 'border-red-500' : 'border-gray-300'
                    }`}
                  />
                  {errors.height && <p className="text-red-500 text-sm mt-1">{errors.height}</p>}
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent hover:bg-green-500 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-lg"
                >
                  Continuar →
                </button>

                <div className="mt-6 text-center text-sm">
                  ¿Ya tienes una cuenta?{' '}
                  <Link to="/inicioSesion" className="text-cta hover:underline font-medium">
                    Inicia sesión aquí
                  </Link>
                </div>
              </form>
            )}

            {step === 2 && (
              <form onSubmit={handleRegister}>
                {/* Email */}
                <div className="mb-5 relative">
                  <img src={assets.correoIcon} alt="Correo" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electrónico"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                {/* Contraseña */}
                <div className="mb-5 relative">
                  <img src={assets.passwordIcon} alt="Contraseña" className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    required
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-cta hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full transition duration-200 shadow-lg"
                >
                  Registrar
                </button>

                <div className="mt-6 text-center text-sm">
                  <Link to="/registro" className="text-gray-600 hover:underline">
                    ← Volver al paso anterior
                  </Link>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Registro