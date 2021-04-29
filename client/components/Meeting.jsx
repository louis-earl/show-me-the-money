import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Ticker from './Ticker'

import { saveMeeting } from '../apis/meetings'

const Meeting = () => {
  const [ runningTime, setRunningTime ] = useState(5652) // time in seconds !!!!! reset init state to zero for deployment
  const [ startStop, setStartStop ] = useState(false) // use Start and Stop as values
  

  const startStopFuc = (e) => {
    setStartStop(!startStop)
    // {(startStop == false) && timer(true)}  dispatch start Meeting, send user object
    // {(startStop == true) && timer(false)}  dispatch stop Meeting, call thunk that dispatches meeting to db
    setStartStop(!startStop)
  }

  // TEST BUTTON FUNCTION
  const clickHandler = () => {
    const meeting = { meeting_name: 'Test Meeting' }
    saveMeeting(meeting)
    .then(result => console.log("Meeting saved", result))
  }


  return <div className="container">



    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <ul>
      {/*  MAP THROUGH EMPLOYEES DISPLAY IN li/button*/}
    </ul>
    <div>
      {/* <div className="timer">{displayTime()} </div> */}
      {startStop && <Ticker /> }
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>
    <div>
      <button onClick={(e) => startStopFuc()}>{startStop ? <p>Stop</p> : <p>Start</p>}</button>
    </div>

{/* Test button */}
  <button onClick={clickHandler}>Click to save meeting</button>


  </div>
}

export default connect()(Meeting)
