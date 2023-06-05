import { useState } from "react";
import Square from "./Square";
import InputValue from "./InputValue"


function App() {
  const [colorValue, setColorvalue] = useState('');
  const [hexValue, setHexValue] = useState('');
  const [isDarkTxt, setisDarkTxt] = useState(true);
  return (
    <div className="App">

      <Square

        colorValue={colorValue}
        hexValue={hexValue}
        isDarkTxt={isDarkTxt}
      />

      <InputValue
        colorValue={colorValue}
        setColorvalue ={setColorvalue}
        setHexValue={setHexValue}
        isDarkTxt={isDarkTxt}
        setisDarkTxt={setisDarkTxt}
      />


    </div>
  );
}

export default App;
