import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveMeetings } from '../actions/meetings'
import PastMeetingSummary from './PastMeetingSummary'

function History(props) {


  useEffect(() => {
    props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  return <div className="container">
    <h2 className="title is-2">{props.user.first_name}'s Meeting history:</h2>
    {
      props.meetingsHistory ?
      props.meetingsHistory.map((meeting) => {
        return <PastMeetingSummary key={meeting.id} meeting={meeting} />
      })
      :
      <h3>You haven't participated in any meetings yet! Go on, <Link to="/meeting">give it a try.</Link></h3>
    }
  </div>
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory,
    user: globalState.auth.user
  }
}

export default connect(mapStateToProps)(History)
