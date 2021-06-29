import React from "react"
import { connect } from "react-redux"

import { saveAttendees } from "../../apis/attendees"
import { fetchUsers } from "../../actions/users"
import { resetMeeting } from "../../actions/currentMeeting"
import { addMeeting } from "../../actions/meetings"
import { formatAttendees } from "../../utils/meeting"

const SaveMeeting = (props) => {

  const saveMeeting = () => {
    props.dispatch(addMeeting(props.currentMeeting))
      .then((res) => (saveAttendees(formatAttendees(res.id, props.currentMeeting))))
      refresh()
  }

  const refresh = () => {
    props.dispatch(resetMeeting())
    props.dispatch(fetchUsers())
  }

  return (
    <div>
      <h3>Save {props.currentMeeting.meeting_name}?</h3>
      <button onClick={saveMeeting}>Yeah!</button>
      <button className="button--warning" onClick={refresh}>Nah</button>
    </div>
  )
}

function mapStateToProps(globalState) {
  return {
    currentMeeting: globalState.currentMeeting,
  }
}
export default connect(mapStateToProps)(SaveMeeting)