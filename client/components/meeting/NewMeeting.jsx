import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import AddAttendees from "./AddAttendees";

import { saveAttendees } from "../../apis/attendees"
import { fetchUsers } from "../../actions/users";
import {
  startMeeting,
  resetMeeting,
  addMeetingName
} from "../../actions/currentMeeting";
import { addMeeting } from "../../actions/meetings";
import { formatAttendees } from "../../utils/meeting"


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
  };

  const saveMeeting = () => {
    props.dispatch(addMeeting(props.currentMeeting))
      .then((res) => (saveAttendees(formatAttendees(res.id, props.currentMeeting))));
    props.dispatch(resetMeeting());
    props.dispatch(fetchUsers());
    setLocalMeetingName("")
  };

  const refresh = () => {
    props.dispatch(resetMeeting());
    setUsersInMeeting([])
    props.dispatch(fetchUsers());
    setLocalMeetingName("")
  };

  const handleChange = (e) => {
    setLocalMeetingName(e.target.value);
  };


  return (
    <>
      <div className="page-title">
        <h2>Start a new meeting!</h2>
      </div>

      <div className="meeting-page">

        <div className="meeting-controls">
          {props.isAuthenticated ?
            <div>

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
            :
            <span>Sorry, you need to be logged in to start a meeting.</span>
          }
        </div>

      </div>

    </>
  );
};

function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting,
    currentUsers: globalState.currentUsers,
    isAuthenticated: globalState.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(NewMeeting);
