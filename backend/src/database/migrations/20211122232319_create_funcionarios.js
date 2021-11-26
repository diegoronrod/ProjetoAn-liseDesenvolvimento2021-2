exports.up = function(knex) {
  return knex.schema.createTable('funcionarios', function(table) {
    table.string('id').primary();
    table.string('nome_func').notNullable();
        
    table.string('empresa1_id');
    table.string('empresa2_id');
    table.string('empresa3_id');
        
    table.foreign('empresa1_id').references('id').inTable('empresas');
    table.foreign('empresa2_id').references('id').inTable('empresas');
    table.foreign('empresa3_id').references('id').inTable('empresas');
  });
};
    
exports.down = function(knex) {
  return knex.schema.dropTable('funcionarios');
};
