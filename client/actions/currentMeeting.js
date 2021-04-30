export const START_MEETING = 'START_MEETING'
export const END_MEETING = 'END_MEETING'
export const TICK_ONE_SECOND = 'TICK_ONE_SECOND'
export const RESET_MEETING = 'RESET_MEETING'
export const ADD_MEETING_NAME = 'ADD_MEETING_NAME'
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

  export function addMeetingName() {
    return {
        type: ADD_MEETING_NAME
    }
}

