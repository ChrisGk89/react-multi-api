import React from 'react';

import './Weather.css';

const Weather2 = ({
  name,
  description,
  temp,
  isFetching,
  isLoading,
}: {
  name: string;
  description: string;
  temp: number;
  isFetching: boolean;
  isLoading: boolean;
}) => {
  return (
    <div className="weather-container">
      <h1>Weather</h1>
      {!isFetching && !isLoading && (
        <>
          <h2>{`City: ` + name}</h2>
          <h3>{description}</h3>
          <h3>{`Average temperature: ` + Math.floor(temp)}</h3>
        </>
      )}
    </div>
  );
};

export default Weather2;
