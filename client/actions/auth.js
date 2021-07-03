import { getUserTokenInfo, isAuthenticated, removeUser } from '../utils/auth'
import { login, register } from '../apis/auth'
import { resetMeeting } from './currentMeeting'

export function requestLogin() {
  return {
    type: 'LOGIN_REQUEST',
    isFetching: true,
    isAuthenticated: false
  }
}

export function receiveLogin(user) {
  return {
    type: 'LOGIN_SUCCESS',
    isFetching: false,
    isAuthenticated: true,
    user
  }
}

export function loginError(message) {
  return {
    type: 'LOGIN_FAILURE',
    isFetching: false,
    isAuthenticated: false,
    message
  }
}

export function loginUser(credentials, confirmSuccess) {
  return dispatch => {
    dispatch(requestLogin())
    return login(credentials)
      .then(userInfo => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch(err => {
        dispatch(loginError('Invalid username or password'))
      })
  }
}

export function requestLogout() {
  return {
    type: 'LOGOUT_REQUEST',
    isFetching: true,
    isAuthenticated: true
  }
}

export function receiveLogout() {
  return {
    type: 'LOGOUT_SUCCESS',
    isFetching: false,
    isAuthenticated: false
  }
}

export function logoutUser(confirmSuccess) {
  return dispatch => {
    dispatch(requestLogout())
    removeUser()
    dispatch(receiveLogout())
    dispatch(resetMeeting())
    confirmSuccess()
  }
}

export function registerUserRequest(credentials, confirmSuccess) {
  return (dispatch) => {
    register(credentials)
      .then(userInfo => {
        dispatch(receiveLogin(userInfo))
        confirmSuccess()
      })
      .catch(err => dispatch(loginError("Bad problem")))
  }
}

export function checkAuth(confirmSuccess) {
  return dispatch => {
    if (isAuthenticated()) {
      dispatch(receiveLogin(getUserTokenInfo()))
      confirmSuccess()
    }
  }
}
