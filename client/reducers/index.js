import {combineReducers} from 'redux'

import auth from './auth'
import meetingsHistory from './meetings'

export default combineReducers({
  auth,
  meetingsHistory
})
