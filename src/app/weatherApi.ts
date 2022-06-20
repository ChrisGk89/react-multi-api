import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { nasaApi } from "./nasaApi";

export const weatherApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/2.5/weather`,
  }),
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query<any, any>({
      query: (cityName) =>
        `?q=${cityName}&appid=99388b4fd990fd03aaba81b333f2e50e`,
    }),
  }),
});

export const { useGetWeatherByCityNameQuery } = weatherApi;
