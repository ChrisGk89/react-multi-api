import React, { useState, useId, useRef } from 'react';
import Button from '@mui/material/Button';

import styles from '../App.module.css';

import Weather2 from './Weather2';
import { useGetWeatherByCityNameQuery } from '../app/weatherApi';

const WeatherContainer = () => {
  const id = useId();
  const [input, setInput] = useState('Athens'); // '' is the initial state value
  const inputRef = useRef<any>(null);
  const { data, isFetching, isLoading } = useGetWeatherByCityNameQuery(input);

  return (
    <div className={styles.weather}>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          setInput(inputRef?.current?.value);
        }}
      >
        <input
          className="weather-input"
          placeholder="Enter the city you want"
          id={id}
          ref={inputRef}
        />
        <Button
          className="btn"
          variant="contained"
          type="submit"
          onClick={(e: any) => {
            setInput(e.target.value);
          }}
        >
          Check Weather
        </Button>
      </form>

      {!isFetching && !isLoading && (
        <Weather2
          isLoading={isLoading}
          isFetching={isFetching}
          name={data.name}
          description={data.weather[0]?.description}
          temp={data.main.temp}
        />
      )}
    </div>
  );
};

export default WeatherContainer;
