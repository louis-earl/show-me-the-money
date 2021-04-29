const express = require('express')

const router = express.Router()

const db = require('../db/meetings')

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

