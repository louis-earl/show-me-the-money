import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Ticker from './Ticker'

import { saveMeeting } from '../apis/meetings'
import DisplayUsers from './DisplayUsers'

const Meeting = () => {
  const [ runningTime, setRunningTime ] = useState(5652) // time in seconds !!!!! reset init state to zero for deployment
  const [ startStop, setStartStop ] = useState(false) // use Start and Stop as values
  

  const startStopFuc = (e) => {
    setStartStop(!startStop)
    // {(startStop == false) && timer(true)}  dispatch start Meeting, send user object
    // {(startStop == true) && timer(false)}  dispatch stop Meeting, call thunk that dispatches meeting to db
    setStartStop(!startStop)
  }


  return <div className="container">
    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <DisplayUsers />
    <div>
      {/* <div className="timer">{displayTime()} </div> */}
      {startStop && <Ticker /> }
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>
    <div>
      <button onClick={(e) => startStopFuc()}>{startStop ? <p>Stop</p> : <p>Start</p>}</button>
    </div>
  </div>
}

export default connect()(Meeting)
