import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { receiveMeetings } from '../actions/meetings'

function PastMeetingSummary(props) {
    const {meetingName, cost} = props.meeting

  return <div className="container">
    <h3 className="title is-3">{meetingName}</h3>
    <p>Cost: {cost}</p>
  </div>
}


export default PastMeetingSummary
