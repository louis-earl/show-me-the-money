const connection = require('./connection')

function saveMeeting(obj, db = connection) {
    return db('meetings')
        .insert(obj, 'id')
        .then(meetingID => {
            console.log("saveMeeting in dbFuncs:", meetingID[0])
            return getMeetingByMeetingID(meetingID[0])
        })
        .catch((err) => {
            console.log(err.message)
        })
}

function getUsersMeetingHistory(id, db = connection) {
    return db('meetings')
        .join('attendees', 'meetings.id', 'attendees.meeting_id')
        .where('user_id', id)
        .select()
        .then(meetings => {
            return meetings.map(m => {
                return { ...m, cost: parseFloat(m.cost) }
            })
        })
        .catch((err) => {
            console.log(err.message)
        })

}

function getMeetingAttendees(id, db = connection) {
    return db('users')
        .join('attendees', 'users.id', 'attendees.user_id')
        .where('meeting_id', id)
        .select()
        .catch((err) => {
            console.log(err.message)
        })
}

function getMeetingByMeetingID(meetingID, db = connection) {
    return db('meetings')
        .where('id', meetingID)
        .select()
        .first()
        .then(m => {
            return { ...m, cost: parseFloat(m.cost)}
        })
        .catch((err) => {
            console.log(err.message)
        })
}

function saveAttendees(arr, db = connection) {
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
    saveAttendees
}