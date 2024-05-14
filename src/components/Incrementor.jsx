"use client";

import { useState, useEffect } from "react";

export default function Incrementor({ number, add, interval }) {
  const [currentNumber, setCurrentNumber] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (currentNumber < number) {
        setCurrentNumber((prevNumber) => prevNumber + add || 1);
      } else {
        setCurrentNumber(number);
        clearInterval(timer);
      }
    }, interval || 1);

    return () => clearInterval(timer);
  }, [add, currentNumber, interval, number]);

  return <>{currentNumber}</>;
}
