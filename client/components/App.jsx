import React, { useEffect } from 'react'
import { HashRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

import Landing from './landing/Landing'
import Login from './landing/Login'
import Register from './landing/Register'
import Nav from './Nav'
import Meeting from './meeting/Meeting'
import Dashboard from './dashboard/Dashboard'
import PastMeetingFull from './history/PastMeetingFull'
import History from './history/History'

import { checkAuth } from '../actions/auth'
import NotFound from './NotFound'

function App({ auth, dispatch }) {

  useEffect(() => {
    const confirmSuccess = () => { }
    dispatch(checkAuth(confirmSuccess))
  }, [])

  return (
    <Router>

      <div className="header">
        <Link to='/' className="link title__link">
          <h1 className="title">$how Me The Money</h1>
        </Link>
      </div>
      <Route path="/" component={Nav} />

      <div className="content__wrapper">
        <div className="content">

          {auth.isAuthenticated ?
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route exact path="/dashboard" component={Dashboard} />
              <Route path="/meeting" component={Meeting} />
              <Route path="/past-meeting/:id" component={PastMeetingFull} />
              <Route path="/history" component={History} />
              <Route component={NotFound} />
            </Switch>
            :
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route component={NotFound} />
            </Switch>
          }

        </div>
      </div>

    </Router>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)
