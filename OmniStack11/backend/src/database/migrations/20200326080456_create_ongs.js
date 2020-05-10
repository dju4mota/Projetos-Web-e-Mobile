
exports.up = function(knex) {   // o que você quer fazer
  return knex.schema.createTable('ongs', function(table){
      table.string('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable();
      table.string('whatsapp').notNullable();
      table.string('city').notNullable();
      table.string('uf', 2).notNullable();
  })
};

exports.down = function(knex) {  // o que desfazer caso de ruim
    return knex.schema.drobTable('ongs');
};
