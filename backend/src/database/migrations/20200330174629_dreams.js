
exports.up = function(knex) {
    return knex.schema.createTable('dreams', function(table){
        table.increments();
        table.string('name').notNullable();
        table.integer('age').notNullable();
        table.string('dream').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
      });
};

exports.down = function(knex) {
    return knex.schema.dropTable('dreams');
};
