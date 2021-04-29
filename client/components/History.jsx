import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { receiveMeetings } from '../actions/meetings'
import PastMeetingSummary from './PastMeetingSummary'

function History(props) {


  useEffect(() => {
    props.dispatch(receiveMeetings())
  }, [])

  return <div className="container">
    <h2 className="title is-2">Meeting history</h2>
    {
      props.meetingsHistory &&
      props.meetingsHistory.map((meeting) => {
        return <PastMeetingSummary key={meeting.id} meeting={meeting} />
      })
    }
  </div>
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory
  }
}

export default connect(mapStateToProps)(History)
