'use client';

import { useState } from 'react';

import React from 'react';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  const handleIncrement = () => {
    setCounter((counter) => counter + 1);
  };

  return (
    <div className="counter__container">
      <div className="counter__display">{counter}</div>
      <div className="counter__buttons">
        <button onClick={handleIncrement} className="counter__increment">
          +
        </button>
        <button className="counter__decrement">-</button>
      </div>
    </div>
  );
}
