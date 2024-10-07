import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api",
    baseUrl: "https://tour-gide-server.vercel.app/api",
    credentials: "include",
  }),
  tagTypes: ["packge", "destinations"],
  endpoints: () => ({}),
});
