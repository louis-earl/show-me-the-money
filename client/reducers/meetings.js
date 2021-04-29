import { RECEIVE_MEETINGS, ADD_MEETING } from '../actions/meetings'

export default function auth(state = [], action) {
    switch (action.type) {
        case RECEIVE_MEETINGS:
            console.warn("The reducer received the action RECEIVE_MEETINGS, but it's not implemented yet!!")
            return action.meetings

        case ADD_MEETING:
            console.warn("The reducer received the action ADD_MEETING, but it's not implemented yet!!")
            // returns all of the meetings 
            return [...state, action.meeting]

        default:
            return state
    }
}

