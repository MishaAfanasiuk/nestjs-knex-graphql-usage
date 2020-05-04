
exports.up = function(knex) {
  return knex.schema.createTable('users',(table) => {
    table.increments('id');
    table.integer('profileId').notNullable();
    table.string('email', 50).notNullable();
    table.boolean('ban').notNullable();
    table.boolean('active').notNullable();
    table.timestamp('createdAt').notNullable();
    table.timestamp('updatedAt').nullable();
    table.timestamp('deletedAt').nullable();
  })
};

exports.down = function(knex) {
  return knex.schema
    .dropTable("users");
};
