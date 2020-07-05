const express = require('express')
const router = express.Router();

const sucursalesController = require('../controller/sucursalesController')

router.get('/',sucursalesController.listar)

router.get('/:sucursal',sucursalesController.info)

module.exports = router;