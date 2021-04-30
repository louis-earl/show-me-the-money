import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'
const acceptJsonHeader = { Accept: 'application/json' }

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveAttendees (arr) {
    return request
    .post(baseUrl + '/attendees')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .send(arr)
    .then((res => res.body))
    .catch((res) => console.log("Error", res))
  }