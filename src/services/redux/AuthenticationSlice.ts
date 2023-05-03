import { BASE_URL } from "../../shared/constants/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

type User = {
  email: string;
  password: string;
};

type AuthState = {
  user: User | null;
  token: string | null;
  loading: boolean;
  error: string | null;
  isAuthenticated: boolean | any;
  isRegistered: boolean;
};

const initialState: AuthState = {
  user: null,
  token: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  isRegistered: false,
};

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  email: string;
  password: string;
}

export const loginAction = createAsyncThunk<User, LoginPayload>(
  "auth/login",
  async ({ email, password }) => {
    const res = await axios.post(`${BASE_URL}/v1/auth/login`, {
      email,
      password,
    });
    return res.data;
  },
);

export const registerAction = createAsyncThunk<User, RegisterPayload>(
  "auth/register",
  async ({ email, password }) => {
    const res = await axios.post(`${BASE_URL}/auth/register`, {
      email,
      password,
    });
    return res.data;
  },
);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An unknown error occurred.";
      })
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.isRegistered = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An unknown error occurred.";
      });
  },
});

export const selectUser = (state: { auth: AuthState }) => state.auth.user;
export const selectIsAuthenticated = (state: { auth: AuthState }) =>
  state.auth.isAuthenticated;
export const selectIsRegistered = (state: { auth: AuthState }) =>
  state.auth.isRegistered;
export const selectLoading = (state: { auth: AuthState }) => state.auth.loading;
export const selectError = (state: { auth: AuthState }) => state.auth.error;

export const { Logout } = authSlice.actions;

export default authSlice.reducer;
