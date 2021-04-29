import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveMeeting (meeting) {
  console.log("Save meeting API request")
  return request
    .post(baseUrl + '/meetings')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(meeting)
    .then((res) => res.body)
    .catch((res) => console.log("Error", res))
}

export function saveAttendees (obj) {
  return request
  .post(baseUrl + '/meetings/attendees')
  .set(acceptJsonHeader)
  .set(getAuthorizationHeader())
  .send(obj)
  .then((res => res.body))
  .catch((res) => console.log("Error", res))
}