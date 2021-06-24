import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveMeetings } from '../actions/meetings'
import PastMeetingSummary from './PastMeetingSummary'

function History(props) {


  useEffect(() => {
    props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])



  return <div className="history section">
    <div className="page-title">
      <h2>{props.user.first_name}'s meeting history</h2>
    </div>
    {
      props.meetingsHistory.length > 0 ?
        <div className="history__grid"> {
          props.meetingsHistory.map((meeting) => {
            return <PastMeetingSummary key={meeting.id} meeting={meeting} />
          })}
        </div>
        :
        <p>
          You haven't participated in any meetings yet! Go on, <Link to="/meeting" className="link">give it a try.</Link>
        </p>
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
