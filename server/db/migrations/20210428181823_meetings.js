
exports.up = function(knex) {
    return knex.schema.createTable('meetings', table => {
        table.increments('id')
        table.string('meeting_name')
        table.integer('start_time')
        table.integer('end_time')
        table.integer('attendee_count')
        table.decimal('cost')
      })
}

exports.down = function(knex) {
    return knex.schema.dropTable('meetings')
}
