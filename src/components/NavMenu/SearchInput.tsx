import { useMemo, useState } from "react";
import { HiSearch } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useGetExchangeInfoQuery, useLazyGetTickerInformationQuery } from "../../services/services";
import { getSymbol, getTickerInfo } from "../../store/reducers/tickerInfo";
import style from "./SearchInput.module.css";

export default function SearchInput() {
  const { data: exchangeInfo } = useGetExchangeInfoQuery();
  const [getTickerInformation] = useLazyGetTickerInformationQuery();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch()

  const fetchDataTickerInfo = async (symbol: string) => {
    const response = await getTickerInformation(symbol.toUpperCase())
    if (response.data) {
      dispatch(getTickerInfo(response.data))
    }
  }

  const handleChangeSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value)
  }

  const handleChangeSymbolbyClick = (symbol: string) => {
    setSearchTerm(symbol)
    dispatch(getSymbol(symbol.toUpperCase()))

    fetchDataTickerInfo(symbol.toUpperCase())
  }

  const handleSaveSymbol = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      dispatch(getSymbol(e.target.value.toUpperCase()))

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      fetchDataTickerInfo(e.target.value.toUpperCase())
    }
  }

  const filteredSymbols = useMemo(() => {
    if (exchangeInfo) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      const filtered = exchangeInfo.symbols
        .map(({ symbol }: { symbol: string }) => symbol)
        .filter((symbol: string) => symbol.toLowerCase().startsWith(searchTerm.toLowerCase()));
      return filtered
    }
  }, [searchTerm, exchangeInfo]);

  return (
    <>
      <div className={style.searchInputContainer}>
        <div className={style.searchInputContainer_iconInputContainer}>
          <HiSearch className={style.searchInputContainer__icon} />
          <input className={style.searchInputContainer__input} type="text" placeholder="Search symbol" onChange={(e) => handleChangeSymbol(e)} value={searchTerm.toUpperCase()} onKeyDown={(e) => handleSaveSymbol(e)} />
        </div>
      </div>
      {(searchTerm !== "" && filteredSymbols.length > 1) &&
        <div className={style.searchListContainer}>
          <div className={style.searchListContainer__list}>
            {searchTerm === "" ? ("") : (
              filteredSymbols.slice(0, 5).map((symbol: string, i: number) => (
                <p className={style.searchListContainer__list__item} key={i} onClick={(() => {
                  handleChangeSymbolbyClick(symbol)
                })}>{symbol}</p>)
              ))}
          </div>
        </div>}
    </>
  )
}
