# Arquitectura del Proyecto: YourHealth

> Plataforma para conectar usuarios con entrenadores personales según sus objetivos de fitness.

---

## 📑 Tabla de Contenidos

- [🎯 Objetivo del Proyecto](#-objetivo-del-proyecto)
- [🧩 Estructura de Carpetas](#-estructura-de-carpetas)
- [🔑 Patrones de Diseño Implementados](#-patrones-de-diseño-implementados)
  - [1. Context API (Patrón de Estado Global)](#1--context-api-patrón-de-estado-global)
  - [2. Component-Based Architecture (Patrón Modular)](#2--component-based-architecture-patrón-modular)
- [🧭 Sistema de Enrutamiento (React Router DOM v6)](#-sistema-de-enrutamiento-react-router-dom-v6)
- [🖼️ Gestión de Assets (Imágenes, Íconos, Videos)](#️-gestión-de-assets-imágenes-íconos-videos)
- [⚙️ Tecnologías y Herramientas](#️-tecnologías-y-herramientas)
- [🚧 Próximos Pasos / Mejoras Sugeridas](#-próximos-pasos--mejoras-sugeridas)
- [📄 Licencia y Atribuciones](#-licencia-y-atribuciones)

---

## 🎯 Objetivo del Proyecto

YourHealth es una aplicación web que permite a los usuarios:
- Explorar entrenadores certificados filtrados por especialidad (fuerza, cardio, postparto, etc.).
- Ver perfiles detallados de cada entrenador.
- Reservar sesiones (funcionalidad por implementar).
- Navegar entre secciones como Inicio, Entrenadores, Sobre Nosotros, Mi Perfil y Mis Reservas.

---

## 🧩 Estructura de Carpetas

```bash
yourhealth-project/
├── public/                     # Archivos públicos (favicon)
├── src/
│   ├── assets/                 # Imágenes, íconos, videos y exports centralizados
│   │   └── assets.js           # Centraliza todos los assets importados
│   ├── components/             # Componentes reutilizables UI
│   │   ├── Header.jsx
│   │   ├── Menu.jsx
│   │   ├── Footer.jsx
│   │   ├── Objetivos.jsx
│   │   └── EntrenadoresInicio.jsx
│   ├── context/                # Gestión de estado global
│   │   └── AppContext.jsx      # Provee datos de entrenadores a toda la app
│   ├── pages/                  # Páginas principales (rutas)
│   │   ├── Inicio.jsx
│   │   ├── Entrenadores.jsx
│   │   ├── Reservas.jsx
│   │   ├── InicioSesion.jsx
│   │   ├── MiPerfil.jsx
│   │   ├── MisReservas.jsx
│   │   └── SobreNosotros.jsx
│   │   └── Registro.jsx
│   ├── App.jsx                 # Componente raíz con definición de rutas
│   ├── main.jsx                # Punto de entrada, envuelve App con Context y Router
│   └── index.css               # Estilos globales y variables CSS personalizadas
├── ARCHITECTURE.md             # Este archivo
└── package.json
└── vite.config.js
```

## 🔑 Patrones de Diseño Implementados

### 1. Context API (Patrón de Estado Global)

- **Propósito**: Evitar *prop drilling* y manejar datos compartidos (ej: entrenadores).
- **Uso en el proyecto**:
  - `AppContext.jsx` crea el contexto global.
  - `trainers` se importan desde `assets.js` y se proveen a toda la aplicación.
  - En `main.jsx`, `AppContextProvider` envuelve la app.
- **Ventajas**:
  - Código más limpio.
  - Fácil escalabilidad si se agregan usuarios o reservas.

---

### 2. Component-Based Architecture (Patrón Modular)

- **Propósito**: Dividir la interfaz en componentes reutilizables.
- **Ejemplos**:
  - `<Menu />`: Navegación global.
  - `<Footer />`: Pie de página.
  - `<Objetivos />`: Íconos con especialidades.
  - `<EntrenadoresInicio />`: Tarjetas con entrenadores.
  - `<Header />`: Sección hero de la página principal.
- **Ventajas**:
  - Modularidad y mantenibilidad.
  - Reutilización y consistencia visual.

---

## 🧭 Sistema de Enrutamiento (React Router DOM v6)

Las rutas se definen en `App.jsx`:

```jsx
<Route path="/" element={<Navigate to="/inicio" />} />
<Route path="/inicio" element={<Inicio />} />
<Route path="/entrenadores" element={<Entrenadores />} />
<Route path="/entrenadores/:especialidad" element={<Entrenadores />} />
<Route path="/reservas/:entId" element={<Reservas />} />
<Route path="/inicioSesion" element={<InicioSesion />} />
<Route path="/mi-perfil" element={<MiPerfil />} />
<Route path="/mis-reservas" element={<MisReservas />} />
<Route path="/sobre-nosotros" element={<SobreNosotros />} />
```

### ✨ Características

- Redirección de `/` a `/inicio`.
- Uso de rutas dinámicas (`:especialidad`, `:entId`).
- Navegación fluida entre páginas.

---

## 🖼️ Gestión de Assets (Imágenes, Íconos, Videos)

- **Centralización**: Todos los archivos están en `src/assets/` y se exportan desde `assets.js`.
- **Tipos de recursos**:
  - Fotos de entrenadores (`trainer1.png`, `trainer2.png`, …).
  - Íconos de objetivos (`strength_icon.png`, `cardio_icon.png`, …).
  - Imágenes globales (`logo.png`, `perfil-men.jpg`, `elipse_fondo.png`).
  - Videos (`hombre-inicio-sesion.mp4`, `personas-registro-video.mp4`).
- **Beneficio**:
  - Facilita la actualización sin romper rutas en los componentes.

---

## ⚙️ Tecnologías y Herramientas

| Categoría        | Tecnología               |
|------------------|--------------------------|
| **Framework**    | React 19                 |
| **Bundler**      | Vite                     |
| **Enrutamiento** | React Router DOM v6      |
| **Estilos**      | Tailwind CSS             |
| **Estado Global**| Context API              |
| **Assets**       | Flaticon, Freepik, Pexels|
| **Futuro Deploy**| Vercel / Netlify         |

---

## 📄 Licencia y Atribuciones

Los recursos visuales se usan bajo licencia de sus respectivos autores:

- **Imágenes**: Pexels, Freepik.  
- **Íconos**: Flaticon.  
