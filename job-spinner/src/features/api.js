import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://joblisting-3hjv.onrender.com/api/jobs",
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
    postJob: builder.mutation({
      query: (job) => ({
        url: "",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: job,
      }),
    }),
  }),
});

export const { useGetJobsQuery, useGetJobDetailQuery, usePostJobMutation } =
  jobApi;
export default jobApi;

// https://images.app.goo.gl/wMV6PwUXZLbuuchB8
