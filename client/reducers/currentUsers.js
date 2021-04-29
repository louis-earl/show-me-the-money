const initialState = []

export default function currentUsers (state = initialState, action) {
  switch (action.type) {
    case 'SELECTED_USERS':
      return action.currentUsers
    default:
      return state
  }
}