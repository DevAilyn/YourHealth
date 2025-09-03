// pages/Inicio.jsx
import React from 'react'
import { assets } from '../assets/assets'
import Menu from '../components/Menu'
import Header from '../components/Header'
import Objetivos from '../components/Objetivos'
import EntrenadoresInicio from '../components/EntrenadoresInicio'

const Inicio = () => {
  return (
    <div>
      <Header/>
      <Objetivos/>
      <EntrenadoresInicio/>
    </div>
  )
}

export default Inicio