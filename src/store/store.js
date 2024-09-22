import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist-indexeddb-storage";

import loginReducer from "../slices/loginSlice";

const STORAGE_NAME = "trello.app.db";

const persistConfig = {
  key: "root",
  storage: storage(STORAGE_NAME),
  blacklist: [],
};

const rootReducer = combineReducers({
  login: loginReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
  devTools: process.env.NODE_ENV !== "production",
});

export const clearDatabase = () => {
  storage(STORAGE_NAME).removeItem("persist:app");
};

export const persistor = persistStore(store);
