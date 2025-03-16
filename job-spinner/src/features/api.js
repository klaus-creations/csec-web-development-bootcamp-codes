import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const jobApi = createApi({
  reducerPath: "jobApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  endpoints: (builder) => ({
    getJobs: builder.query({
      query: ({ page, limit, query = "", company = "" }) => {
        const queryParams = new URLSearchParams({
          page,
          limit,
          query,
          company,
        }).toString();
        return `/jobs?${queryParams}`;
      },
    }),
    getJobDetail: builder.query({
      query: (id) => `/jobs/${id}`,
    }),
    postJob: builder.mutation({
      query: (job) => ({
        url: "/jobs/new",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: job,
      }),
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    loginUser: builder.mutation({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: data,
      }),
    }),
    isAuthenticated: builder.query({
      query: (token) => ({
        url: "/auth/is-auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
    isAdmin: builder.query({
      query: (token) => ({
        url: "/auth/is-auth",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
});

export const {
  useGetJobsQuery,
  useGetJobDetailQuery,
  usePostJobMutation,
  useCreateUserMutation,
  useLoginUserMutation,
  useIsAuthenticatedQuery,
  useIsAdminQuery,
} = jobApi;
export default jobApi;

// https://images.app.goo.gl/wMV6PwUXZLbuuchB8
