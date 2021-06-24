import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import { saveMeeting } from "../../apis/meetings"
import { saveAttendees } from "../../apis/attendees"
import { fetchUsers } from "../../actions/users"
import {
  startMeeting,
  endMeeting,
  resetMeeting,
  addMeetingName,
} from "../../actions/currentMeeting"
import { addMeeting } from "../../actions/meetings"

import { formatAttendees } from "../../utils/meeting"

import CurrentMeeting from "./CurrentMeeting"
import NewMeeting from "./NewMeeting"


const Meeting = (props) => {
  const [usersInMeeting, setUsersInMeeting] = useState([])
  const [localMeetingName, setLocalMeetingName] = useState("")
  const [isNameError, setIsNameError] = useState(false)


  useEffect(() => {
    props.dispatch(fetchUsers())
  }, [])

  const meetingInProgress = props.currentMeeting.meetingInProgress
  const showSave = !props.currentMeeting.meetingInProgress && props.currentMeeting.end_time

  const handleClick = () => {
    if (localMeetingName !== "") {
      setIsNameError(false)

      if (!meetingInProgress) {
        props.dispatch(startMeeting(props.currentUsers, localMeetingName));
      }
      else {
        props.dispatch(endMeeting());
      }

    }
    else {
      setIsNameError(true)
    }
  }

  const saveMeeting = () => {
    props.dispatch(addMeeting(props.currentMeeting))
      .then((res) => (saveAttendees(formatAttendees(res.id, props.currentMeeting))));
    props.dispatch(resetMeeting());
    props.dispatch(fetchUsers());
    setLocalMeetingName("")
  }

  const refresh = () => {
    props.dispatch(resetMeeting());
    setUsersInMeeting([])
    props.dispatch(fetchUsers());
    setLocalMeetingName("")
  }

  const handleChange = (e) => {
    setLocalMeetingName(e.target.value);
  }

  return (
    <>
      {props.isAuthenticated ?
        <div>

          {meetingInProgress ?
            <CurrentMeeting />
            :
            <>
              {showSave ?

                <div>
                  <button onClick={saveMeeting}>Save meeting?</button>
                  <button className="button--warning" onClick={refresh}>Nah</button>
                </div>

                :
                <NewMeeting />
              }
            </>
          }

        </div>
        :
        <span>Sorry, you need to be logged in to start a meeting.</span>
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