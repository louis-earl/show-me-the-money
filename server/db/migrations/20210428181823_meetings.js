
exports.up = function(knex) {
    return knex.schema.createTable('meetings', table => {
        table.increments('id')
        table.string('meeting_name')
        table.timestamps(true,true)
        table.integer('attendee_count')
        table.decimal('cost')
      })
};

exports.down = function(knex) {
    return knex.schema.dropTable('users')
};
