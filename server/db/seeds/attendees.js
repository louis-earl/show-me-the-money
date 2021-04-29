
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('attendees').del()
    .then(function () {
      // Inserts seed entries
      return knex('attendees').insert([
        {user_id: 1, meeting_id: 1},
        {user_id: 1, meeting_id: 2},
        {user_id: 1, meeting_id: 3},
        {user_id: 2, meeting_id: 1},
        {user_id: 2, meeting_id: 2},
        {user_id: 2, meeting_id: 3},
      ]);
    });
};
