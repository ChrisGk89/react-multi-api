import { httpApi } from './httpApi';
const baseUrl = 'https://api.nasa.gov/planetary/apod';
const api_key = 'FkzMiOMDEIyNco5RxdlUbkgfgAzZmeaPHioJxlyh';

export const nasaApi = httpApi.injectEndpoints({
  endpoints: (builder) => ({
    getApodByDate: builder.query<any, any>({
      query: (date) => `${baseUrl}?api_key=${api_key}&date=${date}`,
    }),
  }),
});

export const { useGetApodByDateQuery } = nasaApi;
