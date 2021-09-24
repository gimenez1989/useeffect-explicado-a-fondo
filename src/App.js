import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [cuenta, setCuenta] = useState(0);

  useEffect(() => {
    // Template sirve para concatenar string y variables
    console.log(`la cuenta es ${cuenta}`)  
    // Cambia el titulo de la pestaña por que cambia el estado cuenta
    document.title = `la cuenta es ${cuenta}`
  })

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>La cuenta es: {cuenta}</h1>
          {/*Al hacer click se setea cuenta */}
          <button onClick={() => setCuenta(cuenta + 1)}>Aumentar</button>
        </div>
      </header>
    </div>
  );
}

export default App;
