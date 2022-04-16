import React, { useState } from "react";
import "../styles/Buttons.css";

function Buttons() {
  const [money, setMoney] = useState(0);
  const [day, setDay] = useState(0);
  const [warmth, setWarmth] = useState(100);
  const [food, setFood] = useState(100);
  const [levelOfWarmth, setLevelOfWarmth] = useState(20);

  if (food > 100) {
    setFood(100);
  }
  if (food < 0) {
    setFood(0);
  }
  if (warmth > 100) {
    setWarmth(100);
  }
  if (warmth < 0) {
    setWarmth(0);
  }

  const handleWork = () => {
    setMoney(money + 20);
    setDay(day + 1);
    setFood(food - 20);
    setWarmth(warmth - levelOfWarmth);
  };
  const handleFood = () => {
    setFood(food + 30);
    setMoney(money - 5);
    setWarmth(warmth - levelOfWarmth / 5);
  };
  const handleFire = () => {
    setFood(food - 1);
    setWarmth(warmth + 20);
  };
  const handleJacket = () => {
    setMoney(money - 100);
    setLevelOfWarmth(10);
  };

  return (
    <>
      Food
      <div className="value-box">
        <div className="value" style={{ width: `${food}%` }}></div>
      </div>
      Warmth
      <div className="value-box">
        <div className="value" style={{ width: `${warmth}%` }}></div>
      </div>
      <div className="money">day {day}</div>
      <div className="money">savings: ${money}</div>
      <div className="shop-box">
        <p>
          + $20 <button onClick={() => handleWork()}>work for a day</button>
          <br></br>
          <br></br>- $5
          <button onClick={() => handleFood()}>buy and eat Food</button>
          <br></br>
          <br></br> <span>Free</span>
          <button onClick={() => handleFire()}>sit by fire</button>
          <br></br>
          <br></br> <span>- $100</span>
          <button onClick={() => handleJacket()}>buy jacket</button>
        </p>
      </div>
    </>
  );
}

export default Buttons;
