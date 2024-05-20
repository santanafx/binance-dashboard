import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import style from "./TickerInfo.module.css";

export default function TickerInfo() {
  const symbolFromStore = useSelector((state: RootState) => state.tickerInfo.symbol);
  const selectedTickerInfo = useSelector((state: RootState) => state.tickerInfo.selectedTickerInfo);
  const isLoading = useSelector((state: RootState) => state.tickerInfo.isLoading);

  return (
    <div className={style.tickerInfoContainer}>
      <h1 className={style.tickerInfoContainer__title}>Ticker Information 24h</h1>
      <div className={style.tickerInfoContainer__information}>
        <h2>{symbolFromStore}</h2>
        <p>Last Price:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.lastPrice !== "" ? selectedTickerInfo.lastPrice : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Price Change:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.priceChange !== "" ? selectedTickerInfo.priceChange : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Price Change Percent:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.priceChangePercent !== "" ? `${selectedTickerInfo.priceChangePercent}%` : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Highest Price:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.highPrice !== "" ? selectedTickerInfo.highPrice : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Lowest Price:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.lowPrice !== "" ? selectedTickerInfo.lowPrice : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Volume:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.volume !== "" ? selectedTickerInfo.volume : "-"}</span> : <Skeleton count={1} width={"80px"} />}
        <p>Weighted Average Price:</p>
        {isLoading === false || isLoading === null ? <span>{selectedTickerInfo.weightedAvgPrice !== "" ? selectedTickerInfo.weightedAvgPrice : "-"}</span> : <Skeleton count={1} width={"80px"} />}
      </div>
    </div>

  );
}
