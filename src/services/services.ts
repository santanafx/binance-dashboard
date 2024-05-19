import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface TickerInformationType {
  symbol: string,
  priceChange: string,
  priceChangePercent: string,
  weightedAvgPrice: string,
  prevClosePrice: string,
  lastPrice: string,
  lastQty: string,
  bidPrice: string,
  bidQty: string,
  askPrice: string,
  askQty: string,
  openPrice: string,
  highPrice: string,
  lowPrice: string,
  volume: string,
  quoteVolume: string,
  openTime: number,
  closeTime: number,
  firstId: number,
  lastId: number,
  count: number
}

const binanceApi = createApi({
  reducerPath: 'binanceApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.binance.com/'
  }),
  endpoints: (builder) => ({
    getTickerInformation: builder.query<TickerInformationType, unknown>({
      query: (symbol) => `api/v3/ticker/24hr?symbol=${symbol}`,
    }),
    getExchangeInfo: builder.query<unknown, void>({
      query: () => "/api/v3/exchangeInfo",
    })
  })
})

export const {
  useGetTickerInformationQuery, useLazyGetTickerInformationQuery, useGetExchangeInfoQuery
} = binanceApi

export default binanceApi
