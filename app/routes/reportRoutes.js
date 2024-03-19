// app/routes/reportRoutes.js
const express = require('express');
const router = express.Router();
const generateReport = require('../services/reportServices');
const User = require('../models/user');

// Ruta para generar el reporte
router.get('/report', (req, res) => {
    console.log('ija ij');
  // Crear un usuario de ejemplo (puedes obtenerlo desde la base de datos en una aplicación real)
  const user = new User('Usuario Ejemplo','ssss','aaa@asdf.com','123123213', 'asdfsdf asdf sadf');
  console.log(user);

  // Generar el reporte
  const reportFileName = generateReport(user);

  // Descargar el archivo
  res.download(reportFileName, (err) => {
    if (err) {
      res.status(500).send('Error al descargar el archivo');
    } else {
      // Eliminar el archivo después de descargarlo
      // Esto es opcional, dependiendo de los requisitos de tu aplicación
      // fs.unlink(reportFileName, (err) => {
      //   if (err) console.log(err);
      // });
    }
  });
});

module.exports = router;