import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  userName: null,
  token: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setUserCredentials: (state, { payload }) => {
      state.userName = payload.data.user.name;
      state.token = payload.data.token;
      state.isLoggedIn = true;
    },
    userLogout: state => {
      state.userName = null;
      state.token = null;
      state.isLoggedIn = false;
      state.isFetchCurrentUser = false;
    },
    fetchCurrentUser: (state, { payload }) => {
      state.userName = payload.name;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = true;
    },
  },
});

export const { setUserCredentials, fetchCurrentUser, userLogout } = userSlice.actions;
export const userReducer = userSlice.reducer;

export const getUserName = state => state.user.userName;
export const getToken = state => state.user.token;
export const getIsLoggedIn = state => state.user.isLoggedIn;
export const getIsFetchCurrentUser = state => state.user.isFetchCurrentUser;
