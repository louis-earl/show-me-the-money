import { RECEIVE_MEETINGS_PENDING, RECEIVE_MEETINGS_SUCCESS, ADD_MEETING_PENDING, ADD_MEETING_SUCCESS } from '../actions/meetings'

export default function auth(state = [], action) {
    switch (action.type) {
        case RECEIVE_MEETINGS_SUCCESS:
            return action.meetings

        case ADD_MEETING_SUCCESS:
            console.warn("The reducer received the action ADD_MEETING, but it's not implemented yet!!")
            // returns all of the meetings 
            return [...state, action.meeting]

        default:
            return state
    }
}

