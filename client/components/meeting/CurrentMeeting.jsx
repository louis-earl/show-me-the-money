import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Ticker from "./Ticker";
import AddAttendees from "./AddAttendees";

import { saveMeeting } from "../../apis/meetings";
import { saveAttendees } from "../../apis/attendees"
import { fetchUsers } from "../../actions/users";
import {
  startMeeting,
  endMeeting,
  resetMeeting,
  addMeetingName,
} from "../../actions/currentMeeting";
import { addMeeting } from "../../actions/meetings";

import { formatAttendees } from "../../utils/meeting"


const CurrentMeeting = (props) => {

  const currentMeeting = props.currentMeeting
  const [usersInMeeting, setUsersInMeeting] = useState([])

  const showSave = !currentMeeting.meetingInProgress && currentMeeting.end_time

  const handleClick = () => {
    props.dispatch(endMeeting());
  }

  const saveMeeting = () => {
    props.dispatch(addMeeting(currentMeeting))
      .then((res) => (saveAttendees(formatAttendees(res.id, currentMeeting))));
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


  return (
    <>
      <div className="page-title">
        <h2>{currentMeeting.name}</h2>
      </div>

      <div className="meeting-page">

        <div className="meeting-controls">


          <Ticker />

            <>
              <AddAttendees usersInMeeting={usersInMeeting} setUsersInMeeting={setUsersInMeeting} />

              <div className="columns">

                <button className="button--warning" onClick={(e) => handleClick()}>
                  End Meeting
                </button>

              </div>

            </>
 

        </div>

      </div>

    </>
  );
};

function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting,
    currentUsers: globalState.currentUsers,
  }
}
export default connect(mapStateToProps)(CurrentMeeting);
