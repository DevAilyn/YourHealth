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
import verifiedIcon from '../assets/images/group_icons/verified_icon.svg'
import infoIcon from '../assets/images/group_icons/info_icon.svg'

// === Especialidades ===
import strength from './images/group_icons/strength_icon.png'
import cardio from './images/group_icons/cardio_icon.png'
import muscle from './images/group_icons/muscle_icon.png'
import toning from './images/group_icons/toning_icon.png'
import functional from './images/group_icons/training_icon.png'
import weightLoss from './images/group_icons/lose_icon.png'
import weightGain from './images/group_icons/gain_icon.png'
import postpartum from './images/group_icons/postpartum_icon.png'

// -------- Importación de videos --------
import inicioSesionVideo from '../assets/videos/hombre-inicio-sesion.mp4'
import registroVideo from '../assets/videos/personas-registro-video.mp4'


// === Exportar todos los assets ===
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
  verifiedIcon,
  infoIcon,

  // Imágenes complementarias
  womanHome,
  peopleHome,
  perfil,

  // Videos
  inicioSesionVideo,
  registroVideo
}


// === Objetivos con íconos ===
export const objetivosData = [
  { objetivo: 'Fuerza', image: strength },
  { objetivo: 'Cardio', image: cardio },
  { objetivo: 'Aumento de masa muscular', image: muscle },
  { objetivo: 'Tonificación', image: toning },
  { objetivo: 'Entrenamiento Funcional', image: functional },
  { objetivo: 'Bajar de peso con enfoque nutricional', image: weightLoss },
  { objetivo: 'Ganar peso con entrenamiento y nutrición', image: weightGain },
  { objetivo: 'Entrenamiento postparto', image: postpartum }
]




// === Entrenadores ===
export const trainers = [
  {
    _id: 'entrenadorCarlos',
    name: 'Carlos Mendoza',
    image: trainer1,
    objetivo: 'Fuerza',
    certifications: 'ENT, CES',
    experience: '6 años',
    about: 'Entrenador certificado con enfoque en hipertrofia y fuerza funcional. Apasionado por transformar hábitos y mentes.',
    price: 80000,
    modalities: ['presencial', 'online'],
    location: 'Gimnasio FitLife, Av. Principal 123',
    rating: 4.9,
    reviews: 87
  },
  {
    _id: 'entrenadoraLucia',
    name: 'Lucía Ramírez',
    image: trainer2,
    objetivo: 'Bajar de peso con enfoque nutricional',
    certifications: 'Nutrióloga Deportiva, Coach en Hábitos Saludables',
    experience: '5 años',
    about: 'Ayudo a mis clientes a perder peso de forma sostenible combinando entrenamientos personalizados con planes nutricionales reales. No hay dietas extremas, solo hábitos que duran para siempre.',
    price: 90000,
    modalities: ['online'],
    location: 'Consulta virtual',
    rating: 4.8,
    reviews: 63
  },
  {
    _id: 'entrenadorAndres',
    name: 'Andrés Torres',
    image: trainer3,
    objetivo: 'Cardio',
    certifications: 'ACSM, PFT',
    experience: '4 años',
    about: 'Experto en entrenamiento cardiovascular de alto rendimiento. Ideal para corredores, triatletas y pérdida de grasa.',
    price: 75000,
    modalities: ['presencial', 'online'],
    location: 'Parque Central y Zoom',
    rating: 4.7,
    reviews: 55
  },
  {
    _id: 'entrenadoraSofia',
    name: 'Sofía Castillo',
    image: trainer4,
    objetivo: 'Tonificación',
    certifications: 'NASM, Corrective Exercise',
    experience: '7 años',
    about: 'Especialista en tonificación y definición muscular. Mis programas combinan fuerza, resistencia y control postural.',
    price: 85000,
    modalities: ['presencial', 'online'],
    location: 'Estudio AlmaFit, Calle 45',
    rating: 5.0,
    reviews: 94
  },
  {
    _id: 'entrenadorDiego',
    name: 'Diego Fernández',
    image: trainer5,
    objetivo: 'Entrenamiento Funcional',
    certifications: 'CrossFit L3, FMS',
    experience: '5 años',
    about: 'Entrenador funcional con experiencia en movilidad, core y prevención de lesiones. Ideal para personas activas.',
    price: 80000,
    modalities: ['presencial'],
    location: 'Box Funcional, Av. del Deporte',
    rating: 4.8,
    reviews: 72
  },
  {
    _id: 'entrenadoraValentina',
    name: 'Valentina Paredes',
    image: trainer6,
    objetivo: 'Cardio',
    certifications: 'NASM, HIIT Specialist',
    experience: '3 años',
    about: 'Especialista en entrenamientos HIIT y tabatas. Perfecto para quienes buscan quemar grasa y ganar resistencia.',
    price: 70000,
    modalities: ['online'],
    location: 'Plataforma Zoom',
    rating: 4.6,
    reviews: 48
  },
  {
    _id: 'entrenadorJavier',
    name: 'Javier Rojas',
    image: trainer7,
    objetivo: 'Fuerza',
    certifications: 'NSCA-CPT, PES',
    experience: '8 años',
    about: 'Experto en entrenamiento de fuerza máxima y preparación física. Trabaja con atletas y personas que buscan definición.',
    price: 95000,
    modalities: ['presencial'],
    location: 'Gimnasio PowerHouse, Zona Industrial',
    rating: 4.9,
    reviews: 102
  },
  {
    _id: 'entrenadoraCamila',
    name: 'Camila Ortega',
    image: trainer8,
    objetivo: 'Bajar de peso con enfoque nutricional',
    certifications: 'Diplomado en Nutrición Deportiva, Entrenadora Metabólica',
    experience: '4 años',
    about: 'Mis programas integran cardio, fuerza y alimentación para acelerar la pérdida de grasa sin perder masa muscular. Ideal para quienes buscan definirse y sentirse mejor.',
    price: 88000,
    modalities: ['online'],
    location: 'Plataforma Zoom',
    rating: 4.7,
    reviews: 59
  },
  {
    _id: 'entrenadorMateo',
    name: 'Mateo Silva',
    image: trainer9,
    objetivo: 'Aumento de masa muscular',
    certifications: 'ISSA, Hypertrophy Specialist',
    experience: '5 años',
    about: 'Mi enfoque es el desarrollo muscular progresivo y sostenible. Trabajo con principiantes y avanzados que buscan volumen y fuerza.',
    price: 92000,
    modalities: ['presencial', 'online'],
    location: 'Gimnasio Iron Gym, Av. 200',
    rating: 4.8,
    reviews: 78
  },
  {
    _id: 'entrenadoraDaniela',
    name: 'Daniela Méndez',
    image: trainer10,
    objetivo: 'Entrenamiento Funcional',
    certifications: 'TRX, Suspension Training',
    experience: '4 años',
    about: 'Me especializo en entrenamientos funcionales para mejorar movilidad, equilibrio y fuerza en movimientos cotidianos.',
    price: 82000,
    modalities: ['presencial'],
    location: 'Parque Deportivo Norte',
    rating: 4.7,
    reviews: 54
  },
  {
    _id: 'entrenadorAlejandro',
    name: 'Alejandro Cruz',
    image: trainer11,
    objetivo: 'Fuerza',
    certifications: 'ISSA, Strength Coach',
    experience: '7 años',
    about: 'Entrenador de fuerza con enfoque en progresión segura y constante. Ideal para principiantes y avanzados.',
    price: 86000,
    modalities: ['presencial', 'online'],
    location: 'Gimnasio Iron Gym, Av. 200',
    rating: 4.8,
    reviews: 78
  },
  {
    _id: 'entrenadoraRenata',
    name: 'Renata Gómez',
    image: trainer12,
    objetivo: 'Cardio',
    certifications: 'ACE, Group Fitness',
    experience: '3 años',
    about: 'Instructora de clases grupales de cardio, spinning y dance fitness. Energía y motivación garantizadas.',
    price: 78000,
    modalities: ['presencial'],
    location: 'Club Deportivo Vital, Calle 30',
    rating: 4.6,
    reviews: 61
  },
  {
    _id: 'entrenadorFernando',
    name: 'Fernando Lara',
    image: trainer13,
    objetivo: 'Ganar peso con entrenamiento y nutrición',
    certifications: 'Coach en Hipertrofia, Especialista en Nutrición para Volumen',
    experience: '5 años',
    about: 'Ayudo a personas delgadas o ectomorfas a ganar peso saludable con entrenamientos de fuerza progresiva y planes nutricionales altos en calorías pero equilibrados.',
    price: 90000,
    modalities: ['presencial', 'online'],
    location: 'Gimnasio PowerUp y Zoom',
    rating: 4.7,
    reviews: 70
  },
  {
    _id: 'entrenadoraIsabella',
    name: 'Isabella Ríos',
    image: trainer14,
    objetivo: 'Entrenamiento postparto',
    certifications: 'Pre & Postnatal Coach, Corrective Exercise',
    experience: '6 años',
    about: 'Apoyo a mamás en su recuperación postparto con programas seguros de suelo pélvico, core y fortalecimiento progresivo.',
    price: 84000,
    modalities: ['presencial', 'online'],
    location: 'Estudio MamáFuerte, Calle 50',
    rating: 4.9,
    reviews: 88
  },
  {
    _id: 'entrenadorEmilio',
    name: 'Emilio Vargas',
    image: trainer15,
    objetivo: 'Aumento de masa muscular',
    certifications: 'PN-L1, Muscle Growth Specialist',
    experience: '4 años',
    about: 'Diseño rutinas personalizadas para ganar masa muscular con progresión inteligente y alimentación alineada.',
    price: 87000,
    modalities: ['presencial', 'online'],
    location: 'Home Training y Zoom',
    rating: 4.7,
    reviews: 65
  }
]


  export const objetivo = [
    "Fuerza",
    "Cardio",
    "Aumento de masa muscular",
    "Tonificación",
    "Entrenamiento Funcional",
    "Bajar de peso con enfoque nutricional",
    "Ganar peso con entrenamiento y nutrición",
    "Entrenamiento postparto",
  ]
