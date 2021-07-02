import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveMeetings } from '../../actions/meetings'
import PastMeetingSummary from '../dashboard/PastMeetingSummary'

function History(props) {

  useEffect(() => {
    if (props.isAuth)
      props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  const historyArr = props.meetingsHistory.slice(0).reverse()


  return <div className="history section">
    <div className="page-title">
      <h2>{props.user.first_name}'s Meeting History</h2>
    </div>
    {
      props.meetingsHistory.length > 0 ?
        <div className="dashboard__grid"> {

          historyArr.map((meeting) => {
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
    user: globalState.auth.user,
    isAuth: globalState.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(History)