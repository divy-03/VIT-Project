import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api",
  }),
  endpoints: (builder) => ({
    // Register User
    addUser: builder.mutation({
      query: (user) => ({
        url: "/auth/register", // Adjust the endpoint path as needed
        method: "POST",
        body: user,
      }),
    }),

    // Login User
    loginUser: builder.mutation({
      query: (user) => ({
        url: "/auth/login",
        method: "POST",
        body: user,
      }),
    }),

    // LogOut User
    logoutUser: builder.mutation({
      query: () => ({
        url: "/mock/testing",
        method: "GET",
      }),
    }),

    // Forgot Password
    forgotPassword: builder.mutation({
      query: (email) => ({
        url: "/password/forgot",
        method: "POST",
        body: email,
      }),
    }),

    // Get User Details
    getMe: builder.query({
      query: "/me", // Use a string here
    }),
  }),
});

export const {
  useAddUserMutation,
  useLoginUserMutation,
  useGetMeQuery,
  useForgotPasswordMutation,
  useLogoutUserMutation,
} = userApi;
