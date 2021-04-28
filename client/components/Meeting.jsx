import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'

const Meeting = () => {
  const [ runningTime, setRunningTime ] = useState(0) // time in seconds
  const [ startStop, setStartStop ] = useState(false) // use Start and Stop as values
  
  const timer = () => {

  }
  return <div className="container">
    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <ul>
      {/*  MAP THROUGH EMPLOYEES DISPLAY IN li/button*/}
    </ul>
    <div>
      <div className="timer">{/*  DISPLAY: hours | min | sec */}</div>
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>
    <div>
      <button onClick={() => setStartStop(!startStop)}>{startStop ? <p>Stop</p> : <p>Start</p>}</button>
    </div>
  </div>
}

export default connect()(Meeting)
