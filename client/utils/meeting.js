

 export const displayTime = (runningTime) => {
    {/*  DISPLAY: hours | min | sec */}
    let hours = Math.floor(runningTime / 60 /60)
    let min = Math.floor(runningTime / 60)
    let sec = runningTime % 60
    return <h3>{hours} | {min} | {sec}</h3>
  }

export const formatAttendees = (meetingId, meetingAttendees) => {
  let ids = []
  meetingAttendees.attendees.map(att => ids.push({meeting_id:meetingId, user_id:att.id}))
  return ids
}