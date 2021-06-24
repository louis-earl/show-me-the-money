import React, { useState } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'
import { loginUser, loginError } from "../actions/auth"

function Login(props) {
  const { auth } = props

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e) => {
    setFormData(currentFormData => {
      return {
        ...currentFormData,
        [e.target.name]: e.target.value,
      }
    })
  }


  const handleSubmit = (e) => {
    e.preventDefault()
    let { username, password } = formData
    const confirmSuccess = () => {
      props.history.push("/")
    }
    props.dispatch(loginUser({ username, password }, confirmSuccess))
  }

  return (
    <form className="form box" onSubmit={handleSubmit}>
      <h2>Kia Ora!</h2>
      <p>Please sign in to continue.</p>

      <br />

      {auth.errorMessage && (
        <span className="error">{auth.errorMessage}</span>
      )}

      <div className="columns">
        <input
          required
          placeholder="Username"
          type="text"
          name="username"
          autoComplete="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="columns">
        <input
          required
          placeholder="Password"
          type="password"
          name="password"
          autoComplete="current-password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <br />

      <div className="columns">
        <input
          className="button"
          value="Sign In"
          type="submit"
        />
      </div>

      <p>Don't have an account? <Link to='/register' className="link">Register</Link></p>

    </form>
  )
}

const mapStateToProps = ({ auth }) => {
  return {
    auth,
  }
}

export default connect(mapStateToProps)(Login)
