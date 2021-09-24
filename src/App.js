import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [mostrar, setMostrar] = useState(true);

  const change = () => {
    setMostrar(!mostrar);
  };
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button
            onClick={() => {
              change();
            }}
          >
            {
            mostrar ? (
              <p>Dejar de mostar</p> 
             ) : (
             <p>mostrar</p>
             )}
          </button>
          {mostrar ? <Mousecolor /> : null}
        </div>
      </header>
    </div>
  );
}

function Mousecolor() {
  const [color, setColor] = useState("yellow");

  useEffect(() => {
    const onMouseMove = (Evento) => {
      if (Evento.clientX < window.innerWidth / 2) {
        setColor("yellow");
      } else {
        setColor("blue");
      }
    };

    window.addEventListener("mousemove", onMouseMove);
  });

  console.log("Ocurrio el render");

  return <div style={{ height: "100vh", width: "100vh", background: color }} />;
}

export default App;
