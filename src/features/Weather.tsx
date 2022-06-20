import React from 'react';
import { useGetWeatherByCityNameQuery } from '../app/weatherApi';

const Weather = () => {
  const { data, isFetching, isLoading } =
    useGetWeatherByCityNameQuery('Athens');
  return (
    <div className="tr">
      <h1>Weather</h1>
      {!isFetching && !isLoading && (
        <>
          <h2>{`City: ` + data?.name}</h2>
          <h3>{data.weather[0]?.description}</h3>
          <h3>{`Average temperature: ` + Math.floor(data.main.temp)}</h3>
        </>
      )}
    </div>
  );
};

export default Weather;
