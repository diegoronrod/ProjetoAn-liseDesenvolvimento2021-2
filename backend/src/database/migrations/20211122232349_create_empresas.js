exports.up = function(knex) {
  return knex.schema.createTable('empresas', function(table) {
    table.string('id').primary();
    table.string('nome_emp').notNullable();
    
    table.string('funcionario_id').notNullable();
    table.string('tarefa1_id');
    table.string('tarefa2_id');
    table.string('tarefa3_id');
    table.string('tarefa4_id');
    table.string('tarefa5_id');
    
    table.foreign('funcionario_id').references('id').inTable('funcionarios');
    table.foreign('tarefa1_id').references('id').inTable('tarefas');
    table.foreign('tarefa2_id').references('id').inTable('tarefas');
    table.foreign('tarefa3_id').references('id').inTable('tarefas');
    table.foreign('tarefa4_id').references('id').inTable('tarefas');
    table.foreign('tarefa5_id').references('id').inTable('tarefas');  
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('empresas');
};