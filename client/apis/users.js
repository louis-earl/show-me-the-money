import request from 'superagent'
import { getAuthorizationHeader } from 'authenticare/client'

//API base route
import { baseApiUrl as baseUrl } from '../config'
const acceptJsonHeader = { 'Accept': 'application/json' }

export function getUsers () {
  return request
    .get(baseUrl + '/users')
    .set(acceptJsonHeader)
    .set(getAuthorizationHeader())
    .then(res => {
      return res.body})
    .catch(err => console.log(err.message))
}