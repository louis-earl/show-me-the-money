import {combineReducers} from 'redux'

import auth from './auth'
import currentMeeting from './currentMeeting'
import users from './users'
import currentUsers from './currentUsers'

export default combineReducers({
  auth,
  currentMeeting,
  users,
  currentUsers
})
