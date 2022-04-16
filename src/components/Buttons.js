import React, { useState } from "react";
import "../styles/Buttons.css";

function Buttons() {
  const [number, setNumber] = useState(100);
  if (number > 100) {
    setNumber(100);
  }
  if (number < 0) {
    setNumber(0);
  }

  return (
    <>
      <div className="value-box">
        <div className="value" style={{ width: `${number}%` }}></div>
      </div>
      <h4>{number}</h4>
      <button onClick={() => setNumber(number - 10)}>-1</button>
      <button onClick={() => setNumber(number + 10)}>+1</button>
    </>
  );
}

export default Buttons;
