import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveMeeting (meeting) {
  return request
    .post(baseUrl + '/meetings')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(meeting)
    .then((res) => res.body)
    .catch((err) => console.log("Error", err))
}

// Gets all meetings 
export function getMeetingsOfUser (userID) {
  return request
    .get(baseUrl + '/meetings/' + userID)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((err) => console.log("Error", err))
}


