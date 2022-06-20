import React from "react";
import { useGetWeatherByCityNameQuery } from "../app/weatherApi";

const Weather = () => {
  const { data, isFetching, isLoading } =
    useGetWeatherByCityNameQuery("Athens");
  console.log(data);
  return (
    <div>
      <h1>Weather</h1>
      {!isFetching && !isLoading && <></>}
    </div>
  );
};

export default Weather;
