exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("meetings").del()
    .then(function () {
      // Inserts seed entries
      return knex("meetings").insert([
        {meeting_name: "Financial Year Review", start_time: 1617195002, end_time: 1617200600, attendee_count: 4, cost: 345.22 },
        {meeting_name: "Ninja Session", start_time: 1623024000, end_time: 1623025521, attendee_count: 3, cost: 46.22 },
        {meeting_name: "Angry Penguins", start_time: 1623196800, end_time: 1623208997,attendee_count: 7, cost: 1339.08 },
        {meeting_name: "Dog Appreciation Club", start_time: 1623888000, end_time: 1623898019,attendee_count: 8, cost: 1092.73 },
        {meeting_name: "All the Money", start_time: 1624492800, end_time: 1624496931,attendee_count: 5, cost: 382.41 },
        {meeting_name: "Evil Plotting", start_time: 1625529600, end_time: 1625531820,attendee_count: 2, cost: 64.10 },
        {meeting_name: "Business 101", start_time: 1625702400, end_time: 1625705309,attendee_count: 3, cost: 127.86 },
        {meeting_name: "Pretending to Look Busy", start_time: 1627776000, end_time: 1627780385, attendee_count: 3, cost: 210.13 }
      ])
    })
  }
