
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, meeting_name: 'Ninja Session', attendees: 2, cost: 40.00 },
        {id: 2, meeting_name: 'Angry Penguins', attendees: 2, cost: 30.00 },
        {id: 3, meeting_name: 'All the Money', attendees: 0, cost: 20.00 }
      ]);
    })
  }
