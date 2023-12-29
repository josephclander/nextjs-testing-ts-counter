'use client';

import { useState } from 'react';

import React from 'react';

export default function Counter() {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div className="counter__container">
      <div className="counter__display">{counter}</div>
      <div className="counter__buttons">
        <button className="counter__increment">+</button>
        <button className="counter__decrement">-</button>
      </div>
    </div>
  );
}
