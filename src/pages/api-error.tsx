import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { changeColor, changeColorInverted } from "../helpers/utils";
import { Link } from "react-router-dom";
import "../styles/notFound.css"

export default function ApiError() {
    const { theme } = useContext(ThemeContext)

    const apiErrorStyle = { backgroundColor: changeColor(theme), color: changeColorInverted(theme) }
    const sadImg = theme === 'dark' ? require('../public/sad2.png') : require('../public/sad.png')

    return (
        <section>
            <div className="not-found-main" style={apiErrorStyle}>
                <div className="not-found-canvas">
                    <img src={sadImg} alt="" />
                    <p className="not-found-title">403</p>
                    <p className="not-found-subtitle">Ocorreu algum problema na API.</p>
                    <Link to="/" className="try-again">
                        Tentar novamente
                    </Link>
                </div>
            </div>
        </section>
    )
}