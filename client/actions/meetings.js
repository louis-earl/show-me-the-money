import { saveMeeting } from '../apis/meetings'

export const RECEIVE_MEETINGS_PENDING = 'RECEIVE_MEETINGS_PENDING'
export const RECEIVE_MEETINGS_SUCCESS = 'RECEIVE_MEETINGS_SUCCESS'

export const ADD_MEETING_PENDING = 'ADD_MEETING_PENDING'
export const ADD_MEETING_SUCCESS = 'ADD_MEETING_SUCCESS'

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

export function receiveMeetings() {
    return (dispatch) => {
        dispatch(receiveMeetingsPending())
        // return getPastMeetings()
        //     .then(() => {
        //         dispatch(receiveMeetingsSuccess())
        //     })
        //     .catch(err => {
        //         console.log("ERROR:", err)
        //     })
        const dummyData = [
            {id: 1, meetingName: "Meeting 01", cost: 23}, 
            {id: 2, meetingName: "Meeting 02", cost: 233}]

        dispatch(receiveMeetingsSuccess(dummyData))
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
            })
            .catch(err => {
                console.log("ERROR:", err)
            })
    }
}