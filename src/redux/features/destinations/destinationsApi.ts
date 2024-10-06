import { baseApi } from "../../api/baseApi";

const destinationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllDestinations: builder.query({
      query: (params) => {
        return {
          url: "/destinations",
          method: "GET",
          params,
        };
      },
      providesTags: ["destinations"],
    }),
  }),
});

export const { useGetAllDestinationsQuery } = destinationsApi;
