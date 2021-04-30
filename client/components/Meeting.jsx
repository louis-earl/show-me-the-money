import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Ticker from "./Ticker";
import DisplayUsers from "./DisplayUsers";

import { saveMeeting } from "../apis/meetings";
import { saveAttendees } from "../apis/attendees"
import { fetchUsers } from "../actions/users";
import {
  startMeeting,
  endMeeting,
  resetMeeting,
  addMeetingName,
} from "../actions/currentMeeting";
import { addMeeting } from "../actions/meetings";
import Graph from './Graph'

import { formatAttendees } from "../utils/meeting"


const Meeting = (props) => {
  const [usersInMeeting, setUsersInMeeting] = useState([])
  const [localMeetingName, setLocalMeetingName] = useState("");


    useEffect (() => {
      // props.isAuthenticated && (
      props.dispatch(fetchUsers())
    },[])

  const meetingInProgress = props.currentMeeting.meetingInProgress;
  const showSave =
    !props.currentMeeting.meetingInProgress && props.currentMeeting.end_time;

  const handleClick = () => {
    if (localMeetingName !== "") {
    if (!meetingInProgress) {
      props.dispatch(startMeeting(props.currentUsers, localMeetingName));
    } else {
      props.dispatch(endMeeting());
      //change state of show Q
    }
  } else {
    alert("Enter Meeting Name!")
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
  // TEST BUTTON FUNCTION


  return (
    <>
            <div className="page-title">
              <h2>Start a new meeting! {/* DISPLAY MEETING ID */}</h2> 
            </div>

            <div className="meeting-page">

      <div className="meeting-controls">
        {props.isAuthenticated ? (<div>

      <DisplayUsers usersInMeeting={usersInMeeting} setUsersInMeeting={setUsersInMeeting}/>


      
        {meetingInProgress && <Ticker />}
        <div className="running cost">{/*  DISPLAY: running cost */}</div>
      

      {!showSave ? (
        <>
          <input
            required
            className="meeting"
            placeholder="awesome meeting"
            type="text"
            name="meeting_name"
            onChange={handleChange}
          />
          <button onClick={(e) => handleClick()}>
            {meetingInProgress ? <p>End Meeting</p> : <p>Start Meeting</p>}
          </button>
        </>
      ) : (
        <div>
          <button onClick={saveMeeting}>Save meeting?</button>
          <button onClick={refresh}>don't save meeting?</button>
        </div>
      )}
      </div>) : (<span>Sorry, you need to be logged in to start a meeting.</span>)}
      </div>
      
      </div>

    </>
  );
};

function mapStateToProps(globalstate) {
  return {
    currentMeeting: globalstate.currentMeeting,
    currentUsers: globalstate.currentUsers,
    isAuthenticated: globalstate.auth.isAuthenticated
  };
}
export default connect(mapStateToProps)(Meeting);
