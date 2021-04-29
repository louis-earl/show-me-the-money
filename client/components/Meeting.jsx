import React, { useState, useEffect } from 'react'
import {connect} from 'react-redux'
import Ticker from './Ticker'

import { saveMeeting } from '../apis/meetings'
import {startMeeting, endMeeting} from '../actions/currentMeeting'
import {addMeeting} from '../actions/meetings'

const Meeting = (props) => {


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
    const showSave = !props.currentMeeting.meetingInProgress && props.currentMeeting.endTime
    
    console.log(meetingInProgress)


  const [ runningTime, setRunningTime ] = useState(5652) // time in seconds !!!!! reset init state to zero for deployment

  

  const handleClick = () => {
    



    if (!meetingInProgress) {
    props.dispatch(startMeeting(attendees, meetingName))
    
    // {(startStop == false) && timer(true)}  dispatch start Meeting, send user object
    // {(startStop == true) && timer(false)}  dispatch stop Meeting, call thunk that dispatches meeting to db
    }
    else {
      
      props.dispatch(endMeeting())
      //change state of show Q

    }


  }

  // const endMeeting = () => {

  //   props.dispatch(endMeeting())


  // }

  // const startMeeting = () => {

  //   props.dispatch(startMeeting(attendees, meetingName))

  // }

  const saveMeeting = () => {
    props.dispatch(addMeeting(currentMeeting))
    
  }

  const refresh = () => {
    props.dispatch(resetMeeting())
  }

  return <div className="container">
    <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2> 
    <ul>
      {/*  MAP THROUGH EMPLOYEES DISPLAY IN li/button*/}
    </ul>
    <div>
      {/* <div className="timer">{displayTime()} </div> */}
      {meetingInProgress && <Ticker /> }
      <div className="running cost">{/*  DISPLAY: running cost */}</div>
    </div>

    {!showSave
    ?
    
      <button onClick={(e) => handleClick()}>{meetingInProgress ? <p>End</p> : <p>Start</p>}</button>
    :
    <div>
    <button onClick={saveMeeting}>
      Save meeting? 
    </button>
     <button onClick={refresh}>
     don't save meeting? 
   </button>
   </div>
    }

    {/* {!showSave &&
    meetingInProgress 
    ? <div>
      <button onClick={endMeeting()}>End</button>
    </div>
  : <button onClick={startMeeting()}>Start</button>
    }
  
  {showSave 
  ? <div>
    <button onClick={saveMeeting()}>Save Meeting?</button>
    <button onClick={refresh()}>No, save</button>
  </div>

  : null
  }
      
    </div>
  // </div> */}

</div>
}

function mapStateToProps (globalstate) {
  return {
    currentMeeting: globalstate.currentMeeting

  }
}
export default connect(mapStateToProps)(Meeting)
