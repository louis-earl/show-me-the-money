import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { tickOneSecond } from '../../actions/currentMeeting'
import TimeBubble from '../subcomponents/TimeBubble'
import AttendeesBubble from '../subcomponents/AttendeesBubble'

function Ticker(props) {
  const [seconds, setSeconds] = useState(0)
  const cost = props.currentMeeting.cost

  useEffect(() => {

    // if meeting already in progress, use those details instead 
    if (props.currentMeeting.meetingInProgress) {
      const runTime = (Date.now() - props.currentMeeting.start_time) / 1000
      setSeconds(runTime)
      props.dispatch(tickOneSecond())
    }

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      props.dispatch(tickOneSecond())
    }, 1000)
    return () => { clearInterval(interval) }
  }, [])

  return (
    <div className="ring__wrapper">

      <div className="ticker__ring">
        <div className="ticker">
          <p className="ticker__meeting-name">{props.currentMeeting.meeting_name || "My Awesome Meeting"}</p>
          <p className="ticker__meeting-cost">${cost.toFixed(2)} </p>
          <p className="ticker__budget">of $100.00</p>

          <div className="ticker__info-wrapper">

            <TimeBubble time={seconds * 1000} />

            <AttendeesBubble attendeeCount={props.currentMeeting.attendee_count} />

          </div>
        </div>
      </div>

    </div>
  )
}


function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting

  }
}
export default connect(mapStateToProps)(Ticker)
