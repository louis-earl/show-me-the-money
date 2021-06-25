import React, { useState } from "react"
import { connect } from "react-redux"

import Ticker from "./Ticker"
import AddAttendees from "./AddAttendees"

import { endMeeting } from "../../actions/currentMeeting"

const CurrentMeeting = (props) => {

  const currentMeeting = props.currentMeeting
  const [usersInMeeting, setUsersInMeeting] = useState([])

  const handleClick = () => {
    props.dispatch(endMeeting())
  }

  return (
    <>
      <div className="page-title">
        <h2>{currentMeeting.name}</h2>
      </div>

      <Ticker />

      <AddAttendees usersInMeeting={usersInMeeting} setUsersInMeeting={setUsersInMeeting} />

      <div className="columns">
        <button className="button--warning" onClick={(e) => handleClick()}>
          End Meeting
        </button>
      </div>

    </>
  )
}

function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting,
    currentUsers: globalState.currentUsers,
  }
}
export default connect(mapStateToProps)(CurrentMeeting)
