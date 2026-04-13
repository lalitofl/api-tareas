require("dotenv").config();

const mongoose = require("mongoose");
const app = require("./app");
const port = process.env.PORT || 3000;

const urlMongoDb = process.env.MONGODB_URI; // 👈 CLAVE en Render para el despliegue

async function startServer() {
  try {
    await mongoose.connect(urlMongoDb);
    console.log("La conexión a la base de datos es correcta");

    app.listen(port, () => {
      console.log(`Servidor de API REST funcionando en http://localhost:${port}`);
    });
  } catch (error) {
    console.error("Error conectando a MongoDB:", error);
  }
}


startServer();
