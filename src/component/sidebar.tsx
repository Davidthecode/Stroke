import { HexColorPicker } from "react-colorful";
import { useColorProvider } from '../state/colorProvider';
import { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillGithub } from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import { useThemeProvider } from "../state/themeProvider";

type SidebarType = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
};

export default function Sidebar({ isOpen, setIsOpen }: SidebarType) {
    const {toggleTheme} = useThemeProvider();
    const { color, setColor } = useColorProvider();
    const [isColorShown, setIsColorShown] = useState(false);

    const toggleDisplayColors = () => {
        setIsColorShown(!isColorShown)
    };

    return (
        <div className={`h-full border-l border-l-[#686C76] border-opacity-30 ${toggleTheme ? 'bg-[#1D1D1D]': 'bg-white'}  ${isOpen ? 'block' : 'largeTablet:hidden'}`}>
            <div className="ml-4 pt-4 hidden largeTablet:block">
                <AiOutlineClose size='1.1rem' className='cursor-pointer' onClick={() => setIsOpen(false)} />
            </div>

            <div className='flex flex-col px-5 h-full items-center pt-8'>
                <div className="w-full">
                    <h1 className="text-md font-medium">Stroke color</h1>
                    <div className="w-full h-8 border border-black my-4 cursor-pointer rounded-lg" style={{ backgroundColor: color }} onClick={toggleDisplayColors}>
                    </div>
                </div>

                {isColorShown && <HexColorPicker color={color} onChange={setColor} />}

                <div className="mt-auto mb-14 flex items-center">
                    <p className="mr-2">Star on Github</p>
                    <Link to='https://github.com/Davidthecode/Stroke' className='cursor-pointer' target="_blank">
                        <AiFillGithub size='1.3rem' />
                    </Link >
                </div>
            </div>
        </div>
    )
}