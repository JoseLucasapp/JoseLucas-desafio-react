import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { changeColor, changeColorInverted } from "../helpers/utils";
import "../styles/notFound.css"

export default function NotFound({ isRoute }: any) {
    const { theme } = useContext(ThemeContext)

    const notFoundStyle = { backgroundColor: changeColor(theme), color: changeColorInverted(theme) }
    const sadImg = theme === 'dark' ? require('../public/sad2.png') : require('../public/sad.png')

    return (
        <section>
            <div className="not-found-main" style={notFoundStyle}>
                <div className="not-found-canvas">
                    <img src={sadImg} alt="" />
                    <p className="not-found-title">404</p>
                    <p className="not-found-subtitle">{isRoute ? 'Página não existe' : 'Usuário não encontrado no github. Verifique se você digitou o nome corretamente.'}</p>
                </div>
            </div>
        </section>
    )
}