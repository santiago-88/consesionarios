const express = require('express')
const router = express.Router();

const marcasController = require('../controller/marcasController');
const { route } = require('./autos');

router.get('/',marcasController.listarMarcas)

router.get('/:marca',marcasController.listarAuto)

module.exports = router;