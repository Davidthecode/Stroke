import * as React from 'react';
import { createContext, useContext, ReactNode, useState, Dispatch, SetStateAction } from "react"

type ColorTye = {
    color: string,
    setColor: Dispatch<SetStateAction<string>>,
};


const ColorContext = createContext<ColorTye | null>(null)

export const UseColorContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [color, setColor] = useState('#000');
    return (
        <ColorContext.Provider value={{color, setColor}}>
            {children}
        </ColorContext.Provider>
    )
}

export const useColorProvider = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('err');
    }
    return context;
};