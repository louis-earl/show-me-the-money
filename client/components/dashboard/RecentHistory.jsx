import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import PastMeetingSummary from './PastMeetingSummary'

function RecentHistory(props) {

  const recentHistoryArr = props.meetingsHistory.slice(0).reverse()

  return <div className="history section">
    <div className="page-title">
      <h2>{props.user.first_name}'s Recent Meetings</h2>
    </div>

    <div className="dashboard__grid">

      {
        recentHistoryArr.map((meeting, index) => {
          if (index < 5)
            return <PastMeetingSummary key={meeting.id} meeting={meeting} />
        })
      }

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

  </div>
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory,
    user: globalState.auth.user,
  }
}

export default connect(mapStateToProps)(RecentHistory)