import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'

const Reservas = () => {


  const { entId } = useParams()
  const { trainers } = useContext(AppContext)

  const [entInfo, setEntInfo] = useState(null)

  const fetchEntInfo = async () => {
    const entInfo = trainers.find(ent => ent._id === entId)
    setEntInfo(entInfo)
    console.log(entInfo)
  }

  useEffect(() => {
    fetchEntInfo()
  }, [trainers, entId])

  return entInfo &&(
    <div>
      {/* -------- Detalles de entrenadores -------- */}
      <div>
        <div>
          <img src={entInfo.image} alt="" />
        </div>

        <div>
          {/* Info: Nombre Estudio Experiencia */}
          <p>
            {entInfo.name}
            <img src={assets.verifiedIcon} alt="" />
          </p>
          <div>
            <p>{entInfo.objetivo}</p>
            <button>{entInfo.experience}</button>
          </div>

        {/* Sobre el entrenador */}
        <div>
          <p>Sobre: <img src={assets.infoIcon} alt="" /></p>
          <p>{entInfo.about}</p>
        </div>
        </div>
      </div>

    </div>
  )
}

export default Reservas