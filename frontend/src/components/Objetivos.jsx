import React from 'react'
import { objetivosData } from '../assets/assets'
import { Link } from 'react-router-dom'

const Objetivos = () => {
  return (
    <div id="objetivos" className="text-white flex flex-col items-center gap-4 py-16">
      <h1 className="text-4xl font-medium">Encuentra de acuerdo a tu objetivo</h1>
      <p className="sm:w-1/3 text-center">
        Programa tu hora de entreno específico sin complicaciones.
      </p>

      <div className="w-full max-w-6xl mx-auto pt-5 mt-10">
        
        <div className="flex justify-center gap-15 flex-wrap">
          {objetivosData.slice(0, 5).map((item, index) => (
            <Link
              key={index}
              to={`/entrenadores/${item.objetivo}`}
              className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt=""
                className="w-28 h-28 object-contain transition-transform duration-300 hover:scale-110 hover:-translate-y-2"/>
              <p className="break-words text-center max-w-[120px]">{item.objetivo}</p>
            </Link>
          ))}
        </div>

    
        <div className="flex justify-center gap-15 mt-8 flex-wrap">
          {objetivosData.slice(5).map((item, index) => (
            <Link
              key={index}
              to={`/entrenadores/${item.objetivo}`}
              className="flex flex-col items-center text-center">
              <img
                src={item.image}
                alt=""
                className="w-28 h-28 object-contain transition-transform duration-300 hover:scale-110 hover:-translate-y-2"/>
              <p className="break-words text-center max-w-[120px]">{item.objetivo}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Objetivos



