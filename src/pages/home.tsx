import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";

import { useNavigate } from "react-router-dom";

import '../styles/home.css'
import swal from "sweetalert";
import { ThemeEnum } from "../interfaces/theme-inteface";
import { changeColor, changeColorInverted } from "../helpers/utils";

export default function Home() {
    const [search, setSearch] = useState('')
    const { setTheme, theme } = useContext(ThemeContext)

    const history = useNavigate()

    useEffect(() => {
        setSearch('')
    }, [])

    const setCurrentTheme = () => {
        setTheme(theme === ThemeEnum.light ? ThemeEnum.dark : ThemeEnum.light);
    }

    const checkUser = async (username: string) => {
        if (username.length > 0) {
            history(`/user/${search}`)
        } else {
            swal({
                title: "Oops!",
                text: "Informe um nome de usuário válido do github.",
                icon: "warning",
            });
        }
    }

    const themeImg = theme === 'dark' ? require('../public/theme2.png') : require('../public/theme.png')
    const searchImg = theme === 'dark' ? require('../public/search2.png') : require('../public/search.png')
    const homeMainStyle = { backgroundColor: changeColor(theme) }
    const homeFormStyle = { color: changeColorInverted(theme) }
    const homeFormButtonStyle = { backgroundColor: changeColorInverted(theme), color: changeColor(theme) }


    return (
        <section className="home-main" style={homeMainStyle}>
            <div className="home-form">
                <div className="home-form-title" style={homeFormStyle}><p>Buscar repositório no github</p></div>
                <div className="home-form-data">
                    <input type="text" placeholder="Digite o nome do usuário" onChange={e => setSearch(e.target.value)} />
                    <button style={homeFormButtonStyle} onClick={() => checkUser(search)}><img src={searchImg} alt="" /> Buscar</button>
                </div>
                <div className="home-form-theme">
                    <img src={themeImg} alt="" onClick={() => setCurrentTheme()} />
                </div>
            </div>
        </section>
    )
}