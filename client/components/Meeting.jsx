
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";

import Ticker from "./Ticker";
import DisplayUsers from "./DisplayUsers";

import { saveMeeting } from "../apis/meetings";
import { fetchUsers } from "../actions/users";
import {
  startMeeting,
  endMeeting,
  resetMeeting,
  addMeetingName,
} from "../actions/currentMeeting";
import { addMeeting } from "../actions/meetings";
import Graph from './Graph'


const Meeting = (props) => {
  const [localMeetingName, setLocalMeetingName] = useState("");


    useEffect (() => {
      props.isAuthenticated && (
      props.dispatch(fetchUsers()))
    },[])

  const meetingInProgress = props.currentMeeting.meetingInProgress;
  const showSave =
    !props.currentMeeting.meetingInProgress && props.currentMeeting.end_time;

  const handleClick = () => {
    if (!meetingInProgress) {
      props.dispatch(startMeeting(props.currentUsers, localMeetingName));
    } else {
      props.dispatch(endMeeting());
      //change state of show Q
    }
  };

  const saveMeeting = () => {
    props.dispatch(addMeeting(props.currentMeeting));
    props.dispatch(resetMeeting());
    props.dispatch(fetchUsers());
  };

  const refresh = () => {
    props.dispatch(resetMeeting());
    props.dispatch(fetchUsers());
  };

  const handleChange = (e) => {
    setLocalMeetingName(e.target.value);
  };
  // TEST BUTTON FUNCTION


  return (
    <div className="container">
        {props.isAuthenticated ? (<div>
      <h2 className="title is-2">Meeting: {/* DISPLAY MEETING ID */}</h2>
      <DisplayUsers />
      <div>
        {meetingInProgress && <Ticker />}
        <div className="running cost">{/*  DISPLAY: running cost */}</div>
      </div>

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
