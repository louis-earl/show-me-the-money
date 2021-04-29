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


module.exports = router