import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { WebSocketTradeResponseType } from "../../types/types";

interface GetWebSocketTradeResponseType {
  storeWebSocketTradeResponse: WebSocketTradeResponseType,
  index: number
}

interface GetInitialPriceType {
  storeInitialPrice: number
  index: number
}

interface InitialPricesType {
  price: number
}

interface CryptoInfoType {
  webSocketTradeResponse: WebSocketTradeResponseType[],
  initialPrice: InitialPricesType[]
}

const initialState: CryptoInfoType = {
  webSocketTradeResponse: [],
  initialPrice: []
}

const cryptoInfoSlice = createSlice({
  name: "cryptoInfo",
  initialState,
  reducers: {
    getWebSocketTradeResponse: (state, action: PayloadAction<GetWebSocketTradeResponseType>) => {
      const { storeWebSocketTradeResponse, index } = action.payload
      state.webSocketTradeResponse[index] = storeWebSocketTradeResponse;
    },
    getInitialPrice: (state, action: PayloadAction<GetInitialPriceType>) => {
      const { storeInitialPrice, index } = action.payload
      state.initialPrice[index] = { price: storeInitialPrice };
    }
  }
})

export const { getWebSocketTradeResponse, getInitialPrice } = cryptoInfoSlice.actions;

export default cryptoInfoSlice.reducer;
