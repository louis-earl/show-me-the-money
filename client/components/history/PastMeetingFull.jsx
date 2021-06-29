import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { useParams } from 'react-router'

import { receiveMeetings } from '../../actions/meetings'
import DisplayAttendees from '../subcomponents/DisplayAttendees'
import DisplayTime from '../subcomponents/DisplayTime'

function PastMeetingFull(props) {
  const { id } = useParams()

  // Run when the auth is verified (we need to know the user id)
  useEffect(() => {
    if (props.isAuth)
      props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  let currentMeeting = null
  let runtime = null
  // if the meeting history has loaded
  if (props.meetingsHistory) {
    // find the single meeting we are looking for using the page id (/:params)
    currentMeeting = props.meetingsHistory.find((meeting) => meeting.id == id)
    if (currentMeeting) {
      runtime = currentMeeting.end_time - currentMeeting.start_time
    }
  }

  return (
    <>
      {currentMeeting &&
        <div>
          <h2>{currentMeeting.meeting_name}</h2>
          <p className="cost">${currentMeeting.cost.toFixed(2)}</p>
          <DisplayAttendees currentMeeting={currentMeeting} />
          {runtime &&
            <h3>Duration: <DisplayTime runtime={runtime} /></h3>
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
    isAuth: globalState.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(PastMeetingFull)
