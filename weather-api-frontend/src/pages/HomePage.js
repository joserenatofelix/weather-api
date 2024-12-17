import React, { useState } from 'react';
import WeatherForm from '../components/WeatherForm';
import WeatherDisplay from '../components/WeatherDisplay';
import Loader from '../components/Loader';
import { fetchWeather } from '../services/weatherApi';
import '../styles/HomePage.css';

function HomePage() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (city) => {
    setLoading(true);
    try {
      const data = await fetchWeather(city);
      setWeatherData(data);
    } catch (error) {
      console.error(error);
    }
    setLoading(false);
  };

  return (
    <div className="home-page">
      <h1>Previsão do Tempo</h1>
      <WeatherForm onSearch={handleSearch} />
      {loading ? <Loader /> : weatherData && <WeatherDisplay weatherData={weatherData} />}
    </div>
  );
}

export default HomePage;
