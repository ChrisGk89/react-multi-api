import { httpApi } from './httpApi';
const baseUrl = 'https://api.openweathermap.org/data/2.5/weather';
const api_key = '99388b4fd990fd03aaba81b333f2e50e';
export const weatherApi = httpApi.injectEndpoints({
  endpoints: (builder) => ({
    getWeatherByCityName: builder.query<any, any>({
      query: (cityName) =>
        `${baseUrl}?q=${cityName}&appid=${api_key}&units=metric`,
    }),
  }),
});

export const { useGetWeatherByCityNameQuery } = weatherApi;
