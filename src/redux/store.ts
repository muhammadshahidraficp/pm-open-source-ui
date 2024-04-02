"use client";
import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from "redux-persist";

const rootReducer = {
  
};

const middleware = (getDefaultMiddleware: any) => getDefaultMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
