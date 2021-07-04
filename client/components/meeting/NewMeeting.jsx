import React, { useState, useEffect } from "react"
import { connect } from "react-redux"

import AddAttendees from "./AddAttendees"

import { fetchUsers } from "../../actions/users"
import { startMeeting } from "../../actions/currentMeeting"

const NewMeeting = (props) => {
  const [usersInMeeting, setUsersInMeeting] = useState([])
  const [localName, setLocalName] = useState("")
  const [localBudget, setLocalBudget] = useState(0)
  const [nameErrorMessage, setNameErrorMessage] = useState("")
  const [attendeeErrorMessage, setAttendeeErrorMessage] = useState("")

  useEffect(() => {
    props.dispatch(fetchUsers())
  }, [])

  const handleClick = () => {
    let canStart = true
    if (localName == "") {
      setNameErrorMessage("Meeting name required")
      canStart = false
    }
    else if (localName.length <= 3) {
      setNameErrorMessage("Meeting name must be longer than 3 characters")
      canStart = false
    }
    else {
      setNameErrorMessage("")
    }

    if (usersInMeeting.length == 0) {
      setAttendeeErrorMessage("Meeting must have at least one attendee")
      canStart = false
    }
    else {
      setAttendeeErrorMessage("")
    }
    
    if (canStart) {
      props.dispatch(startMeeting(props.currentUsers, localName))
    }
  }

  const handleNameChange = (e) => {
    setLocalName(e.target.value)
  }

  const handleBudgetChange = (e) => {
    setLocalBudget(e.target.value)
  }

  return (
    <>
      <div className="page-title">
        <h2>Start a new meeting!</h2>
      </div>

      <div className="meeting-page">

        <p>What would you like to call your awesome meeting?</p>

        {nameErrorMessage && <p className="error">{nameErrorMessage}</p>}

        <div className="columns">
          <input
            required
            placeholder="Meeting Name"
            type="text"
            name="meeting_name"
            onChange={handleNameChange}
          />
        </div>

        <p>Optionally, you can set a budget for your meeting:</p>

        <div className="columns">
          <input
            required
            placeholder="Budget"
            type="number"
            name="budget"
            onChange={handleBudgetChange}
          />
        </div>

        <p>Who would you like to invite to your meeting? Click to add attendees.</p>

        {attendeeErrorMessage && <p className="error">{attendeeErrorMessage}</p>}

        <AddAttendees usersInMeeting={usersInMeeting} setUsersInMeeting={setUsersInMeeting} />

        <div className="columns columns--input">
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
export default connect(mapStateToProps)(NewMeeting)
