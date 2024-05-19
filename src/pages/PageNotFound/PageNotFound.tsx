import { useNavigate } from "react-router-dom"
import style from "./PageNotFound.module.css"

export default function PageNotFound() {
  const navigate = useNavigate()

  const handleGoToHomePage = () => {
    navigate("/")
  }

  return (
    <div className={style.pageNotFoundContainer}>
      <h1>PAGE NOT FOUND</h1>
      <p>We cant't find the page you're looking for. Please, head back to home.</p>
      <button className={style.pageNotFoundContainer__button} onClick={() => handleGoToHomePage()}>Home page</button>
    </div>
  )
}
