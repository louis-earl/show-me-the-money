

const connection = require('./connection')

function saveMeeting (obj, db = connection) {
    return db('meetings')
    .insert(obj, 'id')
    .catch((err) => {
        console.log(err.message)
      })
}

function getUsersMeetingHistory (id, db = connection) {
    return db('meetings')
    .join('attendees', 'meetings.id', 'attendees.meeting_id')
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

function getAllMeetings (db = connection) {
    return db('meetings') 
    .select()
    .orderBy('start_time', 'desc')

}

function saveAttendees (arr, db = connection) {
    return db('attendees')
    .insert(arr)
    .catch((err) => {
        console.log(err.message)
      })
}


module.exports = {
    saveMeeting,
    getUsersMeetingHistory,
    getMeetingAttendees,
    saveAttendees,
    getAllMeetings,
}