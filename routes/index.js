var express = require('express');
var router = express.Router();
const db = require('../db');

/* GET home page. */
router.post('/', async function (req, res, next) {
  const estudiantes = req.body;

  let valuesToInsert = '';
  estudiantes.forEach((estudiante, index) => {
    valuesToInsert += `('${estudiante.nombre}', '${estudiante.apellido}', '${estudiante.email}', '${estudiante.telefono}', ${estudiante.monto}, '${estudiante.producto}')${index === estudiantes.length - 1 ? ';' : ', '}`
  });

  const query = await db.query(
    "insert into financiamiento_estudiantil (nombre, apellido, email, telefono, monto, producto) values " + valuesToInsert
  );

  console.log(query);
  res.sendStatus(200)
});

module.exports = router;
