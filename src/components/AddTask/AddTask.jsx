import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
const AddTask = () => {

  let [task,setTask]=useState("");
    const[tasks,setTasks]=useState([]);


    const handleChange =(e)=>{
      task=e.target.value
    }
  // NOTE: do not delete `data-cy` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-cy="add-task-input" type="text"  onChange={handleChange} />
      <button data-cy="add-task-button" onClick={()=>{
        console.log(task)
      }}>Add</button>
      {tasks.map((task)=>(
        <div>task.value</div>
      ))}
    </div>
  );
};

export default AddTask;
