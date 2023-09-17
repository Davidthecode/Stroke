import * as React from 'react';
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react";

type ThemeType = {
    toggleTheme: boolean,
    setToggleTheme: Dispatch<SetStateAction<boolean>>,
};


const ThemeContext = createContext<ThemeType | null>(null)

export const UseThemeContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const theme = localStorage.getItem("dark");
    const [toggleTheme, setToggleTheme] = useState(!!theme);
    
    return (
        <ThemeContext.Provider value={{toggleTheme, setToggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
};

export const useThemeProvider = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('err');
    }
    return context;
};