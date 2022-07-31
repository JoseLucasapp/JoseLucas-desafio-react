import React, { createContext, useState, } from 'react';
import { ContextItens } from '../interfaces/context-itens';

const Context = createContext<ContextItens>({ search: '', setSearch: '', theme: '', setTheme: '', userData: {}, setUserData: '' })

function AppProvider({ children }: React.PropsWithChildren) {
    const [search, setSearch] = useState('')
    const [theme, setTheme] = useState('light')
    const [userData, setUserData] = useState({})

    return (
        <Context.Provider value={{ search, setSearch, theme, setTheme, userData, setUserData }}>
            {children}
        </Context.Provider>
    )
}

export { Context, AppProvider };