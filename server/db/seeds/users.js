const { generateHash } = require('authenticare/server')

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all(
        [
          {
            username: 'louieearll',
            password: 'test',
            first_name: 'Louis',
            last_name: 'Earl',
            hourly_wage: 23.89,
          },
          {
            username: 'katier',
            password: 'test',
            first_name: 'Katherine',
            last_name: 'Reid',
            hourly_wage: 33.8,
          },
          {
            username: 'alex',
            password: 'test',
            first_name: 'Alex',
            last_name: 'Nees',
            hourly_wage: 33.8,
          },
          {
            username: 'jackk',
            password: 'test',
            first_name: 'Jack',
            last_name: 'Buckley',
            hourly_wage: 40.5,
          },
          {
            username: 'mel-wright',
            password: 'test',
            first_name: 'Melanie',
            last_name: 'Wright',
            hourly_wage: 46,
          },
          {
            username: 'anonadmin',
            password: 'test',
            first_name: 'Admin',
            last_name: 'Istrator',
            hourly_wage: 46,
          },
          {
            username: 'watson99',
            password: 'test',
            first_name: 'Stewart',
            last_name: 'Watson',
            hourly_wage: 46,
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
