import { START_MEETING, END_MEETING, TICK_ONE_SECOND, RESET_MEETING, ADD_MEETING_NAME} from '../actions/currentMeeting'

const initialMeetingState = {
  meeting_name: '',
  attendees: [],
  //Start time returned as a unix time stamp
  start_time: null,
  //End time returned as a unix time stamp
  end_time: null,
  cost: 0,
  meetingInProgress: false,
  attendee_count: 0,

 
}

function currentMeeting (state = initialMeetingState, action) {
  switch (action.type) {
    case START_MEETING:

      return {...state, 
        meeting_name: action.meetingName,
        attendees: action.attendees,
        start_time: Date.now(),
        meetingInProgress: true,
        attendee_count: action.attendees.length,
     
      }
      
    case END_MEETING:
      return {...state, meetingInProgress: false, end_time: Date.now()}

   

    case TICK_ONE_SECOND:
        const totalWage = state.attendees.reduce((total, attendee) => {
          
          return total = (attendee.hourly_wage / 60 / 60)
        
        })
        return {...state, cost: state.cost + totalWage }

    case RESET_MEETING:
      return initialMeetingState


      default:
        return state
   
  }

  

}

export default currentMeeting
