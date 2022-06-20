import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// initialize an empty api service that we'll inject endpoints into later as needed
export const httpApi = createApi({
  reducerPath: "httpAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "" }),
  endpoints: () => ({}),
});
