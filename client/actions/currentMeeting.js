import { saveMeeting } from '../apis/meetings'

export const START_MEETING = 'START_MEETING'
export const END_MEETING = 'END_MEETING'
export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'
export const RESET_MEETING = 'RESET_MEETING'

  export function startMeeting(attendees, meetingName) {
    return {
      type: START_MEETING,
      attendees,
      meetingName
    }
  }
     
  export function  endMeeting() {
    return {
      type: END_MEETING,
    }
  }

  export function  resetMeeting() {
    return {
      type: RESET_MEETING,
    }
  }

  export function  tickOneSecond() {
    return {
      type: TICK_ONE_SECOND,
    }
  }

  // export function endMeeting () {
  //   return (dispatch) => {
  //     // dispatch(placeOrderPending())
  //     return placeOrder(o)
  //       .then(() => {
        
  //         // dispatch(placeOrderSuccess())
  //         return null
  //       })
  //       .catch((err) => {
  //         // if the error is from our routes, this will use the message our route
  //         // sends back, rather than the generic 'Internal Server Error' from a
  //         // status 500
  //         // if the error is from elsewhere in the Promise chain, there won't be
  //         // an err.response object, so we use err.message
  //         const errMessage = err.response?.text || err.message
  //         dispatch(showError(errMessage))
  //       })
  //   }
  // }
