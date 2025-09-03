import React from 'react'
import { useParams } from 'react-router-dom'

const Entrenadores = () => {

  const {especialidad} = useParams()

  console.log(especialidad);
  

  return (
    <div>
      
    </div>
  )
}

export default Entrenadores