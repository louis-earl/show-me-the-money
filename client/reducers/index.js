import {combineReducers} from 'redux'

import auth from './auth'
import meetingsHistory from './meetings'
import currentMeeting from './currentMeeting'
import users from './users'
import currentUsers from './currentUsers'
import getMeetings from './allMeetings'

export default combineReducers({
  auth,
  meetingsHistory,
  currentMeeting,
  users,
  currentUsers,
  getMeetings
})
