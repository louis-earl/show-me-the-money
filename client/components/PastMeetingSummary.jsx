import React from 'react'
import { Link } from 'react-router-dom'
import DisplayTime from './DisplayTime'


function PastMeetingSummary(props) {
    const { id, meeting_name, cost, attendee_count, start_time, end_time } = props.meeting

    console.log(props.meeting)
    console.log(end_time, "-", start_time)
    const runtime = end_time - start_time

    return (
        <Link to={"/past-meeting/" + id}>
            <div className="card">
                <h3 className="title is-3">{meeting_name}</h3>
                <p>Cost: ${cost}</p>
                <p>Attendees: {attendee_count}</p>
                <p>Duration: <DisplayTime runtime={runtime} /></p>
            </div>
        </Link>
    )
}


export default PastMeetingSummary
