// -------- Importación de fotos entrenadores --------
import trainer1 from '../assets/images/group_trainers/trainer1.png'
import trainer2 from '../assets/images/group_trainers/trainer2.png'
import trainer3 from '../assets/images/group_trainers/trainer3.png'
import trainer4 from '../assets/images/group_trainers/trainer4.png'
import trainer5 from '../assets/images/group_trainers/trainer5.png'
import trainer6 from '../assets/images/group_trainers/trainer6.png'
import trainer7 from '../assets/images/group_trainers/trainer7.png'
import trainer8 from '../assets/images/group_trainers/trainer8.png'
import trainer9 from '../assets/images/group_trainers/trainer9.png'
import trainer10 from '../assets/images/group_trainers/trainer10.png'
import trainer11 from '../assets/images/group_trainers/trainer11.png'
import trainer12 from '../assets/images/group_trainers/trainer12.png'
import trainer13 from '../assets/images/group_trainers/trainer13.png'
import trainer14 from '../assets/images/group_trainers/trainer14.png'
import trainer15 from '../assets/images/group_trainers/trainer15.png'

// -------- Importación de recursos complementarios --------
import alturaIcon from '../assets/images/group_icons/altura_icon.png'
import correoIcon from '../assets/images/group_icons/correo_icon.png'
import edadIcon from '../assets/images/group_icons/edad_icon.png'
import logoIcon from '../assets/images/group_icons/logo_icon.png'
import passwordIcon from '../assets/images/group_icons/password-icon.png'
import pesoIcon from '../assets/images/group_icons/peso_icon.png'
import usuarioInputIcon from '../assets/images/group_icons/usuario-input_icon.png'
import womanHome from '../assets/images/group_images/woman-home.png'
import peopleHome from '../assets/images/group_images/people-home.png'
import logo from '../assets/images/group_icons/logo.png'
import perfil from '../assets/images/group_images/perfil-men.jpg'
import desglose from '../assets/images/group_icons/desglosar_icon.svg'
import flecha from '../assets/images/group_icons/flecha_icon.svg'
import elipse from '../assets/images/group_images/elipse_fondo.png'

// === Especialidades  ===
import strength from './images/group_icons/strength_icon.png'     // Fuerza
import cardio from './images/group_icons/cardio_icon.png'         // Cardio
import muscle from './images/group_icons/muscle_icon.png'         // Aumento de masa
import toning from './images/group_icons/toning_icon.png'         // Tonificación
import functional from './images/group_icons/training_icon.png'   // Entrenamiento funcional
import weightLoss from './images/group_icons/lose_icon.png'       // Bajar de peso
import weightGain from './images/group_icons/gain_icon.png'       // Subir de peso
import postpartum from './images/group_icons/postpartum_icon.png' // Postparto


// -------- Importación de videos --------
import inicioSesionVideo from '../assets/videos/hombre-inicio-sesion.mp4'
import registroVideo from '../assets/videos/personas-resgistro-video.mp4'


// --- Exportar como objeto ---


export const objetivosData = [
  // Especialidades con íconos
  { objetivo: 'Fuerza', image: strength },
  { objetivo: 'Cardio', image: cardio },
  { objetivo: 'Aumento de masa muscular', image: muscle },
  { objetivo: 'Tonificación', image: toning },
  { objetivo: 'Entrenamiento Funcional', image: functional },
  { objetivo: 'Bajar de peso con enfoque nutricional', image: weightLoss },
  { objetivo: 'Ganar peso con entrenamiento y nutrición', image: weightGain },
  { objetivo: 'Entrenamiento postparto', image: postpartum }
]

// Trainers
export const trainersData = [
  {
    _id: 'entrenadorCarlos',
    name: 'Carlos Mendoza',
    image: trainer1,
    goal: 'Fuerza',
    experience: '6 años',
    about: 'Entrenador certificado con enfoque en hipertrofia y fuerza funcional. Apasionado por transformar hábitos y mentes.',
    price: 80000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadoraLucia',
    name: 'Lucía Ramírez',
    image: trainer2,
    goal: 'Bajar de peso con enfoque nutricional',
    experience: '5 años',
    about: 'Ayudo a mis clientes a perder peso de forma sostenible combinando entrenamientos personalizados con planes nutricionales reales. No hay dietas extremas, solo hábitos que duran para siempre.',
    price: 90000,
    modalities: ['online'],
  },
  {
    _id: 'entrenadorAndres',
    name: 'Andrés Torres',
    image: trainer3,
    goal: 'Cardio',
    experience: '4 años',
    about: 'Experto en entrenamiento cardiovascular de alto rendimiento. Ideal para corredores, triatletas y pérdida de grasa.',
    price: 75000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadoraSofia',
    name: 'Sofía Castillo',
    image: trainer4,
    goal: 'Tonificación',
    experience: '7 años',
    about: 'Especialista en tonificación y definición muscular. Mis programas combinan fuerza, resistencia y control postural.',
    price: 85000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadorDiego',
    name: 'Diego Fernández',
    image: trainer5,
    goal: 'Entrenamiento Funcional',
    experience: '5 años',
    about: 'Entrenador funcional con experiencia en movilidad, core y prevención de lesiones. Ideal para personas activas.',
    price: 80000,
    modalities: ['presencial'],
  },
  {
    _id: 'entrenadoraValentina',
    name: 'Valentina Paredes',
    image: trainer6,
    goal: 'Cardio',
    experience: '3 años',
    about: 'Especialista en entrenamientos HIIT y tabatas. Perfecto para quienes buscan quemar grasa y ganar resistencia.',
    price: 70000,
    modalities: ['online'],
  },
  {
    _id: 'entrenadorJavier',
    name: 'Javier Rojas',
    image: trainer7,
    goal: 'Fuerza',
    experience: '8 años',
    about: 'Experto en entrenamiento de fuerza máxima y preparación física. Trabaja con atletas y personas que buscan definición.',
    price: 95000,
    modalities: ['presencial'],
  },
  {
    _id: 'entrenadoraCamila',
    name: 'Camila Ortega',
    image: trainer8,
    goal: 'Bajar de peso con enfoque nutricional',
    experience: '4 años',
    about: 'Mis programas integran cardio, fuerza y alimentación para acelerar la pérdida de grasa sin perder masa muscular. Ideal para quienes buscan definirse y sentirse mejor.',
    price: 88000,
    modalities: ['online'],
  },
  {
    _id: 'entrenadorMateo',
    name: 'Mateo Silva',
    image: trainer9,
    goal: 'Aumento de masa muscular',
    experience: '5 años',
    about: 'Mi enfoque es el desarrollo muscular progresivo y sostenible. Trabajo con principiantes y avanzados que buscan volumen y fuerza.',
    price: 92000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadoraDaniela',
    name: 'Daniela Méndez',
    image: trainer10,
    goal: 'Entrenamiento Funcional',
    experience: '4 años',
    about: 'Me especializo en entrenamientos funcionales para mejorar movilidad, equilibrio y fuerza en movimientos cotidianos.',
    price: 82000,
    modalities: ['presencial'],
  },
  {
    _id: 'entrenadorAlejandro',
    name: 'Alejandro Cruz',
    image: trainer11,
    goal: 'Fuerza',
    experience: '7 años',
    about: 'Entrenador de fuerza con enfoque en progresión segura y constante. Ideal para principiantes y avanzados.',
    price: 86000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadoraRenata',
    name: 'Renata Gómez',
    image: trainer12,
    goal: 'Cardio',
    experience: '3 años',
    about: 'Instructora de clases grupales de cardio, spinning y dance fitness. Energía y motivación garantizadas.',
    price: 78000,
    modalities: ['presencial'],
  },
  {
    _id: 'entrenadorFernando',
    name: 'Fernando Lara',
    image: trainer13,
    goal: 'Ganar peso con entrenamiento y nutrición',
    experience: '5 años',
    about: 'Ayudo a personas delgadas o ectomorfas a ganar peso saludable con entrenamientos de fuerza progresiva y planes nutricionales altos en calorías pero equilibrados.',
    price: 90000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadoraIsabella',
    name: 'Isabella Ríos',
    image: trainer13,
    goal: 'Entrenamiento postparto',
    experience: '6 años',
    about: 'Apoyo a mamás en su recuperación postparto con programas seguros de suelo pélvico, core y fortalecimiento progresivo.',
    price: 84000,
    modalities: ['presencial', 'online'],
  },
  {
    _id: 'entrenadorEmilio',
    name: 'Emilio Vargas',
    image: trainer14,
    goal: 'Aumento de masa muscular',
    experience: '4 años',
    about: 'Diseño rutinas personalizadas para ganar masa muscular con progresión inteligente y alimentación alineada.',
    price: 87000,
    modalities: ['presencial', 'online'],
  }
]


export const assets = {
  // Iconos
  alturaIcon,
  correoIcon,
  edadIcon,
  logoIcon,
  passwordIcon,
  pesoIcon,
  usuarioInputIcon,
  logo,
  desglose,
  flecha,
  elipse,

  // Imagenes complementarias
  womanHome,
  peopleHome,
  perfil,

  //Videos
  inicioSesionVideo,
  registroVideo
}