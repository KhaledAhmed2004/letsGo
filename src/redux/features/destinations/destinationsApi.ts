import { baseApi } from "../../api/baseApi";

const destinationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDestinations: builder.query({
      query: () => ({
        url: "/destinations",
        method: "GET",
      }),
      providesTags: ["destinations"],
    }),
  }),
});

export const { useGetAllDestinationsQuery } = destinationsApi;
