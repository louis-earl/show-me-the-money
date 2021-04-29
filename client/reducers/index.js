import {combineReducers} from 'redux'

import auth from './auth'
import meetingsHistory from './meetings'
import currentMeeting from './currentMeeting'
import users from './users'

export default combineReducers({
  auth,
  meetingsHistory,
  currentMeeting,
  users
})