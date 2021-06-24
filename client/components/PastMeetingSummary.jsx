import React from 'react'
import { Link } from 'react-router-dom'
import DisplayTime from './DisplayTime'


function PastMeetingSummary(props) {
    const { id, meeting_name, cost, attendee_count, start_time, end_time } = props.meeting

    const runtime = end_time - start_time

    return (
        <>
            {props.meeting &&
                <Link to={"/past-meeting/" + id} className="card__outer">
                    <div className="card">
                        <h3>{meeting_name}</h3>
                        <p className="cost">${cost.toFixed(2)}</p>
                        <p>Attendees: {attendee_count}</p>
                        <p>Duration: <DisplayTime runtime={runtime} /></p>
                    </div>
                </Link>
            }
        </>
    )
}


export default PastMeetingSummary
