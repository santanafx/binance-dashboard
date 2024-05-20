import { useRef, useState } from "react"
import { MdOutlineArrowDropDown, MdOutlineArrowDropUp } from "react-icons/md"
import Skeleton from "react-loading-skeleton"
import "react-loading-skeleton/dist/skeleton.css"
import { useDispatch, useSelector } from "react-redux"
import useWebSocket from "react-use-websocket"
import { getInitialPrice, getWebSocketTradeResponse } from "../../store/reducers/cryptoInfo"
import { RootState } from "../../store/store"
import { WebSocketTradeResponseType } from "../../types/types"
import style from "./Item.module.css"

interface ItemProps {
  cryptoSymbolText: string
  index: number
}

export default function Item({ cryptoSymbolText, index }: ItemProps) {
  const { lastJsonMessage } = useWebSocket(`wss://stream.binance.com:9443/ws/${cryptoSymbolText}@trade`,
    {
      onOpen: () => console.log("conected"),
      onError: (err) => console.log(err),
      shouldReconnect: () => true,
      reconnectInterval: 3000,
      onMessage: () => {
        if (lastJsonMessage) {
          const message: WebSocketTradeResponseType = lastJsonMessage as WebSocketTradeResponseType;
          dispatch(getWebSocketTradeResponse({ storeWebSocketTradeResponse: message, index }))

          if (!storeInitialPrice) {
            dispatch(getInitialPrice({ storeInitialPrice: Number(message.p), index }))
            setStoreInitialPrice(true)
          }

          setTimeout(() => {
            previousCryptoValue.current = Number(message.p)
          }, 5000);
        }
      }
    }
  )
  const dispatch = useDispatch()
  const socketResponse = useSelector((state: RootState) => state.cryptoInfo.webSocketTradeResponse[index])
  const initialPriceState = useSelector((state: RootState) => state.cryptoInfo.initialPrice[index]?.price);
  const [storeInitialPrice, setStoreInitialPrice] = useState<boolean>(false)
  const previousCryptoValue = useRef<number>(0)

  const colorGreen = '#1bc700'
  const colorRed = '#ff2f00d2'
  const currentPrice = socketResponse?.p ? Number(socketResponse.p).toFixed(2) : undefined;
  const variation = socketResponse?.p && initialPriceState !== null ? (((Number(socketResponse.p) * 100) / initialPriceState) - 100).toFixed(2) : undefined;

  return (
    <div className={style.itemContainer}>
      <h3 className={style.itemContainer__text}>{cryptoSymbolText.toLocaleUpperCase()}</h3>
      <div className={style.itemSubtextContainer}>
        <h4 className={style.itemSubtextContainer__subtext} style={{ color: Number(socketResponse?.p) >= previousCryptoValue.current ? colorGreen : colorRed }}>{currentPrice || <Skeleton count={1} width={"50px"} />}</h4>
        {currentPrice !== undefined ? (
          Number(currentPrice) >= previousCryptoValue.current ? (
            <MdOutlineArrowDropUp className={style.itemSubtextContainer__itemIcons} style={{ color: colorGreen }} />
          ) : (
            <MdOutlineArrowDropDown className={style.itemSubtextContainer__itemIcons} style={{ color: colorRed }} />
          )
        ) : (
          <Skeleton count={1} width={"20px"} />
        )}
      </div>
      <div className={style.itemVariationContainer}>
        {variation !== undefined ? (<h4 className={style.itemVariationContainer__text} style={{ color: Number(variation) > 0 ? colorGreen : colorRed }}>{variation}%</h4>) : (<Skeleton count={1} width={"90px"} />)}
      </div>
    </div>

  )
}
