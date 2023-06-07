import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slice/userSlice'
import {
  persistStore, persistReducer, FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const persistConfig = {
  key: 'minhvn',
  storage,
  whitelist: ['account', 'isAuthenticated'],
}

const persistedReducer = persistReducer(persistConfig, userReducer)

const store = configureStore({
  reducer: {
    userReducer: persistedReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)

export default store
