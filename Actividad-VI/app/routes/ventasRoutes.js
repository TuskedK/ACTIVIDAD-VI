const express = require ('express');
const router2 = express.Router();
const ventaController = require ('../controllers/ventasController');


//Crear ficha de estdiante
router2.post('/ventas', ventaController.createSale);

//Mostrar todas las autopartes
router2.get('/ventas', ventaController.getAllSales);

//Mostrar la autoparte por ID
router2.get('/ventas/:id', ventaController.getSaleById);

//Actualizar la autoparte
router2.put('/ventas/:id', ventaController.updateSale);

//Actualizar la autoparte
router2.delete('/ventas/:id', ventaController.deleteSale);

module.exports = router2;
