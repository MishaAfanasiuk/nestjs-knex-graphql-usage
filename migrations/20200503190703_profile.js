
exports.up = function(knex) {
  return knex.schema.createTable('profiles',(table) => {
    table.increments('id');
    table.string('nickname', 50).notNullable();
    table.string('firstName', 50).notNullable();
    table.string('lastName', 50).notNullable();
    table.timestamp('createdAt').notNullable();
    table.timestamp('updatedAt').nullable();
    table.timestamp('deletedAt').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("profiles");
};
