import { PropsWithChildren } from "react"
import style from "./CryptoList.module.css"
import Item from "./Item"

export default function CryptoList({ children }: PropsWithChildren) {

  return (
    <section className={style.cryptoListContainer}>
      {children}
    </section>
  )
}

CryptoList.Item = Item
