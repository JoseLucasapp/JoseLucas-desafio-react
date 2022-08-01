import React, { useContext } from "react";
import { Context } from "../context/context";
import "../styles/notFound.css"

export default function NotFound({ isRoute }: any) {
    const { theme } = useContext(Context)

    const changeColor = theme === 'dark' ? '#171515' : 'white'
    const changeColorInverted = theme === 'dark' ? 'white' : '#171515'
    const notFoundStyle = { backgroundColor: changeColor, color: changeColorInverted }
    const sadImg = theme === 'dark' ? require('../public/sad2.png') : require('../public/sad.png')

    return (
        <section>
            <div className="not-found-main" style={notFoundStyle}>
                <div className="not-found-canvas">
                    <img src={sadImg} alt="" />
                    <p className="not-found-title">404</p>
                    <p className="not-found-subtitle">{isRoute ? 'ERRROUU' : 'Usuário não encontrado no github. Verifique se você digitou o nome corretamente.'}</p>
                </div>
            </div>
        </section>
    )
}