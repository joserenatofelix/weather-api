const express = require('express');
const { getWeather } = require('../controllers/weatherController');

const router = express.Router();

// Rota para buscar clima
router.get('/:city', getWeather);

module.exports = router;
