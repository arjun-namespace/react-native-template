import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";

import { MMKVStorage } from "src/store/MMKVStorage";


const persistanceConfiguration = {
  key: "root",
  blacklist: ["navigation"],
  storage: MMKVStorage,
};

export const rootReducer = combineReducers({
    // Place reducers in this section
    // reducerName: reducerComponent,
});

const persistedReducer = persistReducer(persistanceConfiguration, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: true,
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;

