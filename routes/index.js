var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.post('/', async function (req, res, next) {
  const estudiantes = req.body;
  console.log(estudiantes);

  let valuesToInsert = '';
  estudiantes.forEach((estudiante, index) => {
    valuesToInsert += `('${estudiante.nombre}', '${estudiante.apellido}', '${estudiante.email}', '${estudiante.telefono}', ${estudiante.monto}, '${estudiante.producto}')${index === estudiantes.length - 1 ? ';' : ', '}`
  });

  await db.query(
    "insert into financiamiento_estudiantil (nombre, apellido, email, telefono, monto, producto) values " + valuesToInsert
  );

  console.log(`${estudiantes.length} nuevos registros añadidos a la base de datos.`);
  res.sendStatus(200)
});

module.exports = router;
