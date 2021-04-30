import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

import {logoutUser} from '../actions/auth'

function Nav ({auth, logout}) {
  const [burgerVisible, setBurgerVisible] = useState(false)

  const toggleBurger = () => {
    setBurgerVisible(currentBurgerState => {
      return !currentBurgerState
    })
  }

    return      <div className="navbar">
            { auth.isAuthenticated
              ? (
                <>
                  <Link to='/' className="navlink" onClick={() => logout()}>Logout</Link>
                  <Link to='/dashboard' className="navlink">Dashboard</Link>
                  <Link to='/meeting' className="navlink">New Meeting</Link>

                  </>
                )
              : (
                <>
                  <Link onClick={toggleBurger} className="navlink" to='/login'>Login</Link>
                  <Link onClick={toggleBurger} className="navlink" to='/register'>Register</Link>
                </>
              )
            }
          </div>

}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      const confirmSuccess = () => ownProps.history.push('/')
      dispatch(logoutUser(confirmSuccess))
    }
  }
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
