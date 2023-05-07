import { BASE_URL } from "../../shared/constants/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

type User = {
  email: string;
  name: string;
};

type Tokens = {
  access: { token: string };
  refresh: { token: string };
};

type LoginResponse = {
  user: User;
  tokens: Tokens;
};

type RegisterResponse = {
  user: User;
  tokens: Tokens;
};

interface LoginPayload {
  email: string;
  password: string;
}

interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}

type ErrorResponse = {
  message: string;
};

type AuthState = {
  userName: string;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
  isRegistered: boolean;
};

const initialState: AuthState = {
  userName: "",
  accessToken: null,
  refreshToken: null,
  loading: false,
  error: null,
  isAuthenticated: false,
  isRegistered: false,
};

export const loginAction = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: ErrorResponse }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${BASE_URL}/v1/auth/login`,
      { email, password },
    );
    console.log("res.data", response.data);
    return response.data;
  } catch (error: any) {
    console.log("error", error?.response?.data?.message);
    return rejectWithValue(error?.response?.data);
  }
});

export const registerAction = createAsyncThunk<
  RegisterResponse,
  RegisterPayload,
  { rejectValue: ErrorResponse }
>("auth/register", async ({ name, email, password }, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      `${BASE_URL}/v1/auth/register`,
      {
        name,
        email,
        password,
      },
    );
    console.log("Resonse from register action", response.data);
    return response.data;
  } catch (error: any) {
    return rejectWithValue(error?.response?.data);
  }
});

const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    Logout: (state) => {
      state.userName = "";
      state.accessToken = null;
      state.refreshToken = null;
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
        state.isAuthenticated = true;
        state.accessToken = action.payload.tokens.access.token;
        state.refreshToken = action.payload.tokens.refresh.token;
        state.userName = action.payload.user.name;
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message ?? "An unknown error occurred.";
      })
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAction.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.accessToken = action.payload.tokens.access.token;
        state.refreshToken = action.payload.tokens.refresh.token;
        state.userName = action.payload.user.name;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message ?? "An unknown error occurred.";
      });
  },
});

export const selectIsAuthenticated = (state: { Auth: AuthState }) =>
  state.Auth.isAuthenticated;

export const { Logout } = authSlice.actions;

export default authSlice.reducer;
