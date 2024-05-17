import { useContext } from "react"
import { NavMenuContext } from "./NavMenu"
import style from "./SearchInput.module.css"

export default function SearchInput() {
  const { symbol, setSymbol } = useContext(NavMenuContext)

  const handleChangeSymbol = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSymbol(e.target.value)
  }
  return (
    <div className={style.searchInput__container}>
      <input className={style.searchInput__input} type="text" placeholder="Search symbols here" onChange={(e) => handleChangeSymbol(e)} value={symbol} />
    </div>
  )
}
