import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { loginError, registerUserRequest } from '../../actions/auth'

function Register(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    username: '',
    first_name: '',
    last_name: '',
    hourly_wage: '',
    password: '',
    confirm_password: ''
  })

  useEffect(() => {
    props.dispatch(loginError(''))
  }, [])

  const handleChange = (e) => {
    setFormData((currentFormData) => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    e.target.reset()
    let { username, password, confirm_password, first_name, last_name, hourly_wage } = formData
    hourly_wage = parseFloat(hourly_wage).toFixed(2)
    if (confirm_password != password) return props.dispatch(loginError("Passwords don't match"))

    const confirmSuccess = () => { 
      if (props.location.pathname != "/") props.history.push('/') 
    }

    props.dispatch(registerUserRequest({ username, password, first_name, last_name, hourly_wage }, confirmSuccess))
  }

  return (
    <form className="form box" onSubmit={handleSubmit}>
      <h2>Create Account</h2>
      <p>Welcome, let's get started!</p>


      <br />

      {auth.errorMessage &&
        <span className="error">{auth.errorMessage}</span>
      }

      <div className="columns columns--input">
        <input required placeholder="User Name" type="text" name="username" autoComplete="username" onChange={handleChange} value={formData.username} />
      </div>

      <div className="columns columns--input">
        <input required placeholder="First Name" type="text" name="first_name" onChange={handleChange} value={formData.first_name} />

        <input required placeholder="Last Name" type="text" name="last_name" onChange={handleChange} value={formData.last_name} />
      </div>

      <br />

      <div className="columns columns--input">
        <input required placeholder="Wage" type="number" name="hourly_wage" onChange={handleChange} value={formData.hourly_wage} />
      </div>

      <br />

      <div className="columns columns--input">
        <input required placeholder="Password" type="password" name="password" autoComplete="new-password" onChange={handleChange} value={formData.password} />

        <input required placeholder="Confirm Password" type="password" name="confirm_password" autoComplete="new-password" onChange={handleChange} value={formData.confirm_password} />
      </div>

      <br />

      <div className="columns columns--input">
        <input value="Register" type="submit" />
      </div>

      <p>Already have an account? <Link to='/login' className="link">Sign In</Link></p>


    </form>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(Register)
