const express = require ('express');
const router3 = express.Router();
const customerController = require ('../controllers/clienteController');


//Crear ficha de estdiante
router3.post('/clientes', customerController.CreateCustomer);

//Mostrar todas las autopartes
router3.get('/clientes', customerController.getAllCustomers);

//Mostrar la autoparte por ID
router3.get('/clientes/:id', customerController.getCustomerById);

//Actualizar la autoparte
router3.put('/clientes/:id', customerController.updateCustomer);

//Actualizar la autoparte
router3.delete('/clientes/:id', customerController.deleteCustomer);

module.exports = router3;
