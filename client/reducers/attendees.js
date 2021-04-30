import { RECEIVE_ATTENDEES_SUCCESS } from '../actions/attendees'

export default function meetings(state = [], action) {
    switch (action.type) {
        case RECEIVE_ATTENDEES_SUCCESS:
            return action.attendees

        default:
            return state
    }
}

