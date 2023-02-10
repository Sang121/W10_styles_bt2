import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import styles from "./styles.module.css"

function App() {
  const [time,setTime]=useState("day");
  const day=()=>{
    setTime("day")
  }
  const night=()=>{
    setTime("night")
  }
  const container=(time==="day")? styles.blue : styles.black

  
  return (
    <div>
        <button onClick={day}> Day</button>
        <button  onClick={night}> Night</button>
         <div className={container}> </div>
    </div>
    
  );
}

export default App;
