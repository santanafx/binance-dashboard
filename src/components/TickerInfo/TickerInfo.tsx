import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import style from "./TickerInfo.module.css";

export default function TickerInfo() {
  const symbolFromStore = useSelector((state: RootState) => state.tickerInfo.symbol);
  const selectedTickerInfo = useSelector((state: RootState) => state.tickerInfo.selectedTickerInfo);

  return (

    <div className={style.tickerInfoContainer}>
      <h1 className={style.tickerInfoContainer__title}>Ticker Information 24h</h1>
      <div className={style.tickerInfoContainer__information}>
        <h2>{symbolFromStore}</h2>
        <p>Last Price:</p>
        <span>{selectedTickerInfo.lastPrice !== "" ? selectedTickerInfo.lastPrice : "-"}</span>
        <p>Price Change:</p>
        <span>{selectedTickerInfo.priceChange !== "" ? selectedTickerInfo.priceChange : "-"}</span>
        <p>Price Change Percent:</p>
        <span>{selectedTickerInfo.priceChangePercent !== "" ? `${selectedTickerInfo.priceChangePercent}%` : "-"}</span>
        <p>Highest Price:</p>
        <span>{selectedTickerInfo.highPrice !== "" ? selectedTickerInfo.highPrice : "-"}</span>
        <p>Lowest Price:</p>
        <span>{selectedTickerInfo.lowPrice !== "" ? selectedTickerInfo.lowPrice : "-"}</span>
        <p>Volume:</p>
        <span>{selectedTickerInfo.volume !== "" ? selectedTickerInfo.volume : "-"}</span>
        <p>Weighted Average Price:</p>
        <span>{selectedTickerInfo.weightedAvgPrice !== "" ? selectedTickerInfo.weightedAvgPrice : "-"}</span>
      </div>
    </div>

  );
}
