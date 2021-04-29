import {combineReducers} from 'redux'

import auth from './auth'
import currentMeeting from './currentMeeting'
import users from './users'

export default combineReducers({
  auth,
  currentMeeting,
  users
})
