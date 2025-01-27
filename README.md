
# Landing Page Earphones

📱 **Landing Page de Auriculares**, construida con **React**, **Vite** y **Three.js**. Esta página está diseñada para ofrecer una experiencia visual interactiva, mostrando modelos 3D y animaciones.
   🌐 [Prueba la Landing Page aquí](https://brayanreynoso.github.io/landing-page-earphones/)
## Características

- 🌐 **Interactividad 3D**: Utiliza [Three.js](https://threejs.org/) y [React-Three/Fiber](https://github.com/utsuboco/react-three-fiber) para renderizar modelos 3D de auriculares y ofrecer una experiencia inmersiva.
- 🎬 **Animaciones**: Implementa animaciones fluidas con [GSAP](https://greensock.com/gsap/).
- ⚛️ **Desarrollada con React**: La página está construida con React.js para facilitar el desarrollo de componentes reutilizables y escalables.

## Estructura del Proyecto

```
landing-page-earphones/
├── public/                     # Archivos públicos (imágenes, modelos 3D, etc.)
│   └── models/                 # Modelos 3D como GLB, HDR, etc.
├── src/                        # Código fuente de la aplicación
│   ├── assets/                 # Recursos como imágenes y otros archivos estáticos
│   ├── components/             # Componentes reutilizables de React
│   ├── App.js                  # Componente principal de la aplicación
│   └── index.js                # Punto de entrada de la aplicación
├── .gitignore                  # Archivos y carpetas ignoradas por Git
├── package.json                # Dependencias y scripts de la aplicación
├── README.md                   # Este archivo
├── vite.config.js              # Configuración de Vite
└── index.html                  # Archivo HTML principal
```

## Instalación

1. 🔽 Clona el repositorio:

   ```bash
   git clone https://github.com/BrayanReynoso/landing-page-earphones.git
   cd landing-page-earphones
   ```

2. 📦 Instala las dependencias con npm o yarn:

   ```bash
   npm install
   ```

   o si prefieres usar yarn:

   ```bash
   yarn install
   ```

3. 🚀 Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   o con yarn:

   ```bash
   yarn dev
   ```

   La aplicación estará disponible en [http://localhost:3000](http://localhost:3000).

## Construcción

🔨 Para generar los archivos estáticos de producción, usa el siguiente comando:

```bash
npm run build
```

## Dependencias

Este proyecto utiliza las siguientes bibliotecas:

- ⚛️ [React](https://reactjs.org/) - Biblioteca para construir interfaces de usuario.
- ⚡ [Vite](https://vitejs.dev/) - Herramienta de construcción rápida para proyectos de frontend.
- 🌀 [GSAP](https://greensock.com/gsap/) - Biblioteca de animación de alto rendimiento.
- 🌍 [React-Three/Fiber](https://github.com/utsuboco/react-three-fiber) - Implementación de Three.js para React.
- 🛠️ [React-Three/Drei](https://github.com/utsuboco/react-three-drei) - Conjunto de utilidades para mejorar el desarrollo con Three.js en React.

## Contribuciones

💡 Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Forkea el repositorio.
2. Crea una nueva rama (`git checkout -b mi-rama`).
3. Realiza tus cambios y haz un commit (`git commit -am 'Agregué nuevas características'`).
4. Haz un push de tu rama (`git push origin mi-rama`).
5. Abre un Pull Request.
