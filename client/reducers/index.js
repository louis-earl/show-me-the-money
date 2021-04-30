import {combineReducers} from 'redux'

import auth from './auth'
import meetingsHistory from './meetings'
import currentMeeting from './currentMeeting'
import users from './users'
import attendees from './attendees'

export default combineReducers({
  auth,
  meetingsHistory,
  currentMeeting,
  users,
  attendees
})