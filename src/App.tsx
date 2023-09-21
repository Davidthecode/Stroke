import './App.css';
import { useDraw } from './hooks/useDraw';
import { drawLine } from './hooks/drawline';
import Sidebar from './component/sidebar';
import { useColorProvider } from './state/colorProvider';
import Navbar from './component/navbar';
import { useState, useEffect } from 'react';
import { useThemeProvider } from './state/themeProvider';

export default function App() {
  const { toggleTheme } = useThemeProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth * 0.8);
  const [canvasHeight, setCanvasHeight] = useState(window.innerHeight * 0.8);
  
  const { color, setColor } = useColorProvider();
  const onDrawWrapper = (drawProps: any) => {
    drawLine({ ...drawProps, color });
  };

  const { canvasRef, onMouseDown, clear } = useDraw(onDrawWrapper, setColor);

  useEffect(() => {
    const handleResize = () => {
      setCanvasHeight(window.innerHeight * 0.8);

      if(window.innerWidth > 517 && window.innerWidth < 601){
        setCanvasWidth(window.innerWidth * 0.89);
      }else if(window.innerWidth > 600 && window.innerWidth < 900){
        setCanvasWidth(window.innerWidth * 0.91);
      }else if(window.innerWidth > 899 && window.innerWidth < 951){
        setCanvasWidth(window.innerWidth * 0.92);
      } else if (window.innerWidth > 950 && window.innerWidth < 1287){
        setCanvasWidth(window.innerWidth * 0.93);
      }else{
        setCanvasWidth(window.innerWidth * 0.81);
      };
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <div className='flex flex-col h-screen bg-white'>
      <div className='h-[8%]'>
        <Navbar setIsOpen={setIsOpen} />
      </div>
      <div
        className={`relative flex-1 flex justify-between items-center ${
          toggleTheme ? 'bg-[#1D1D1D] text-white' : 'bg-white text-black'
        }`}
      >
        <div className={`border border-black rounded-md ml-8 border-opacity-30 w-${canvasWidth}`}>
          <div className={`border-b border-black border-opacity-25 ${toggleTheme && 'bg-white'}`}>
            <button 
              type='button' 
              className={`${
                toggleTheme 
                  ? 'p-2 rounded-r-md border-r border-b bg-[#F05656] border-[#F05656]' 
                  : 'p-2 rounded-r-md hover:bg-[#E64E4E] bg-[#F05656] text-white border-[#F05656]'
              }`} 
              onClick={clear}
            >
              Clear canvas
            </button>
          </div>
          <canvas
            id='canvas'
            width={canvasWidth}
            height={canvasHeight}
            ref={canvasRef}
            onMouseDown={onMouseDown}
            className={`border-opacity-30 ${toggleTheme && 'bg-white'}`}
          />
        </div>
        <div className={`${
          toggleTheme && 'bg-[#2D2D2D]'} ${
            isOpen 
              ?'fixed inset-y-0 right-0 bg-white h-screen w-[30%] smallSize:w-[100%] mediumScreens:w-[50%] z-50' 
              :'w-[15%] h-full largeTablet:w-0'
          }`}
        >
          <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-gray-800 bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          ></div>
        )}
      </div>
    </div>
  )
};
