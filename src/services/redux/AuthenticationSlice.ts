import { BASE_URL } from "../../shared/constants/index";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosResponse } from "axios";

type User = {
  email: string;
  password: string;
};

type Tokens = {
  access: {
    expires: string;
    token: string;
  };
  refresh: {
    expires: string;
    token: string;
  };
};

type LoginResponse = {
  user: User;
  tokens: Tokens;
};

type RegisterResponse = {
  user: User;
};

type AuthState = {
  user: User | null;
  accessToken: string | null;
  refreshToken: string | null;
  loading: boolean;
  error: any;
  isAuthenticated: boolean;
  isRegistered: boolean;
};

const initialState: AuthState = {
  user: null,
  accessToken: null,
  refreshToken: null,
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

type ErrorResponse = {
  message: string;
};

export const loginAction = createAsyncThunk<
  LoginResponse,
  LoginPayload,
  { rejectValue: ErrorResponse }
>("auth/login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<LoginResponse> = await axios.post(
      `${BASE_URL}/v1/auth/login`,
      {
        email,
        password,
      },
    );
    console.log("Inside login action");
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
>("auth/register", async ({ email, password }, { rejectWithValue }) => {
  try {
    const response: AxiosResponse<RegisterResponse> = await axios.post(
      `${BASE_URL}/auth/register`,
      {
        email,
        password,
      },
    );
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
      state.user = null;
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
      })
      .addCase(loginAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action?.payload?.message ?? "An unknown error occurred.";
      })
      .addCase(registerAction.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerAction.fulfilled, (state) => {
        state.loading = false;
        // state.user = action.payload;
        state.isRegistered = true;
      })
      .addCase(registerAction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message ?? "An unknown error occurred.";
      });
  },
});

export const selectUser = (state: { Auth: AuthState }) => state.Auth.user;
export const selectIsAuthenticated = (state: { Auth: AuthState }) =>
  state.Auth.isAuthenticated;
export const selectIsRegistered = (state: { Auth: AuthState }) =>
  state.Auth.isRegistered;
export const selectLoading = (state: { Auth: AuthState }) => state.Auth.loading;
export const selectError = (state: { Auth: AuthState }) => state.Auth.error;

export const { Logout } = authSlice.actions;

export default authSlice.reducer;