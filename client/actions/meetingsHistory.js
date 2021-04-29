import { getPastMeetings } from '../apis/meetingsHistory'

export const RECEIVE_MEETINGS_PENDING = 'RECEIVE_MEETINGS_PENDING'
export const RECEIVE_MEETINGS_SUCCESS = 'RECEIVE_MEETINGS_SUCCESS'
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

export function addMeeting(meeting) {
    return {
        type: ADD_MEETING,
        meeting
    }
}


// REDDIT EXAMPLE:
//
// export function fetchPosts (subreddit) {
//     return (dispatch) => {
//       dispatch(requestPosts())
//       return request
//         .get(`/api/v1/reddit/subreddit/${subreddit}`)
//         .then(res => {
//           dispatch(receivePosts(res.body))
//           return null
//         })
//         .catch(err => {
//           dispatch(showError(err.message))
//         })
//     }
//   }