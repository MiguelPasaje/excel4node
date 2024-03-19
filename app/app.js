// app/app.js
const express = require('express');
const reportRoutes = require('./routes/reportRoutes');

const app = express();

// Usar las rutas de reportes
app.use('/', reportRoutes);

// Puerto en el que se ejecutará la aplicación
const PORT = process.env.PORT || 3000;

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});
