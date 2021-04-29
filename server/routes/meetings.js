const express = require('express')

const { getTokenDecoder } = require('authenticare/server')

const db  = require('../db/meetings')

const router = express.Router()

router.get('/', getTokenDecoder(), async (req, res) => {
 id = req.body
  db.getUsersMeetingHistory(id) 
  .then(user => {
      res.json(user)
  })
  .catch(err => { return "the error is: ", err.message })
})


router.get('/:id/users', getTokenDecoder(), async  (req, res) => {
  id = req.params.id
  db.getMeetingAttendees(id)
  .then(attendees => {
    res.json(attendees)
  })
})


router.post('/', getTokenDecoder(), async (req, res) => {
  console.log("Post route for saveMeeting")
  db.saveMeeting(req.body)
  .then((id) => {
    res.json({id: id[0], message: "Meeting saved successfully."})
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

router.post('/attendees', getTokenDecoder(), async (req,res) => {
  db.saveAttendees(req.body)
  .then(id => {
    res.json({id: id[0], message: "Attendees and meetings saved"})
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router

