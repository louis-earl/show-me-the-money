const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const router = express.Router()

const db = require('../db/meetings')

router.post('/', getTokenDecoder(), async (req, res) => {
  db.saveMeeting(meeting)
  .then((res) => {
    res.redirect('/meeting')
  })
  .catch(err => {
    res.status(500).send(err.message)
  })
})

module.exports = router

