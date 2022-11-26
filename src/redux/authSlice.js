import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { register, logIn, logOut, fetchUser } from './auth-operations';

const extraActions = [register, logIn, fetchUser];
const getActions = type => extraActions.map(action => action[type]);

const logOutSuccessfully = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};
const fetchUseSuccessfully = (state, action) => {
  state.user = action.payload;
  state.isRefreshing = false;
};

const fetchUserPending = state => {
  state.isRefreshing = true;
};
const fetchUserRejected = state => {
  state.isRefreshing = false;
};

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
  error: null,
};

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder =>
    builder
      .addCase(logOut.fulfilled, logOutSuccessfully)
      .addCase(fetchUser.pending, fetchUserPending)
      .addCase(fetchUser.fulfilled, fetchUseSuccessfully)
      .addCase(fetchUser.rejected, fetchUserRejected)
      .addMatcher(isAnyOf(...getActions('rejected')), (state, action) => {
        state.error = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), state => {
        state.isLoggedIn = true;
        state.error = null;
      })
      .addMatcher(
        isAnyOf(register.fulfilled, logIn.fulfilled),
        (state, action) => {
          state.user = action.payload.user;
          state.token = action.payload.token;
        }
      ),
});

export const authReducer = persistReducer(persistConfig, authSlice.reducer);
