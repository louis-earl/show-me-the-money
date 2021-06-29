import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { logoutUser } from '../actions/auth'

function Nav({ auth, logout, location }) {
  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible(currentBurgerState => {
      return !currentBurgerState
    })
  }

  useEffect(() => {
    window.onscroll = function () { checkNav() };

    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;

    function checkNav() {
      if (window.pageYOffset >= sticky) {
        navbar.classList.add("nav__wrapper--sticky")
      }
      else {
        navbar.classList.remove("nav__wrapper--sticky");
      }
    }
  }, [])

  const navPath = location.pathname

  return (
    <div id="navbar" className="nav__wrapper">
      <nav>
        {auth.isAuthenticated
          ? (
            <ul className="nav__list">

              <li className={"nav__item" + (navPath == "/dashboard" ? " nav-current" : "")}>
                <Link to='/dashboard' className="nav__link">Dashboard</Link>
              </li>

              <li className={"nav__item" + (navPath == "/meeting" ? " nav-current" : "")}>
                <Link to='/meeting' className="nav__link">New Meeting</Link>
              </li>

              <li className={"nav__item" + (navPath == "/history" ? " nav-current" : "")}>
                <Link to='/history' className="nav__link">History</Link>
              </li>

              <li className="nav__item" id="log-out">
                <Link to='/' className="nav__link" onClick={() => logout()}>Logout</Link>
              </li>

            </ul>
          )
          : (
            <ul className="nav__list">
              <li className="nav__item">
                <Link onClick={toggleBurger} className="nav__link" to='/login'>Login</Link>
              </li>
              <li className="nav__item">
                <Link onClick={toggleBurger} className="nav__link" to='/register'>Register</Link>
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
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
