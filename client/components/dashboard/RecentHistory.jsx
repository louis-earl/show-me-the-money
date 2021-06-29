import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveMeetings } from '../../actions/meetings'
import PastMeetingSummary from './PastMeetingSummary'

function RecentHistory(props) {

  useEffect(() => {
    if (props.isAuth)
      props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  return <div className="history section">
    <div className="page-title">
      <h2>{props.user.first_name}'s Recent Meetings</h2>
    </div>
    {
      props.meetingsHistory.length > 0 ?
        <div className="recent-history__grid"> {

          props.meetingsHistory.map((meeting, index) => {
            if (index < 5)
              return <PastMeetingSummary key={meeting.id} meeting={meeting} />
          })}

          <div className="recent-history__buttons">
            <Link to="/meeting">
                <div className="card">
                  <h3>Add New Meeting</h3>
              </div>
            </Link>
  
            <Link to="/history">
                <div className="card">
                  <h3>See All Meetings</h3>
                </div>
            </Link>
          </div>

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
    user: globalState.auth.user,
    isAuth: globalState.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(RecentHistory)