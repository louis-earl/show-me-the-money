const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/users')

const router = express.Router()

router.get('/', getTokenDecoder(), async (req, res) => {
  db.getAllUsers()
    .then(users => {
      res.json(users)
        .catch(err => {
          return "the error is: ", err.message
        })
    })

})

router.patch('/', async (req, res) => {
  
})



module.exports = router