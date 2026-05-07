README.md para MI proyecto API‑Tareas
Descripción
  API‑Tareas es una API REST construida con Node.js, Express y MongoDB que permite gestionar tareas mediante operaciones CRUD.
  El objetivo del proyecto es ofrecer un backend sencillo, modular y escalable para aplicaciones que necesiten gestionar listas de tareas.

Tecnologías utilizadas
  Node.js
  Express
  MongoDB / Mongoose
  JavaScript
  Yarn

Estructura del proyecto
api-tareas/
│
├── controllers/      # Lógica de control
├── models/           # Modelos de datos (Mongoose)
├── routes/           # Rutas de la API
├── app.js            # Configuración de Express
├── index.js          # Punto de entrada del servidor
├── package.json
└── yarn.lock

Endpoints principales
   Obtener todas las tareas
    GET /tareas
   Obtener una tarea por ID
    GET /tareas/:id
   Crear una nueva tarea
    POST /tareas
   Actualizar una tarea
    PUT /tareas/:id
   Eliminar una tarea
    DELETE /tareas/:id


Instalación y ejecución

1️ Clonar el repositorio
  git clone https://github.com/lalitofl/api-tareas
  cd api-tareas
  
2️ Instalar dependencias
  yarn install

3️ Configurar variables de entorno
  Crea un archivo .env con tu cadena de conexión a MongoDB:

  MONGO_URI=mongodb+srv://...
  PORT=3000
  
4️ Ejecutar el servidor
  yarn start
   
Puedes probar la API enviando peticiones a:
  http://localhost:3000/tareas

 AUTOR
  Lalo 
  Desarrolladora Web Junior
  GitHub: https://github.com/lalitofl
