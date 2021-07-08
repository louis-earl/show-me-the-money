import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { receiveMeetings } from '../../actions/meetings'
import PastMeetingSummary from '../dashboard/PastMeetingSummary'

function History(props) {

  useEffect(() => {
    if (props.isAuth)
      props.dispatch(receiveMeetings(props.user.id))
  }, [props.user.id])

  // [{title: "June 2021", meetings: []}, {title: "July 2021", meetings: []}]
  let meetingDatesArr = []
  props.meetingsHistory.forEach(m => {

    // Create date title
    const dateObject = new Date(m.start_time * 1000)
    const month = dateObject.toLocaleString("en-US", { month: "long" }) // December
    const year = dateObject.toLocaleString("en-US", { year: "numeric" }) // 2019
    const dateTitle = month + " " + year

    // is date title already in array?
    const groupObj = meetingDatesArr.find(g => g.title == dateTitle)
    if (groupObj) {
      groupObj.meetings.push(m)
    }
    else {
      meetingDatesArr.push({ title: dateTitle, meetings: [m] })
    }

  })

  return <div className="history">
    <div className="page-title">
      <h2>{props.user.first_name}'s meeting history</h2>
    </div>
    {
      props.meetingsHistory.length > 0 ?
        <div > {

          meetingDatesArr.slice(0).reverse().map((meetingGroup, i) => {
            return (
              <div className="history__section" key={i}>
                <h3>{meetingGroup.title}</h3>
                <div className="dashboard__grid">
                  {meetingGroup.meetings.slice(0).reverse().map(meeting => {
                    return <PastMeetingSummary key={meeting.id} meeting={meeting} />
                  })}
                </div>
              </div>
            )
          })}

        </div>

        :
        <p>
          You haven't participated in any meetings yet! Go on, <Link to="/meeting" className="link">give it a try.</Link>
        </p>
    }
  </div>
}

function mapStateToProps(globalState) {
  return {
    meetingsHistory: globalState.meetingsHistory,
    user: globalState.auth.user,
    isAuth: globalState.auth.isAuthenticated
  }
}

export default connect(mapStateToProps)(History)