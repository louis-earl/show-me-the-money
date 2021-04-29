import { START_MEETING, END_MEETING, TICK_ONE_SECOND, RESET_MEETING} from '../actions/currentMeeting'

const initialMeetingState = {
  meetingName: '',
  attendees: [],
  //Start time returned as a unix time stamp
  startTime: null,
  //End time returned as a unix time stamp
  endTime: null,
  totalCost: 0,
  meetingInProgress: true
}

function currentMeeting (state = initialMeetingState, action) {
  switch (action.type) {
    case START_MEETING:
      return {...state, 
        meetingName: action.meetingName,
        attendees: action.attendees,
        startTime: Date.now()}

    case END_MEETING:
      return {...state, meetingInProgress: false, endTime: Date.now()}
        
    default:
      return state

    case TICK_ONE_SECOND:

        const totalWage = state.attendees.reduce((total, attendee) => {
          
          return total += (attendee.hourlywage / 60 / 60)
        
        })

        return {...state, totalCost: state.totalCost + totalWage }

    case RESET_MEETING:

      return initialMeetingState
   
  }

  

}

export default currentMeeting
