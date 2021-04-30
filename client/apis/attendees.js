import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveAttendees(obj) {
  return request
    .post(baseUrl + '/attendees')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(obj)
    .then((res => res.body))
    .catch((err) => console.log("Error", err))
}

export function getAttendees(meetingID) {
  return request
    .get(baseUrl + '/meetings/' + meetingID + '/users')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then((res => res.body))
    .catch((err) => console.log("Error", err))
}