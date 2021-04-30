import { getUsers } from '../apis/users'


export function receiveUsers (users) {
  return {
    type: 'RECEIVE_USERS',
    users: users
  }
}

export function selectedUsers (currentUsers) {
  return {
    type: 'SELECTED_USERS',
    currentUsers: currentUsers
  }
}

export function fetchUsers () {
  console.log('triggering')
  return dispatch => {
    return getUsers()
    .then (users => { 
      console.log(users)
      return dispatch(receiveUsers(users))
    })
      .catch(err => console.log(err.message))
    }
}

