import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers, Reducer } from "redux";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

import authSlice from "./AuthenticationSlice";

export interface RootState {
  Auth: ReturnType<typeof authSlice>;
}

const reducers: Reducer<RootState> = combineReducers({
  Auth: authSlice,
});

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["Auth"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export default store;
