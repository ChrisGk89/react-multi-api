import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const nasaApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.nasa.gov/planetary/apod`,
  }),
  endpoints: (builder) => ({
    getApodByDate: builder.query<any, any>({
      query: (date) =>
        `?api_key=FkzMiOMDEIyNco5RxdlUbkgfgAzZmeaPHioJxlyh&date=${date}`,
    }),
  }),
});

export const { useGetApodByDateQuery } = nasaApi;