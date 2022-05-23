import React from "react";
import styles from "./counter.module.css";
// import { useState } from "react";


const Counter = () => {
  // sample value to be replaced
const [count,setCount]=React.useState(0);

const increment=()=>{
  setCount(count+1)
}

const decrement=()=>{
  if(count>0){
    setCount(count-1)
  }
}
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={increment}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button data-cy="task-counter-decrement-button" onClick={decrement}>-</button>
    </div>
  );
};

export default Counter;
