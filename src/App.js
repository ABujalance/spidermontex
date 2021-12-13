import './App.css';
import React, { useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const difference = +new Date(`12/16/2021 21:45`) - +new Date();
  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60)
    };
  }
  return timeLeft;
};

function App() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }

    timerComponents.push(
      <span className='time'>
        {timeLeft[interval]} {interval}{" "}
        <br></br>
      </span>
    );
  });

  return (
    <div className='container'>
      <div className='content'>
        <h1 className='title'>SPIDERMONTEX</h1>
        {timerComponents.length ? timerComponents : <span className='end'>MI SENTIDO ARÁCNIDO SE HA ACTIVADO</span>}
      </div>
    </div>
  );
}

export default App;
