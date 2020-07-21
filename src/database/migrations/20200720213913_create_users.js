
exports.up = function (knex) {
    return knex.schema.createTable('users', function (table) {
        table.increments();
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('password').notNullable();
        table.timestamps();

    })
};

exports.down = function (knex) {
    return knex.schema.dropTable('users');
};
