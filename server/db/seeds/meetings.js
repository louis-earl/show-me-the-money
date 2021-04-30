
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, meeting_name: 'Ninja Session', attendee_count: 0, cost: 40 },
        {id: 2, meeting_name: 'Angry Penguins', attendee_count: 0, cost: 30 },
        {id: 3, meeting_name: 'All the Money', attendee_count: 0, cost: 20 }
      ]);
    })
  }
