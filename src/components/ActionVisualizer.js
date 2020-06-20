import React from 'react';
import './ActionVisualizer.css';
import { useSelector, useDispatch } from 'react-redux'


const ActionVisualizer = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter)
  return (
    <div>
      <div >{counter.count}</div>
       <button onClick={() => dispatch({ type: 'increment-counter' })}>
        Increment counter
      </button>
    </div>
  );
}

export default ActionVisualizer;
