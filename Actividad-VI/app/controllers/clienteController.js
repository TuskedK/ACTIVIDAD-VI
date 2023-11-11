const Clientes = [];
let nextID = 1;
module.exports = {
    CreateCustomer: (req, res) => {
        const { name, age, telefono, ciudad  } = req.body;
        const cliente = { id: nextID++, name, age, ciudad };
        Clientes.push(cliente);
        res.json({ message: "cliente creado exitosamente", cliente });
    },
    
    getAllCustomers: (req, res) => {
        res.json(Clientes);
    },
    
    getCustomerById: (req, res) => {
        const id = parseInt(req.params.id);
        const cliente = Clientes.find(c => c.id === id);
        if (cliente) {
            res.json(cliente);
        } else {
            res.status(404).json({ message: 'Cliente no encontrado'});
        }
    },
//Valdivieso Reyes Sandra Denisse
    updateCustomer: (req, res) => {
        const id = parseInt(req.params.id);
        const { name, age, telefono, ciudad  } = req.body;
        const cliente = Clientes.find(c => c.id === id);
        if (cliente) {
            cliente.name = name;
            cliente.age = age;
            cliente.telefono = telefono;
            cliente.ciudad = ciudad;
            res.json({ message: 'Cliente actualizado exitosamente', cliente });
        } else {
            res.status(404).json({ message: 'Cliente no encontrado' });
        }
    },

    deleteCustomer: (req, res) => {
        const id = parseInt(req.params.id);
        const index = Clientes.findIndex(c => c.id === id);
        if (index !== -1) {
            Clientes.splice(index, 1);
            res.json({ message: 'Cliente eliminado correctamente' });
        } else {
            res.status(404).json( { message: 'Cliente no encontrada'});
        }
    }
}
