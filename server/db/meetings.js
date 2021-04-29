

const connection = require('./connection')

function saveMeeting (obj, db = connection) {
    return db('meetings')
    .insert(obj)
    .catch((err) => {
        console.log(err.message)
      })
}

function getUsersMeetingHistory (id, db = connection) {
    return db('meetings')
    .join('attendees', 'user_id', 'meeting_id')
    .where('user_id', id)
    .select()
    .catch((err) => {
        console.log(err.message)
      })

}

function getMeetingAttendees (id, db = connection) {
    return db('users')
    .join('attendees', 'users.id', 'attendees.user_id')
    .where('meeting_id', id)
    .select()
    .catch((err) => {
        console.log(err.message)
      })
}

module.exports = {
    saveMeeting,
    getUsersMeetingHistory,
    getMeetingAttendees
}