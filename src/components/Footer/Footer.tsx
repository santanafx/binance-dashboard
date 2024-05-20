import { BsTwitterX } from "react-icons/bs"
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"
import logo from "../../assets/logo.png"
import style from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerContainer__imgContainer}>
        <img className={style.imgContainer__img} src={logo} alt="Application logo." />
      </div>
      <div className={style.footerContainer__mainColumn}>
        <h2 className={style.column__mainTitlle}>Binance App</h2>
        <div className={style.column__iconsContainer}>
          <BsTwitterX className={style.iconsContainer__icon} />
          <FaFacebook className={style.iconsContainer__icon} />
          <FaYoutube className={style.iconsContainer__icon} />
          <FaInstagram className={style.iconsContainer__icon} />
        </div>
      </div>
      <div className={style.footerContainer__column}>
        <h3 className={style.column__title}>Products</h3>
        <a className={style.column__option}>Supercharts</a>
        <a className={style.column__option}>Crypto Screener</a>
        <a className={style.column__option}>News</a>
      </div>
      <div className={style.footerContainer__column}>
        <h3 className={style.column__title}>Company</h3>
        <a className={style.column__option}>About</a>
        <a className={style.column__option}>Features</a>
        <a className={style.column__option}>Pricing</a>
      </div>
      <div className={style.footerContainer__column}>
        <h3 className={style.column__title}>Community</h3>
        <a className={style.column__option}>Refer a friend</a>
        <a className={style.column__option}>Ideas</a>
        <a className={style.column__option}>Scripts</a>
      </div>
    </footer>
  )
}
