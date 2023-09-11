import { HexColorPicker } from "react-colorful";
import { useDraw } from '../../hooks/useDraw';
import { drawLine } from '../../hooks/drawline'
import {useColorProvider} from '../../state/colorProvider'

export default function Sidebar() {
    const {color, setColor} = useColorProvider();
    const { clear } = useDraw(drawLine, setColor);

    return (
        <div className='flex flex-col gap-10 pl-10 '>
            <HexColorPicker color={color} onChange={setColor} />
            <button type='button' className='p-2 rounded-md border border-black' onClick={clear}>
                Clear canvas
            </button>
        </div>
    )
}