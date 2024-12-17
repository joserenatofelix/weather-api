const axios = require('axios');

// Função para buscar dados da API externa
const fetchWeatherData = async (city) => {
    try {
        const apiKey = process.env.WEATHER_API_KEY;
        const baseUrl = process.env.WEATHER_API_URL;
        const response = await axios.get(`${baseUrl}?q=${city}&appid=${apiKey}&units=metric`);
        
        // Extrair informações relevantes
        const { main, weather, wind } = response.data;
        return {
            temperature: main.temp,
            description: weather[0].description,
            humidity: main.humidity,
            windSpeed: wind.speed,
        };
    } catch (error) {
        throw new Error('Erro ao buscar dados da API externa.');
    }
};

module.exports = { fetchWeatherData };
