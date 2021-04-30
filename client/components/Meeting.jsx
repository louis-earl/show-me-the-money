import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Ticker from './Ticker'
import DisplayUsers from './DisplayUsers'

import { saveMeeting } from '../apis/meetings'
import { fetchUsers }  from '../actions/users'
import {startMeeting, endMeeting} from '../actions/currentMeeting'
import Graph from './Graph'

const Meeting = (props) => {

    useEffect (() => {
      props.dispatch(fetchUsers())
    },[])

    const attendees = [
      {
        id: 1,
        hourlyWage: 24.00
      },
      {
        id: 2,
        hourlyWage: 24.00,
  
      },
      {
        id: 2,
        hourlyWage: 24.00,
        
      }
    ]

    const meetingName = 'Discuss rollout of new firmware'
    const meetingInProgress = props.currentMeeting.meetingInProgress
    console.log(meetingInProgress)

  const handleClick = () => {
    
    if (!meetingInProgress) {
    props.dispatch(startMeeting(attendees, meetingName))
    }
    else {
      props.dispatch(endMeeting())
    }


  }

  // TEST BUTTON FUNCTION
  const clickHandler = () => {
    const meeting = { meeting_name: 'Test Meeting' }
    saveMeeting(meeting)
    .then(result => console.log("Meeting saved", result))
  }

  return <div className="container">
            <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
            <DisplayUsers />
            <div>
              {/* <div className="timer">{displayTime()} </div> */}
              {meetingInProgress && <Ticker /> }
              <div className="running cost">{/*  DISPLAY: running cost */}</div>
            </div>
            <div>
              <button onClick={(e) => handleClick()}>{meetingInProgress ? <p>Stop</p> : <p>Start</p>}</button>
              <Graph />
            </div>

{/* Test button */}
  <button onClick={clickHandler}>Click to save meeting</button>


  </div>
}


function mapStateToProps (globalstate) {
  return {
    currentMeeting: globalstate.currentMeeting

  }
}
export default connect(mapStateToProps)(Meeting)
