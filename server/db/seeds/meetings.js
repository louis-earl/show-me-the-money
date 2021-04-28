
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {id: 1, meeting_name: 'Ninja Session', attendees: 0, cost: 0 },
        {id: 2, meeting_name: 'Angry Penguins', attendees: 0, cost: 0 },
        {id: 3, meeting_name: 'All the Money', attendees: 0, cost: 0 }
      ]);
    })
  }
