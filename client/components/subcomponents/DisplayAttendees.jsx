import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { receiveAttendees } from '../../actions/attendees'

function Attendees(props) {

    useEffect(() => {
        props.dispatch(receiveAttendees(props.currentMeeting.id))
    }, [])

    return (
        <>
            {props.attendees &&
                <div className="attendees">
                    <h3>Attendees:</h3>
                    <ul>
                        {props.attendees.map((attendee) => <li key={attendee.id}>{attendee.first_name}</li>)}
                    </ul>
                </div>
            }
        </>
    )
}

function mapStateToProps(globalState) {
    return {
        attendees: globalState.attendees
    }
}

export default connect(mapStateToProps)(Attendees)