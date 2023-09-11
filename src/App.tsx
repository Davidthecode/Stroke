import './App.css';
import { useDraw } from '../hooks/useDraw';
import { drawLine } from '../hooks/drawline';
import Sidebar from './component/sidebar';
import { useColorProvider } from '../state/colorProvider';
import Navbar from './component/navbar';


function App() {
  const { color, setColor } = useColorProvider();
  const onDrawWrapper = (drawProps: any) => {
    drawLine({ ...drawProps, color });
  };
  const { canvasRef, onMouseDown } = useDraw(onDrawWrapper, setColor);

  return (
    <div className='flex flex-col h-screen'>
      <div className='h-[8%]'>
        <Navbar />
      </div>
      <div className='bg-white flex-1 flex justify-between items-center'>
        <div className='border border-black rounded-md ml-8'>
          <canvas
            ref={canvasRef}
            onMouseDown={onMouseDown}
            width={1200}
            height={600}
            className='h-full w-full'
          />
        </div>
        <div className='mr-8 border-l border-l-[#686C76] h-full items-center flex'>
          <Sidebar />
        </div>
      </div>
    </div>
  )
}

export default App
