
import { useNavigate } from "react-router-dom"
import logo from "../../assets/logo.png"
import style from "./Logo.module.css"

export default function Logo() {
  const navigate = useNavigate()

  const handleGoToHomePage = () => {
    navigate("/")
  }

  return (
    <div className={style.logoContainer}>
      <div className={style.logoContainer__imgContainer}>
        <img className={style.imgContainer__img} src={logo} alt="Application logo." onClick={() => handleGoToHomePage()} />
      </div>
      <h1 className={style.logoContainer__title}>Binance App</h1>
    </div>
  )
}
