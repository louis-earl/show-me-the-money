import request from 'superagent'

//API base route
import { baseApiUrl as baseUrl } from '../config'

export function saveMeeting (meeting) {
  console.log("Save meeting API request")
  return request
    .post(baseUrl + '/meetings')
    .send(meeting)
    .then((res) => res.body)
}