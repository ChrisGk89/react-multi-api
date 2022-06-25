import React, { useState } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  counterSelector,
  decrement,
  increment,
  incrementByAmount,
} from './CounterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counterValue = useSelector(counterSelector);
  const [value, setValue] = useState(0);

  return (
    <div>
      <p>{counterValue}</p>
      <Button variant="contained" onClick={() => dispatch(increment())}>
        +
      </Button>
      <Button variant="contained" onClick={() => dispatch(decrement())}>
        -
      </Button>
      <input value={value} onChange={(e: any) => setValue(e.target.value)} />
      <Button
        variant="contained"
        onClick={() => dispatch(incrementByAmount(Number(value)))}
      >
        Increment By Amount
      </Button>
    </div>
  );
};

export default Counter;
