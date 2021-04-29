const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const router = express.Router()

const db = require('../db/meetings')

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

module.exports = router

