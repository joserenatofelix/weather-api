import axios from 'axios';

const API_URL = 'http://localhost:3000/api/weather'; // Substitua pelo URL do seu backend

export const fetchWeather = async (city) => {
  try {
    const response = await axios.get(`${API_URL}/${city}`);
    const { temperature, description, humidity, windSpeed } = response.data;

    return {
      temperature,
      description,
      humidity,
      windSpeed,
      weatherType: description.includes('cloud') ? 'Clouds' : description.includes('rain') ? 'Rain' : 'Clear',
    };
  } catch (error) {
    console.error('Erro ao buscar dados do clima:', error);
    throw new Error('Erro ao obter dados do clima');
  }
};
