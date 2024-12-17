// Middleware para tratamento de erros
const errorHandler = (err, req, res, next) => {
    console.error(err.message);
    res.status(500).json({ error: err.message || 'Erro interno do servidor.' });
};

module.exports = { errorHandler };
