const autoPartes = [];
let nextID = 1;
module.exports = {
    createPart: (req, res) => {
        const { name, refNumber, price, disponibility,isBestSeller } = req.body;
        const part = {
            id: nextID++,
            name,
            refNumber,
            price,
            disponibility,
            isBestSeller
        };
        autoPartes.push(part);
        res.json({ message: "AutoParte registrada correctamente", part });
    },
    
    getAllAutoParts: (req, res) => {
        res.json(autoPartes);
    },

    getStorage : (req, res) => {
        const storageInfo = autoPartes.map(part => ({
            name: part.name,
            disponibility: part.disponibility
        }));
        res.json(storageInfo);
    },

    getFavorites: (req, res) => {
        const bestSellers = autoPartes.filter(part => part.isBestSeller);
        res.json(bestSellers);    
    },

    getAutoPartByID: (req, res) => {
        const id = parseInt(req.params.id);
        const autoparte = autoPartes.find(a => a.id === id);
        if (autoparte) {
            res.json(autoparte);
        } else {
            res.status(404).json({ message: 'Auto Parte no encontrada'});
        }
    },

    updateAutoPart: (req, res) => {
        const id = parseInt(req.params.id);
        const { name, refNumber, price, disponibility } = req.body;
        const autoparte = autoPartes.find(a => a.id === id);
        if (autoparte) {
            autoparte.name = name;
            autoparte.refNumber = refNumber;
            autoparte.price = price;
            autoparte.disponibility = disponibility;
            res.json({ message: 'Auto-Parte actualizada exitosamente', autoparte });
        } else {
            res.status(404).json({ message: 'Auto-Parte no encontrada' });
        }
    },

    deleteAutoPart: (req, res) => {
        const id = parseInt(req.params.id);
        const index = autoPartes.findIndex(a => a.id === id);
        if (index !== -1) {
            autoPartes.splice(index, 1);
            res.json({ message: 'Auto-Parte eliminada correctamente' });
        } else {
            res.status(404).json( { message: 'Auto-Parte no encontrado'});
        }
    },
  
}
