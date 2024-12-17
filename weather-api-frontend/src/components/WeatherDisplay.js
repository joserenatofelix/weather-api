import React from 'react';
import '../styles/WeatherDisplay.css';
import ventoIcon from '../assets/vento.png';
import chuvaIcon from '../assets/chuva.png';
import umidadeIcon from '../assets/umidade.png';
import localizacaoIcon from '../assets/localizacao.png';
import nubladoIcon from '../assets/nublado.png';
import solIcon from '../assets/sol.png';

function WeatherDisplay({ weatherData }) {
  const { temperature, description, humidity, windSpeed, weatherType } = weatherData;

  let weatherIcon;
  switch (weatherType) {
    case 'Clear':
      weatherIcon = solIcon;
      break;
    case 'Clouds':
      weatherIcon = nubladoIcon;
      break;
    case 'Rain':
      weatherIcon = chuvaIcon;
      break;
    default:
      weatherIcon = solIcon;
  }

  return (
    <div className="weather-display">
      <img src={weatherIcon} alt="Weather Icon" className="weather-icon" />
      <div className="weather-info">
        <p>Temperatura: {temperature}°C</p>
        <p>Clima: {description}</p>
        <div className="weather-details">
          <div className="detail">
            <img src={ventoIcon} alt="Vento" />
            <span>Vento: {windSpeed} km/h</span>
          </div>
          <div className="detail">
            <img src={umidadeIcon} alt="Umidade" />
            <span>Umidade: {humidity}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;
