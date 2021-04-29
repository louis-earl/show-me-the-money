const express = require('express')
const { getTokenDecoder } = require('authenticare/server')

const db = require('../db/users')

const router = express.Router()

router.get('/', getTokenDecoder(), async (req, res) => {
   try { 
     const users =  await db.getAllUsers()
       res.json({users})
   } catch (err) {

    if (err.message === 'Unauthorized') {
        return res.status(403).send(
          'Unauthorized: Unregistered user'
        )
      }
      res.status(500).send(err.message)
    }
  })
    


module.exports = router