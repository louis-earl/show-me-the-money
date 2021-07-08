exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("meetings").del()
    .then(function () {
      // Inserts seed entries
      return knex("meetings").insert([
        {id: 1, meeting_name: "Financial Year Review", start_time: 1617195002000, end_time: 1617200600000, attendee_count: 4, cost: 345.22 },
        {id: 2, meeting_name: "Ninja Session", start_time: 1623024000000, end_time: 1623025521000, attendee_count: 3, cost: 46.22 },
        {id: 3, meeting_name: "Angry Penguins", start_time: 1623196800000, end_time: 1623208997000,attendee_count: 7, cost: 1339.08 },
        {id: 4, meeting_name: "Dog Appreciation Club", start_time: 1623888000000, end_time: 1623898019000,attendee_count: 8, cost: 1092.73 },
        {id: 5, meeting_name: "All the Money", start_time: 1624492800000, end_time: 1624496931000,attendee_count: 5, cost: 382.41 },
        {id: 6, meeting_name: "Evil Plotting", start_time: 1625529600000, end_time: 1625531820000,attendee_count: 2, cost: 64.10 },
        {id: 7, meeting_name: "Business 101", start_time: 1625702400000, end_time: 1625705309000,attendee_count: 3, cost: 127.86 },
        {id: 8, meeting_name: "Pretending to Look Busy", start_time: 1627776000000, end_time: 1627780385000, attendee_count: 3, cost: 210.13 }
      ])
    })
  }
