import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com/',
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token;

      if (token) {
        headers.set('Authorization', `Bearer ${token}`);
      }

      return headers;
    },
  }),
  tagTypes: ['Auth'],

  endpoints: build => ({
    userSignUp: build.mutation({
      query: userData => ({
        url: '/users/signup',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    userSignIn: build.mutation({
      query: userData => ({
        url: '/users/login',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['Auth'],
    }),
    userLogout: build.mutation({
      query: () => ({
        url: '/users/logout',
        method: 'POST',
      }),
      invalidatesTags: ['Auth'],
    }),
    fetchCurrentUser: build.query({
      query: () => ({
        url: '/users/current',
        method: 'GET',
      }),
      invalidatesTags: ['Auth'],
    }),
  }),
});

export const {
  useUserSignUpMutation,
  useUserSignInMutation,
  useUserLogoutMutation,
  useFetchCurrentUserQuery,
} = authApi;
