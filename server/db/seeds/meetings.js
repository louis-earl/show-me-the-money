
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('meetings').del()
    .then(function () {
      // Inserts seed entries
      return knex('meetings').insert([
        {id: 1, meeting_name: 'Ninja Session', start_time: 1619751304, end_time: 1619797322, attendee_count: 2, cost: 40 },
        {id: 2, meeting_name: 'Angry Penguins', start_time: 1619751247, end_time: 1630966000,attendee_count: 2, cost: 1332.90 },
        {id: 3, meeting_name: 'All the Money', start_time: 1619751000, end_time: 1620061420,attendee_count: 3, cost: 420 }
      ]);
    })
  }
