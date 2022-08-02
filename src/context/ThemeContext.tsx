import React, { createContext, useState, } from 'react';
import { themeContextInterface, ThemeEnum } from '../interfaces/theme-inteface';

const ThemeContext = createContext<themeContextInterface>(
    {} as themeContextInterface
);

function ThemeProvider({ children }: React.PropsWithChildren) {
    const [theme, setTheme] = useState(ThemeEnum.light);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeProvider };