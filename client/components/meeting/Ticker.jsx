import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { tickOneSecond } from '../../actions/currentMeeting'
import DisplayTime from '../subcomponents/DisplayTime'

function Ticker(props) {
  const [seconds, setSeconds] = useState(0)
  const cost = props.currentMeeting.cost

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      props.dispatch(tickOneSecond())
    }, 1000)
    return () => { clearInterval(interval) }
  }, [])

  return (
    <div className="ticker__wrapper">

      <div className="ticker__ring">
        <div className="ticker">
          <p className="ticker__meeting-name">{props.currentMeeting.meeting_name || "My Awesome Meeting"}</p>
          <p className="ticker__meeting-cost">${cost.toFixed(2)} </p>
          <p className="ticker__budget">of $100.00</p>

          <div className="ticker__info-wrapper columns">
            <img className="ticker__icon" src="./images/time.png" />
            <p className="ticker__info-text"><DisplayTime runtime={seconds * 1000} /></p>
          </div>

          <div className="ticker__info-wrapper columns">
            <img className="ticker__icon" src="./images/attendee.png" />
            <p className="ticker__info-text">{props.currentMeeting.attendee_count} Attendees</p>
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
