import React from "react"
import { connect } from "react-redux"

import CurrentMeeting from "./CurrentMeeting"
import NewMeeting from "./NewMeeting"
import SaveMeeting from "./SaveMeeting"

const Meeting = (props) => {

  const meetingInProgress = props.currentMeeting.meetingInProgress
  const showSave = !props.currentMeeting.meetingInProgress && props.currentMeeting.end_time

  return (
    <>
      {props.isAuthenticated ?
        <div>

          {meetingInProgress ?
            <CurrentMeeting />
            :
            <>
              {showSave ?
                <SaveMeeting />
                :
                <NewMeeting />
              }
            </>
          }

        </div>
        :
        <h3>Sorry, you need to be logged in to start a meeting.</h3>
      }
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting,
    currentUsers: globalState.currentUsers,
    isAuthenticated: globalState.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(Meeting);