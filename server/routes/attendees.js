const express = require('express')

const { getTokenDecoder } = require('authenticare/server')

const db  = require('../db/meetings')

const router = express.Router()

router.post('/', getTokenDecoder(), async (req,res) => {
    db.saveAttendees(req.body)
    .then(id => {
      res.json({id: id[0], message: "Attendees and meetings saved"})
    })
    .catch(err => {
      res.status(500).send(err.message)
    })
  })

  module.exports = router