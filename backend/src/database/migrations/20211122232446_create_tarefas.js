exports.up = function(knex) {
  return knex.schema.createTable('tarefas', function(table) {
    table.string('id').primary();
    table.string('nome_tar').notNullable();
    table.string('etapa1');
    table.string('etapa2');
    table.string('etapa3');
    table.string('etapa4');  
  });
};
  
exports.down = function(knex) {
    return knex.schema.dropTable('tarefas');
};
