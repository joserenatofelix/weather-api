const { fetchWeatherData } = require('../services/weatherService');

// Controlador para buscar previsão do tempo
const getWeather = async (req, res, next) => {
    try {
        const { city } = req.params;
        const weatherData = await fetchWeatherData(city);
        res.status(200).json(weatherData);
    } catch (error) {
        next(error);
    }
};

module.exports = { getWeather };
