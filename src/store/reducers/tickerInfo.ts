import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TickerInfoType {
  symbol: string
  selectedTickerInfo: SelectedTickerInfoType
  isLoading: boolean | null
}

interface SelectedTickerInfoType {
  askPrice: string
  askQty: string
  bidPrice: string
  bidQty: string
  closeTime: number
  count: number
  firstId: number
  highPrice: string
  lastId: number
  lastPrice: string
  lastQty: string
  lowPrice: string
  openPrice: string
  openTime: number
  prevClosePrice: string
  priceChange: string
  priceChangePercent: string
  quoteVolume: string
  symbol: string
  volume: string
  weightedAvgPrice: string
}

const initialState: TickerInfoType = {
  symbol: "",
  selectedTickerInfo: {
    askPrice: "",
    askQty: "",
    bidPrice: "",
    bidQty: "",
    closeTime: 0,
    count: 0,
    firstId: 0,
    highPrice: "",
    lastId: 0,
    lastPrice: "",
    lastQty: "",
    lowPrice: "",
    openPrice: "",
    openTime: 0,
    prevClosePrice: "",
    priceChange: "",
    priceChangePercent: "",
    quoteVolume: "",
    symbol: "",
    volume: "",
    weightedAvgPrice: ""
  },
  isLoading: null
}

const tickerInfoSlice = createSlice({
  name: "tickerInfo",
  initialState,
  reducers: {
    getSymbol: (state, action: PayloadAction<string>) => {
      state.symbol = action.payload;
    },
    getTickerInfo: (state, action: PayloadAction<SelectedTickerInfoType>) => {
      state.selectedTickerInfo = action.payload;
    },
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const { getSymbol, getTickerInfo, isLoading } = tickerInfoSlice.actions;

export default tickerInfoSlice.reducer;
