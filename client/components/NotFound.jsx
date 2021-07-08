import React from 'react'
import { Link } from 'react-router-dom'

function NotFound() {

  return (
    <div>
      <h2>Oops, that page couldn't be found!</h2>
      <p>Something seem wrong?</p>
      <ul>
        <li>Make sure the URL is correct</li>
        <li>Check your internet connection</li>
        <li>Have you forgotten to <Link to='/login' className="link">Sign In</Link>?</li>
      </ul>
    </div>
  )
}

export default NotFound
