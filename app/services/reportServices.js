// app/services/reportService.js
const Excel = require('excel4node');

function generateReport(user) {
  const workbook = new Excel.Workbook();
  
  // Hoja de reporte de usuario
  const userWorksheet = workbook.addWorksheet('Reporte de Usuario');
  writeUserInfo(workbook, userWorksheet, user);

  // Agregar una nueva hoja
  const nuevaHoja = workbook.addWorksheet('Nueva Hoja');
  writeUserInfo(workbook, nuevaHoja, user);

//   nuevaHoja.cell(1, 1).string('Esta es una nueva hoja');

  const fileName = `report_${user.name}.xlsx`;
  workbook.write(fileName);

  return fileName;
}

// Función para escribir la información del usuario en la hoja
function writeUserInfo(workbook, worksheet, user) {
  const titleStyle = workbook.createStyle({
    font: { bold: true, size: 14 }
  });
  const bannerStyle = workbook.createStyle({
    font: { bold: true, size: 18 }
  });

  worksheet.cell(1, 1).string('Mi Aplicación').style(bannerStyle);
  worksheet.cell(3, 1).string('Reporte de Usuario').style(titleStyle);

  const currentDate = new Date().toLocaleDateString();
  worksheet.cell(5, 1).string(`Fecha: ${currentDate}`);

  worksheet.cell(7, 1).string('Nombre');
  worksheet.cell(7, 2).string('Apellido');
  worksheet.cell(7, 3).string('Email');
  worksheet.cell(7, 4).string('Teléfono');
  worksheet.cell(7, 5).string('Dirección');

  worksheet.cell(8, 1).string(user.name);
  worksheet.cell(8, 2).string(user.lastName);
  worksheet.cell(8, 3).string(user.email);
  worksheet.cell(8, 4).string(user.cell);
  worksheet.cell(8, 5).string(user.address);
}

module.exports = generateReport;
