import React, { useContext, useEffect } from "react";
import { Context } from "../context/context";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import '../styles/home.css'

export default function Home() {

    const history = useNavigate()

    useEffect(() => {
        setSearch('')
    }, [])

    const { search, setSearch, theme, setTheme, setUserData } = useContext(Context)

    const setCurrentTheme = () => {
        if (theme === 'light') {
            setTheme('dark')
        } else {
            setTheme('light')
        }
    }

    const checkUser = async (username: string) => {
        try {
            const userData = await axios.get(`https://api.github.com/users/${username}`)
            const data = userData.data
            setUserData(data)
            history('/user')
        } catch (err: any) {
            if (err.response) {
                console.log(err.response.status)
                console.log(err.response.data.message)
            }
        }
    }

    const changeColor = theme === 'dark' ? '#171515' : 'white'
    const changeColorInverted = theme === 'dark' ? 'white' : '#171515'
    const themeImg = theme === 'dark' ? require('../public/theme2.png') : require('../public/theme.png')
    const searchImg = theme === 'dark' ? require('../public/search2.png') : require('../public/search.png')
    const homeMainStyle = { backgroundColor: changeColor }
    const homeFormStyle = { color: changeColorInverted }
    const homeFormButtonStyle = { backgroundColor: changeColorInverted, color: changeColor }


    return (
        <section className="home-main" style={homeMainStyle}>
            <div className="home-form">
                <div className="home-form-title" style={homeFormStyle}><p>Buscar repositório no github</p></div>
                <div className="home-form-data">
                    <input type="text" onChange={e => setSearch(e.target.value)} />
                    <button style={homeFormButtonStyle} onClick={() => checkUser(search)}><img src={searchImg} alt="" /> Buscar</button>
                </div>
                <div className="home-form-theme">
                    <img src={themeImg} alt="" onClick={() => setCurrentTheme()} />
                </div>
            </div>
        </section>
    )
}