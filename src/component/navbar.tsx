import {AiFillGithub} from 'react-icons/ai'
import {MdOutlineDarkMode} from 'react-icons/md'
import {MdOutlineLightMode} from 'react-icons/md'
import { Link } from 'react-router-dom'
import {useState} from 'react'

export default function Navbar () {
    const [toggleTheme, setToggleTheme] = useState(false);

    const handleLightmode = () => {
        setToggleTheme(false)
    }

    const handleDarkmode = () => {
        setToggleTheme(true)
    }

    return (
        <nav className='flex h-full border-b border-b-[#686C76] items-center justify-between'>
            <div className="ml-8">
                <h1 className="text-xl font-medium">Stroke</h1>
            </div>
            <div className="mr-[4.5%] flex items-center justify-around">
                <div className='mr-6 cursor-pointer'>
                    {toggleTheme ? <MdOutlineLightMode size='1.4rem' onClick={handleLightmode}/> : <MdOutlineDarkMode size='1.4rem' onClick={handleDarkmode}/> }
                </div>
                <div className='mr-6'>
                    <button className="border px-4 py-1 rounded-md font-medium">save</button>
                </div>
                <Link  to='https://github.com/Davidthecode/Stroke' className='cursor-pointer' target="_blank">
                   <AiFillGithub size='1.3rem'/>
                </Link >
            </div>
        </nav>
    )
}