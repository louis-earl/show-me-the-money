import {combineReducers} from 'redux'

import auth from './auth'
import currentMeeting from './currentMeeting'

export default combineReducers({
  auth,
  currentMeeting
})
