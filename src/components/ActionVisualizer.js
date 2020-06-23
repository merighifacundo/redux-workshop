import React from 'react';
import './ActionVisualizer.css';
import { useSelector, useDispatch } from 'react-redux'
import {increment} from '../slices/counter';

const ActionVisualizer = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  console.log(counter);
  return (
    <div>
      <div >{counter.count}</div>
      <button onClick={() => dispatch(increment())}>
        Increment counter
      </button>

    </div>
  );
}

export default ActionVisualizer;
