import { saveMeeting, getMeetingsOfUser, getAllMeetings } from '../apis/meetings'

export const RECEIVE_MEETINGS_PENDING = 'RECEIVE_MEETINGS_PENDING'
export const RECEIVE_MEETINGS_SUCCESS = 'RECEIVE_MEETINGS_SUCCESS'

export const ADD_MEETING_PENDING = 'ADD_MEETING_PENDING'
export const ADD_MEETING_SUCCESS = 'ADD_MEETING_SUCCESS'

export const GET_ALL_MEETINGS = 'GET_ALL_MEETINGS'


export function receiveMeetingsPending() {
    return {
        type: RECEIVE_MEETINGS_PENDING
    }
}

export function receiveMeetingsSuccess(meetings) {
    return {
        type: RECEIVE_MEETINGS_SUCCESS,
        meetings
    }
}

export function receiveMeetings(userID) {
    return (dispatch) => {
        dispatch(receiveMeetingsPending())
        return getMeetingsOfUser(userID)
            .then((meetings) => {
                dispatch(receiveMeetingsSuccess(meetings))
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



export function addMeetingSuccess(meeting) {
    return {
        type: ADD_MEETING_SUCCESS,
        meeting
    }
}

export function addMeeting(meeting) {
    return (dispatch) => {
        dispatch(addMeetingPending())
        return saveMeeting(meeting)
            .then((meeting) => {
                dispatch(addMeetingSuccess(meeting))
                return meeting
            })
            .catch(err => {
                console.log("ERROR:", err)
            })
    }
}

export function getMeetings() {
    return {
        type: GET_ALL_MEETINGS,
        meetingHistory: getAllMeetings()
    }
}