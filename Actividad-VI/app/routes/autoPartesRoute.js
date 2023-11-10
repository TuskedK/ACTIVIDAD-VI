const express = require ('express');
const router = express.Router();
const autoPartesController = require ('../controllers/autoPartesController');


//Crear ficha de estdiante
router.post('/autoPartes', autoPartesController.createPart);

//Mostrar todas las autopartes
router.get('/autoPartes', autoPartesController.getAllAutoParts);

//Mostrar todas las autopartes
router.get('/inventario', autoPartesController.getStorage);

//Mostrar todas las autopartes
router.get('/autoPartes/populares', autoPartesController.getFavorites);

//Mostrar la autoparte por ID
router.get('/autoPartes/:id', autoPartesController.getAutoPartByID);

//Actualizar la autoparte
router.put('/autoPartes/:id', autoPartesController.updateAutoPart);

//Actualizar la autoparte
router.delete('/autoPartes/:id', autoPartesController.deleteAutoPart);

module.exports = router;
