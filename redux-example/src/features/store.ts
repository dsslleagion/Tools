import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import exemploSlice from "./slice";

export const store = configureStore({
    reducer: exemploSlice
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;