import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveMeeting (meeting) {
  console.log("Save meeting API request", meeting)
  return request
    .post(baseUrl + '/meetings')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(meeting)
    .then((res) => res.body)
    .catch((err) => console.log("Error", err))
}

// Gets meetings 
export function getMeetingsOfUser (userID) {
  console.log("Get all meetings API request")
  return request
    .get(baseUrl + '/meetings/' + userID)
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((err) => console.log("Error", err))
}

// Gets all meetings 
export function getAllMeetings() {
  console.log("Get all meetings API request")
  return request
    .get(baseUrl + '/meetings/')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res) => res.body)
    .catch((err) => console.log("Error", err))
}


