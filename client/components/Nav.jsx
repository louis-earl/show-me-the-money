import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

function Nav({ auth, isMeeting, logout, location }) {

  useEffect(() => {
    window.onscroll = function () { checkNav() }

    var navbar = document.getElementById("navbar")
    var sticky = navbar.offsetTop

    function checkNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("nav__wrapper--sticky")
      }
      else {
        navbar.classList.remove("nav__wrapper--sticky")
      }
    }
  }, [])

  const navPath = location.pathname
  const isLogin = navPath == "/login"
  const isLanding = navPath == "/"
  const isHistory = navPath == "/history" || navPath.includes("/past-meeting")
  const isDashboard = navPath == "/dashboard" || navPath == "/"

  return (
    <div id="navbar" className="nav__wrapper">
      <nav>
        {auth.isAuthenticated
          ? (
            <ul className="nav__list">

              <li className={"nav__item" + (isDashboard ? " nav-current" : "")}>
                <Link to='/dashboard' className="nav__link">Dashboard</Link>
              </li>

              <li className=
                {"nav__item"
                  + (navPath == "/meeting" ? " nav-current" : "")
                  + (isMeeting ? " nav-is-meeting" : "")
                }>
                <Link to='/meeting' className="nav__link">
                  {isMeeting ? "Meeting In Progress" : "New Meeting"}
                </Link>
              </li>

              <li className={"nav__item" + (isHistory ? " nav-current" : "")}>
                <Link to='/history' className="nav__link">History</Link>
              </li>

              <li className="nav__item" id="log-out">
                <Link to="/" className="nav__link" onClick={() => logout()}>Logout</Link>
              </li>

            </ul>
          )
          : (
            <ul className="nav__list">

              <li className={"nav__item" + (isLanding ? " nav-current" : "")}>
                <Link className="nav__link" to='/'>About</Link>
              </li>

              <li className={"nav__item" + (isLogin ? " nav-current" : "")}>
                <Link className="nav__link" to='/login'>Login</Link>
              </li>

              <li className={"nav__item" + (navPath == "/register" ? " nav-current" : "")}>
                <Link className="nav__link" to='/register'>Register</Link>
              </li>



            </ul>
          )
        }
      </nav>
    </div>
  )

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => {
        if (ownProps.location.pathname != "/") ownProps.history.push("/")
      }
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

const mapStateToProps = ({ auth, currentMeeting }) => {
  return {
    auth,
    isMeeting: currentMeeting.meetingInProgress
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
