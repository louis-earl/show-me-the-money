import { GET_ALL_MEETINGS } from '../actions/meetings'

export default function getMeetings(state = [], action) {
    switch (action.type) {
        case GET_ALL_MEETINGS:
            return action.meetingHistory
        default:
            return state
    }
}