import { getAttendees } from '../apis/attendees'

export const RECEIVE_ATTENDEES_PENDING = 'RECEIVE_ATTENDEES_PENDING'
export const RECEIVE_ATTENDEES_SUCCESS = 'RECEIVE_ATTENDEES_SUCCESS'

export function receiveAttendeesPending() {
    return {
        type: RECEIVE_ATTENDEES_PENDING
    }
}

export function receiveAttendeesSuccess(attendees) {
    return {
        type: RECEIVE_ATTENDEES_SUCCESS,
        attendees
    }
}

export function receiveAttendees(meetingID) {
    return (dispatch) => {
        dispatch(receiveAttendeesPending())
        return getAttendees(meetingID)
            .then((attendees) => {
                dispatch(receiveAttendeesSuccess(attendees))
            })
            .catch(err => {
                console.log("ERROR:", err)
            })
    }
}