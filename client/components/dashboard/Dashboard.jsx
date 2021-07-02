import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Graph from './Graph'
import RecentHistory from './RecentHistory'
import Statistics from './Statistics'

import { receiveMeetings } from '../../actions/meetings'

function Dashboard(props) {

  useEffect(() => {
    if (props.isAuth)
      props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  return (

    <div className="dashboard">

      {
        props.meetingsHistory.length > 0

          ? <>
            <RecentHistory />
            {props.meetingsHistory.length > 1 &&
              <Graph />
            }
            <Statistics />
          </>

          : <>
            <h2>Dashboard</h2>
            <p>
              You haven't participated in any meetings yet! Go on, <Link to="/meeting" className="link">give it a try.</Link>
            </p>
          </>
      }

    </div>

  )
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory,
    user: globalState.auth.user,
    isAuth: globalState.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(Dashboard)
