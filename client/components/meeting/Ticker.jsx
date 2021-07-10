import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'

import { tickOneSecond } from '../../actions/currentMeeting'
import TimeBubble from '../subcomponents/TimeBubble'
import AttendeesBubble from '../subcomponents/AttendeesBubble'

function Ticker(props) {
  const [seconds, setSeconds] = useState(0)
  const cost = props.currentMeeting.cost

  useEffect(() => {

    // Adjust ticker size on mount and on window resize
    adjustTickerSize()

    window.onresize = () => {
      adjustTickerSize()
    }

    // if meeting already in progress, use those details instead 
    if (props.currentMeeting.meetingInProgress) {
      const runTime = Math.round(Date.now() / 1000) - props.currentMeeting.start_time
      setSeconds(runTime)
      props.dispatch(tickOneSecond())
    }

    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1)
      props.dispatch(tickOneSecond())
    }, 1000)

    return () => {
      clearInterval(interval)
      window.onresize = null
    }
  }, [])

  function adjustTickerSize() {
    const tickerRing = document.getElementById("ring--ticker");
    const size = tickerRing.clientWidth
    tickerRing.style.paddingBottom = size.toString() + "px"
  }

  return (

    <div id="ring--ticker" className="ring ring--ticker">
      <div className="circle circle--ticker">
        <div className="circle__content circle__content--ticker">
          <p className="ticker__meeting-name">{props.currentMeeting.meeting_name || "My Awesome Meeting"}</p>
          <p className="ticker__meeting-cost">${cost.toFixed(2)} </p>
          <div className="ticker__budget-wrapper">
            <p className="ticker__budget">of $100.00</p>
          </div>

          <div className="ticker__info-wrapper">

            <div>
              <TimeBubble time={seconds} />
              <AttendeesBubble attendeeCount={props.currentMeeting.attendee_count} />
            </div>
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
