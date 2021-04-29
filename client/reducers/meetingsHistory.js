import {RECEIVE_MEETINGS, ADD_MEETING} from '../actions/meetingsHistory'

export default function auth (state = [], action) {
    switch (action.type) {
        case RECEIVE_MEETINGS:
            console.warn("The reducer received the action RECEIVE_MEETINGS, but it's not implemented yet!!")
            return null
        case ADD_MEETING:
            console.warn("The reducer received the action ADD_MEETING, but it's not implemented yet!!")
            return null
    }
}

