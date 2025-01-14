import { useState, useEffect } from "react";
import InteractionPane from "interactionpane";
import Mains from "./Components/Mains";
import "./App.css";

function App() {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); 
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // npm i interactionpane

  return (
    <>
      {isMobile ? (
        <InteractionPane
          scale={scale}
          setScale={setScale}
          offset={offset}
          setOffset={setOffset}
        >
          <Mains />
        </InteractionPane>
      ) : (
        <Mains />
      )}
    </>
  );
}

export default App;
