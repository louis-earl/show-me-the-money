const express = require('express')
const { getTokenDecoder } = require('authenticare/server')
const db = require('../db/users')

const router = express.Router()

router.get('/', getTokenDecoder(), async (req, res) => {
  db.getAllUsers()
    .then(users => {
      res.json(users)
    })
    .catch(err => {
      return "the error is: ", err.message
    })

})

router.patch('/', async (req, res) => {
  id = req.body.id
  obj = req.body.user
  
  db.updateUser(id, obj)
    .then(id => {
      res.json({id: id, message: "User updated successfully."})
    })
    .catch(err => {
      return "the error is: ", err.message
    })
})



module.exports = router