import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import AddAttendees from "./AddAttendees";

import { fetchUsers } from "../../actions/users";
import { startMeeting } from "../../actions/currentMeeting";

const NewMeeting = (props) => {
  const [usersInMeeting, setUsersInMeeting] = useState([])
  const [localMeetingName, setLocalMeetingName] = useState("")
  const [isNameError, setIsNameError] = useState(false)

  useEffect(() => {
    props.dispatch(fetchUsers())
  }, [])

  const handleClick = () => {
    if (localMeetingName !== "") {
      setIsNameError(false)
      props.dispatch(startMeeting(props.currentUsers, localMeetingName));
    }
    else {
      setIsNameError(true)
    }
  }

  const handleChange = (e) => {
    setLocalMeetingName(e.target.value);
  }

  return (
    <>
      <div className="page-title">
        <h2>Start a new meeting!</h2>
      </div>

      <div className="meeting-page">

        <p>What would you like to call your awesome meeting?</p>

        {isNameError && <p className="error">Meeting name required</p>}

        <div className="columns">
          <input
            required
            className="meeting"
            placeholder="Meeting Name"
            type="text"
            name="meeting_name"
            onChange={handleChange}
          />
        </div>

        <AddAttendees usersInMeeting={usersInMeeting} setUsersInMeeting={setUsersInMeeting} />

        <div className="columns">
          <button onClick={(e) => handleClick()}>
            Start Meeting
          </button>
        </div>

      </div>
    </>
  )
}

function mapStateToProps(globalState) {
  return {
    currentUsers: globalState.currentUsers,
  }
}
export default connect(mapStateToProps)(NewMeeting);
