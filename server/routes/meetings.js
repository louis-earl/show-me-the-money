const express = require('express')

const { getTokenDecoder } = require('authenticare/server')

const db  = require('../db/meetings')

const router = express.Router()

router.get('/', getTokenDecoder(), (req, res) => {
 id = req.body
  db.getUsersMeetingHistory(id) 
  .then(user => {
      res.json(user)
  })
  .catch(err => { return "the error is: ", err.message })
})

router.post('/', (req, res) => {
  db.saveMeeting(meeting)
  .then((res) => {
    res.redirect('/meeting')
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router

