
exports.up = function(knex) {
    return knex.schema.createTable('tempos', function(table) {
      table.string('id').primary();
      table.timestamp('data').defaultTo(knex.fn.now());
      table.string('tempo_tar1');
      table.string('tempo_tar2');
      table.string('tempo_tar3');
      table.string('tempo_tar4');
      table.string('tempo_tar5');
      table.string('tempo_total');
      
      table.string('funcionario_id').notNullable();
      table.string('gerente_id').notNullable();
  
      table.foreign('funcionario_id').references('id').inTable('funcionarios');
      table.foreign('gerente_id').references('id').inTable('gerente');
    });
};
    
exports.down = function(knex) {
    return knex.schema.dropTable('tempos');
};
