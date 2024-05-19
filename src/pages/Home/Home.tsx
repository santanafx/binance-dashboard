import CryptoList from "../../components/CryptoList/CryptoList"
import NavMenu from "../../components/NavMenu/NavMenu"
import TickerInfo from "../../components/TickerInfo/TickerInfo"
import TradingViewWidget from "../../components/TradingViewWidget/TradingViewWidget"
import style from "./Home.module.css"

export default function Home() {
  return (
    <div className={style.homeContainer}>
      <CryptoList>
        <CryptoList.Item cryptoSymbolText="btcusdt" index={0} />
        <CryptoList.Item cryptoSymbolText="ethusdt" index={1} />
        <CryptoList.Item cryptoSymbolText="solusdt" index={2} />
        <CryptoList.Item cryptoSymbolText="dogeusdt" index={3} />
      </CryptoList>
      <div className={style.searchGraphContainer}>
        <div className={style.searchGraphContainer__navMenuTickerInfo}>
          <div className={style.navMenuTickerInfo__navMenu}>
            <NavMenu>
              <NavMenu.SearchInput />
            </NavMenu>
          </div>
          <div className={style.navMenuTickerInfo__tickerInfo}>
            <TickerInfo />
          </div>
        </div>
        <div className={style.searchGraphContainer__graph}>
          <TradingViewWidget ticker={"btcusdt"} />
        </div>
      </div>
    </div>
  )
}
