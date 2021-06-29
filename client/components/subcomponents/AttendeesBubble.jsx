import React from 'react'

function TimeBubble({ attendeeCount }) {

  return (

    <div className="columns">
      <img className="ticker__icon" src="./images/attendee.png" />
      <p className="ticker__info-text">
        {attendeeCount} Attendees
      </p>
    </div>

  )

}

export default TimeBubble
