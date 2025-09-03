import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const EntrenadoresInicio = () => {

    const navigate = useNavigate()
    const {trainers} = useContext(AppContext)

    return (
        <div className="text-white flex flex-col items-center gap-4 my-16 md:mx-10">
            <h1 className="text-4xl font-medium">Nuestros entrenadores</h1>

            <p className="text-center max-w-md">
                Agenda tu cita en el horario que desees con nuestros profesionales
            </p>

            <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-5 px-3 sm:px-0">
                {trainers.slice(0, 6).map((item, index) => (
                    <div onClick={(()=>navigate(`/reservas/${item._id}`))}
                        key={index}
                        className="border border-primary rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500 bg-light-bg">
                        <div className="w-full h-60 flex items-center justify-center bg-highlight">
                            <img
                                className="max-h-full max-w-full object-contain"
                                src={item.image}
                                alt={item.name}
                            />
                        </div>

                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500">
                                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                                <p>Disponible</p>
                            </div>

                            <p className="font-semibold text-black">{item.name}</p>
                            <p className="text-sm text-black">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={()=>{navigate('/entrenadores'); scrollTo(0,0)}} className=" cursor-pointer mt-6 px-6 py-2 bg-cta text-white rounded-full hover:bg-red-700 transition">
                Conoce más
            </button>
        </div>
    );
};

export default EntrenadoresInicio;
