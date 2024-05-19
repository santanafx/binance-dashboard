import { PropsWithChildren } from "react"
import style from "./CryptoList.module.css"
import Item from "./Item"

export default function CryptoList({ children }: PropsWithChildren) {

  return (
    <div className={style.cryptoListContainer}>
      {children}
    </div>
  )
}

CryptoList.Item = Item
