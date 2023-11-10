const ventas = [];
let nextID = 1;
module.exports = {
    createSale: (req, res) => {
        const { cliente, autopartesVendidas, monto  } = req.body;
        const venta = { id: nextID++, cliente, autopartesVendidas, monto };
        ventas.push(venta);
        res.json({ message: "Venta realizada exitosamente", venta });
    },
    
    getAllSales: (req, res) => {
        res.json(ventas);
    },

    getSaleById: (req, res) => {
        const id = parseInt(req.params.id);
        const venta = ventas.find(v => v.id === id);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json({ message: 'Venta no encontrada'});
        }
    },

    updateSale: (req, res) => {
        const id = parseInt(req.params.id);
        const { cliente, autopartesVendidas, monto } = req.body;
        const venta = ventas.find(v => v.id === id);
        if (venta) {
            venta.cliente = cliente;
            venta.autopartesVendidas = autopartesVendidas;
            venta.monto = monto;
            res.json({ message: 'Venta actualizada exitosamente', venta });
        } else {
            res.status(404).json({ message: 'Venta no encontrada' });
        }
    },

    deleteSale: (req, res) => {
        const id = parseInt(req.params.id);
        const index = ventas.findIndex(v => v.id === id);
        if (index !== -1) {
            ventas.splice(index, 1);
            res.json({ message: 'Venta eliminada correctamente' });
        } else {
            res.status(404).json( { message: 'Venta no encontrada'});
        }
    }
}
