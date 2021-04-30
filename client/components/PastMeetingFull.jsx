import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router';

import { receiveMeetings } from '../actions/meetings'
import Attendees from './Attendees';
import DisplayTime from './DisplayTime';

function PastMeetingFull(props) {
  const { id } = useParams();

  // Run when the auth is verified (we need to know the user id)
  useEffect(() => {
    props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  let currentMeeting = null
  let runtime = null
  // if the meeting history has loaded
  if (props.meetingsHistory) {
    // find the single meeting we are looking for using the page id (/:params)
    currentMeeting = props.meetingsHistory.find((meeting) => meeting.id == id)
    if (currentMeeting) {
    console.log(currentMeeting)
    runtime = currentMeeting.end_time - currentMeeting.start_time
    }
  }




  return (
    <>
      {currentMeeting &&
        <div>
          <h2 className="title is-2">{currentMeeting.meeting_name}</h2>
          <h3 className="title is-3">Cost: ${currentMeeting.cost}</h3>
          <Attendees currentMeeting={currentMeeting} />
          {runtime &&
            <h3 className="title is-3">Duration: <DisplayTime runtime={runtime} /></h3>
          }
        </div>
      }
    </>
  )
}


function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory,
    user: globalState.auth.user,
  }
}

export default connect(mapStateToProps)(PastMeetingFull)
