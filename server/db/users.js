const connection = require('./connection')
const { generateHash } = require('authenticare/server')

function createUser (user, db = connection) {
  const newUser = {...user}
  return generateHash(newUser.password)
    .then(passwordHash => {
      newUser.hash = passwordHash
      delete newUser.password
      return db('users').insert(newUser)
    })
}

function userExists (username, db = connection) {
  return db('users')
    .where('username', username)
    .then(users => users.length > 0)
}

function getUserByUsername (username, db = connection) {
  return db('users')
    .where('username', username)
    .first()
}

function getAllUsers (db = connection) {
  return db('users')
  .select()
  .catch((err) => {
    console.log(err.message)
  })
}

function updateUser (id, obj, db = connection) {
  return db('users')
  .where('id', id)
  .update(obj)
  .catch((err) => {
    console.log(err.message)
  })
}

module.exports = {
  createUser,
  userExists,
  getUserByUsername,
  getAllUsers,
  updateUser
}