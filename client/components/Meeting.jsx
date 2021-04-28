import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

const Meeting = () => {
  const [ runningTime, setRunningTime ] = useState(5652) // time in seconds !!!!! reset init state to zero for deployment
  const [ startStop, setStartStop ] = useState(false) // use Start and Stop as values
  
  const timer = () => {
    let time = setInterval(runningTime, 1000)
  }

  const startStopFuc = (e) => {
    {(startStop == false) && console.log("This will start timer")}
    {(startStop == true) && console.log("This will send meeting data to db")}
    setStartStop(!startStop)
  }

  const displayTime = () => {
    {/*  DISPLAY: hours | min | sec */}
    let hours = Math.floor(runningTime / 60 /60)
    let min = Math.floor(runningTime / 60)
    let sec = runningTime % 60
    return <h3>{hours} | {min} | {sec}</h3>
  }

  return <div className="container">
    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <ul>
      {/*  MAP THROUGH EMPLOYEES DISPLAY IN li/button*/}
    </ul>
    <div>
      <div className="timer">{displayTime()} </div>
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>
    <div>
      <button onClick={(e) => startStopFuc()}>{startStop ? <p>Stop</p> : <p>Start</p>}</button>
    </div>
  </div>
}

export default connect()(Meeting)
