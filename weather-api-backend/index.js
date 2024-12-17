const express = require('express');
const dotenv = require('dotenv');
const weatherRoutes = require('./routes/weatherRoutes');
const { errorHandler } = require('./utils/errorHandler');

// Configurações iniciais
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware para JSON
app.use(express.json());

// Rotas
app.use('/api/weather', weatherRoutes);

// Middleware de erro
app.use(errorHandler);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
