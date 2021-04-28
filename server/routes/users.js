const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/users')

const router = express.Router()

router.get('/', (req, res) => {
    db.getAllUsers()
    .then(users => {
        res.json(users)
    })
    .catch(err => {
        return "the error is: ", err.message
      })
})


module.exports = router