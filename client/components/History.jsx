import React, { useEffect } from 'react'
import { connect } from 'react-redux'

import { receiveMeetings } from '../actions/meetingsHistory'

function History(props) {


  useEffect(() => {
    props.dispatch(receiveMeetings())
  }, [])

  return <div className="container">
    <h2 className="title is-2">Meeting history</h2>
    {
      props.meetingsHistory &&
      <p>I have past meetings!</p>
    }
  </div>
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory
  }
}

export default connect(mapStateToProps)(History)
