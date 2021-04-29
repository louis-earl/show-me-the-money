const { generateHash } = require('authenticare/server')


exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            id: 1,
            username: 'admin',
            password: 'Krang',
            first_name: 'Admin',
            last_name: 'Istrator',
            hourly_wage: 300,
          },
          {
            id: 2,
            username: 'alex',
            password: 'test',
            first_name: 'Alex',
            last_name: 'Nees',
            hourly_wage: 300,
          },
          {
            id: 3,
            username: 'jack',
            password: 'test',
            first_name: 'Jack',
            last_name: 'Cool',
            hourly_wage: 300,
          }
        ].map(user => {
          return generateHash(user.password)
            .then(hash => {
              user.hash = hash
              delete user.password
              return user
            })
        }))
        .then(users => {
          return knex('users').insert(users)
        })
    })
}
