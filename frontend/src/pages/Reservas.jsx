import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Reservas = () => {

  const {entId} = useParams()
  const {trainers} = useContext(AppContext)

  const [entInfo, setEntInfo] = useState (null)

  const fetchEntInfo = async () => {
    const entInfo = trainers.fins(ent => ent._id === entId)
    setEntInfo (entInfo)
    console.log (entInfo)
  }

  useEffect(()=>{
    fetchEntInfo()
  },[trainers,entId])

  return (
    <div>
        
    </div>
  )
}

export default Reservas