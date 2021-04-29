const connection = require('./connection')

function saveMeeting (obj, db = connection) {
    return db('meetings')
    .insert(obj)
    .catch((err) => {
        console.log(err.message)
      })
}

module.exports = {
    saveMeeting,
}