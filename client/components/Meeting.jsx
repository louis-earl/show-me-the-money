import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import Ticker from './Ticker'
import DisplayUsers from './DisplayUsers'

import { saveMeeting } from '../apis/meetings'
import { fetchUsers }  from '../actions/users'
import {startMeeting, endMeeting, resetMeeting} from '../actions/currentMeeting'
import {addMeeting} from '../actions/meetings'

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
    const showSave = !props.currentMeeting.meetingInProgress && props.currentMeeting.end_time
    
    console.log(meetingInProgress)



  const handleClick = () => {
    



    if (!meetingInProgress) {
    props.dispatch(startMeeting(attendees, meetingName))
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
    props.dispatch(addMeeting(props.currentMeeting))
    
  }

  const refresh = () => {
    props.dispatch(resetMeeting())
    props.dispatch(fetchUsers())
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
