import React from 'react'
import { Link } from 'react-router-dom'


function PastMeetingSummary(props) {
    const { id, meeting_name, cost, attendees } = props.meeting

    return (
        <Link to={"/past-meeting/" + id}>
            <div className="card">
                <h3 className="title is-3">{meeting_name}</h3>
                <p>Cost: {cost}</p>
                <p>Attendees: {attendees}</p>
            </div>
        </Link>
    )
}


export default PastMeetingSummary
