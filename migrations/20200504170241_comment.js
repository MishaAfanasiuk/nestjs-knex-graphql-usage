
exports.up = function(knex) {
  return knex.schema.createTable('comments',(table) => {
    table.increments('id');
    table.integer('userId').notNullable();
    table.string('comment', 500).notNullable();
    table.timestamp('createdAt').notNullable();
    table.timestamp('updatedAt').nullable();
    table.timestamp('deletedAt').nullable();
  })
};

exports.down = function(knex) {

};
