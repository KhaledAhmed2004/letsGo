import { baseApi } from "../../api/baseApi";

const packageApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllPackge: builder.query({
      query: (params) => {
        return {
          url: "/package",
          method: "GET",
          params,
        };
      },
      providesTags: ["packge"],
    }),
  }),
});

export const { useGetAllPackgeQuery } = packageApi;
