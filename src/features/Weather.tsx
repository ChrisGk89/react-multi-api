import React from 'react';
import { useId, useState } from 'react';
import { useGetWeatherByCityNameQuery, weatherApi } from '../app/weatherApi';
import Button from '@mui/material/Button';
import './Weather.css';

const Weather = () => {
  const id = useId();
  const [input, setInput] = useState(''); // '' is the initial state value
  const { data, isFetching, isLoading } =
    useGetWeatherByCityNameQuery('Athens');

  return (
    <div className="weather-container">
      <h1>Weather</h1>
      {!isFetching && !isLoading && (
        <>
          <input
            className="weather-input"
            placeholder="Enter the city you want"
            id={id}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <Button className="btn" variant="contained">
            Check Weather
          </Button>
          <h2>{`City: ` + data?.name}</h2>
          <h3>{data.weather[0]?.description}</h3>
          <h3>{`Average temperature: ` + Math.floor(data.main.temp)}</h3>
        </>
      )}
    </div>
  );
};

export default Weather;
