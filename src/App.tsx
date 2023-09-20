import "./App.css";
import { useDraw } from "./hooks/useDraw";
import { drawLine } from "./hooks/drawline";
import Sidebar from "./component/sidebar";
import { useColorProvider } from "./state/colorProvider";
import Navbar from "./component/navbar";
import { useEffect, useState } from "react";
import { useThemeProvider } from "./state/themeProvider";

function App() {
  const { toggleTheme } = useThemeProvider();
  const [isOpen, setIsOpen] = useState(false);
  const [canvasWidth, setCanvasWidth] = useState(window.innerWidth * 0.8);

  const { color, setColor } = useColorProvider();
  const onDrawWrapper = (drawProps: any) => {
    drawLine({ ...drawProps, color });
  };
  const { canvasRef, onMouseDown, clear } = useDraw(onDrawWrapper, setColor);

  useEffect(() => {
    const handleResize = () => {
      setCanvasWidth(window.innerWidth * 0.8);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen bg-white">
      <div className="h-[8%]">
        <Navbar setIsOpen={setIsOpen} />
      </div>
      <div
        className={`relative flex-1 flex justify-between items-center ${
          toggleTheme ? "bg-[#1D1D1D] text-white" : "bg-white text-black"
        }`}
      >
        <div className="border border-black rounded-md ml-8 border-opacity-30">
          <div className="border-b border-black border-opacity-25">
            <button
              type="button"
              className={`${
                toggleTheme
                  ? "p-2 rounded-md border-r border-b hover:bg-black border-black"
                  : "p-2 rounded-md border-r border-b hover:bg-gray-100 border-black"
              }`}
              onClick={clear}
            >
              Clear canvas
            </button>
          </div>
          <canvas
            id="canvas"
            width={canvasWidth}
            height={600}
            ref={canvasRef}
            onMouseDown={onMouseDown}
            className={`border-opacity-30 ${toggleTheme && "bg-white"}`}
          />
        </div>
        <div
          className={`${toggleTheme && "bg-[#2D2D2D]"} ${
            isOpen
              ? "fixed inset-y-0 right-0 bg-white h-screen w-[20%] z-50"
              : "h-full w-[15%]"
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
  );
}

export default App;
