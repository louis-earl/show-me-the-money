import React, { useState } from "react"
import { connect } from "react-redux"

import Ticker from "./Ticker"

import { endMeeting } from "../../actions/currentMeeting"

const CurrentMeeting = (props) => {

  const handleEnd = () => {
    props.dispatch(endMeeting())
  }

  return (
    <>

      <Ticker />

      <div className="columns columns--center">

        <button className="button--warning" onClick={(e) => handlePause()}>
          Pause
        </button>

        <button className="button--error" onClick={(e) => handleEnd()}>
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
