import { addMeeting } from '../apis/meetings'

export const RECEIVE_MEETINGS_PENDING = 'RECEIVE_MEETINGS_PENDING'
export const RECEIVE_MEETINGS_SUCCESS = 'RECEIVE_MEETINGS_SUCCESS'

export const ADD_MEETING_PENDING = 'ADD_MEETING_PENDING'
export const ADD_MEETING_SUCCESS = 'ADD_MEETING_SUCCESS'

export const ADD_MEETING = 'ADD_MEETING'

export function receiveMeetingsPending() {
    return {
        type: RECEIVE_MEETINGS_PENDING
    }
}

export function receiveMeetingsSuccess() {
    return {
        type: RECEIVE_MEETINGS_SUCCESS
    }
}

export function receiveMeetings() {
    return (dispatch) => {
        dispatch(receiveMeetingsPending())
        return getPastMeetings()
            .then(() => {
                dispatch(receiveMeetingsSuccess())
            })
            .catch(err => {
                console.log("ERROR:", err)
            })
    }
}

export function addMeetingPending() {
    return {
        type: ADD_MEETING_PENDING
    }
}

export function addMeetingSuccess() {
    return {
        type: ADD_MEETING_SUCCESS
    }
}

export function addMeeting(meeting) {
    return (dispatch) => {
        dispatch(addMeetingPending())
        return addMeeting()
            .then(() => {
                dispatch(addMeetingSuccess())
            })
            .catch(err => {
                console.log("ERROR:", err)
            })
    }
}