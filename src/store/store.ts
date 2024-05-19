import { configureStore } from '@reduxjs/toolkit'
import cryptoInfoReducer from "./reducers/cryptoInfo"
import tickerInfoReducer from "./reducers/tickerInfo"

import binanceApi from "../services/services"

export const store = configureStore({
  reducer: {
    cryptoInfo: cryptoInfoReducer,
    tickerInfo: tickerInfoReducer,
    [binanceApi.reducerPath]: binanceApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(binanceApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
