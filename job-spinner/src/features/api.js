import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joblisting-rd8f.onrender.com/api/jobs",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ page, limit, search = "", company = "" }) => {
        const queryParams = new URLSearchParams({
          page,
          limit,
          search,
          company,
        }).toString();
        return `?${queryParams}`;
      },
    }),
    getJobDetail: builder.query({
      query: (id) => `/${id}`,
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailQuery } = jobApi;
export default jobApi;
