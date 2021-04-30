import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Ticker from './Ticker'
import DisplayUsers from './DisplayUsers'

import { saveMeeting } from '../apis/meetings'
import { fetchUsers }  from '../actions/users'
import {startMeeting, endMeeting} from '../actions/currentMeeting'

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
  return  <>
            <div className="page-title">
              <h2>Start a new meeting! {/* DISPLAY MEETING ID */}</h2> 
            </div>

            <div className="meeting-page">
            
            <DisplayUsers />

              <div className="meeting-controls">
                  
                  <button onClick={(e) => handleClick()}>{meetingInProgress ? <p>Click to stop meeting</p> : <p>Click to start meeting</p>}</button>
                <div className="running-cost">
                  {/* <div className="timer">{displayTime()} </div> */}
                  {meetingInProgress && <Ticker /> }
                </div>
  
  
  
  {/* Test button */}
    <button onClick={clickHandler}>Click to save meeting</button>
    </div>
            </div>
  </>
}


function mapStateToProps (globalstate) {
  return {
    currentMeeting: globalstate.currentMeeting

  }
}
export default connect(mapStateToProps)(Meeting)
