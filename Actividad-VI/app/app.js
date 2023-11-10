const express = require('express');
const app = express();
const autoPartesRoutes = require('./routes/autoPartesRoute');
const ventaRoutes = require('./routes/ventasRoutes');
const customerRoutes = require('./routes/clienteRoutes');

app.use(express.json());

app.use('/api', autoPartesRoutes);
app.use('/api', ventaRoutes);
app.use('/api', customerRoutes);

const PORT = 3001;
//create server and listen to port
app.listen(PORT, ( ) => {
    console.log(`Server is running on ${PORT}`);
});
