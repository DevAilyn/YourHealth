import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'

const SobreNosotros = () => {
  return (
    <div className=" bg-dark-bg text-white">

      {/* Hero Section */}
      <div className="bg-light-bg py-16 md:py-24 px-6 lg:px-20 mt-20">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-800 mb-6">
            Sobre <span className="text-cta">YourHealth</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Conectamos a personas como tú con entrenadores profesionales certificados, 
            para que alcances tus metas de salud y bienestar de forma personalizada, flexible y efectiva.
          </p>
        </div>
      </div>

      {/* Misión y Visión */}
      <div className="py-16 px-6 lg:px-20 bg-dark-bg">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nuestra Misión</h2>
            <p className="text-gray-300 leading-relaxed">
              Empoderar a cada persona a transformar su vida a través del ejercicio y la nutrición, 
              con el acompañamiento de expertos que entienden sus necesidades, ritmo y objetivos.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Creemos que la salud no es un lujo, sino un derecho. Por eso ofrecemos planes accesibles, 
              flexibilidad total (presencial u online) y un enfoque 100% personalizado.
            </p>
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-primary">Nuestra Visión</h2>
            <p className="text-gray-300 leading-relaxed">
              Ser la plataforma líder en Latinoamérica para el entrenamiento personalizado, 
              donde cada usuario encuentre no solo un entrenador, sino un aliado en su camino hacia el bienestar.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Innovamos constantemente con tecnología, inteligencia artificial y feedback real de nuestros usuarios 
              para ofrecer la mejor experiencia posible.
            </p>
          </div>

        </div>
      </div>

      {/* Valores o Pilares */}
      <div className="py-16 px-6 lg:px-20 bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">
            Nuestros <span className="text-primary">Pilares</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="text-center p-6 bg-light-bg rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary bg-opacity-20 flex items-center justify-center rounded-full">
                <img src={assets.infoIcon} alt="Calidad" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Calidad Certificada</h3>
              <p className="text-gray-600">
                Todos nuestros entrenadores están certificados internacionalmente y con experiencia comprobada.
              </p>
            </div>

            <div className="text-center p-6 bg-light-bg rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary bg-opacity-20 flex items-center justify-center rounded-full">
                <img src={assets.pesoIcon} alt="Flexibilidad" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Flexibilidad Total</h3>
              <p className="text-gray-600">
                Entrena cuando y donde quieras: en casa, en el gimnasio o al aire libre. ¡Tú eliges!
              </p>
            </div>

            <div className="text-center p-6 bg-light-bg rounded-2xl shadow-lg">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary bg-opacity-20 flex items-center justify-center rounded-full">
                <img src={assets.correoIcon} alt="Compromiso" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compromiso Real</h3>
              <p className="text-gray-600">
                No vendemos paquetes vacíos. Cada sesión está diseñada para acercarte un paso más a tu meta.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* Imagen + CTA */}
      <div className="py-16 px-6 lg:px-20 bg-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-dark-bg mb-6">
              ¿Listo para comenzar tu transformación?
            </h2>
            <p className="text-dark-bg text-lg mb-8 leading-relaxed">
              Únete a miles de personas que ya están entrenando con los mejores profesionales. 
              Tu primera sesión puede ser hoy mismo.
            </p>
            <Link
              to="/registro"
              className="inline-block bg-cta hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition-transform transform hover:scale-105"
            >
              ¡Regístrate Gratis!
            </Link>
          </div>

          <div className="flex justify-center">
            <img
              src={assets.peopleHome}
              alt="Personas entrenando"
              className="max-w-full h-auto "
            />
          </div>

        </div>
      </div>


    </div>
  )
}

export default SobreNosotros