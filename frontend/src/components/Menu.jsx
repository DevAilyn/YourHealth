import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'

const Menu = () => {
    

    const navigate = useNavigate();

    const [showMenu, setShowMenu] = useState(false)
    const [token, setToken] = useState(true)

  return (
    <nav className='flex items-center justify-between px-6 py-3 bg-white rounded-full shadow-lg max-w-6xl mx-auto'>
      {/* Logo */}
      <img onClick={()=>navigate('/Inicio')} className='w-40 h-8 cursor-pointer' src={assets.logo} alt='Logo'  />

      {/* Enlaces */}
      <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/inicio' className='hover:text-accent transition-colors'>
            <li className='py-1'>Inicio</li>
            <hr className='border-none outline-none h-0.5 bg-cta w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/entrenadores' className='hover:text-accent transition-colors'>
            <li className='py-1'>Entrenadores</li>
            <hr className='border-none outline-none h-0.5 bg-cta w-3/5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/sobre-nosotros' className='hover:text-accent transition-colors'>
            <li className='py-1'>Sobre Nosotros</li>
            <hr className='border-none outline-none h-0.5 bg-cta w-3/5 m-auto hidden'/>
        </NavLink>
        
      </ul>

      {/* Botones */}
      <div className='flex items-center gap-3'>
        {
            token
            ? <div>
                
            </div>
            : <button onClick={()=>navigate('/InicioSesion')} className='px-4 py-2 border border-gray-300 text-dark-bg bg-light-bg rounded-full text-sm font-medium hover:bg-highlight transition-colors hidden md:block'>Inicia Sesión</button>
        }

         {
            token
            ? <div className='flex items-center gap-5 cursor-pointer group relative'>
                <img className='w-13 h-12 rounded-full' src={assets.perfil} alt="foto de perfil" />
                <img className='w-2.5' src={assets.desglose} alt="abrir" />
                <div className='absolute top-0 right-0 w-26 pt-18 text-base font-medium text-black z-20 hidden group-hover:block'>
                    <div className='bg-white rounded-2xl w-35 h-30 flex flex-col justify-center pl-3 gap-1'>
                        <p onClick={()=>navigate('/MiPerfil')} className='hover:text-cta cursor-pointer'>Mi perfil</p>
                        <p onClick={()=>navigate('/MisReservas')} className='hover:text-cta cursor-pointer'>Mis reservas</p>
                        <p onClick={()=>setToken(false)} className='hover:text-cta cursor-pointer'>Cerrar Sesión</p>
                    </div>
                </div>
            </div>
            : <button onClick={()=>navigate('/Registro')}className='px-4 py-2 bg-primary text-dark-bg rounded-full text-sm font-medium hover:bg-[#30c7b4] transition-colors hidden md:block'>Regístrate</button>
        }



        
        
      </div>
    </nav>
  )
}

export default Menu
