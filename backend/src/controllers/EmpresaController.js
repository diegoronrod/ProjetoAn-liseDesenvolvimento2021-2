const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query; 

    const [count] = await connection('empresas').count();

    console.log(count);

    const empresas = await connection('empresas')
      .join('funcionarios', 'funcionarios.id', '=', 'empresas.funcionario_id')
      .limit(3)
      .offset((page - 1) * 3)
      .select(['empresas.*', 'funcionarios.nome_func']);

    response.header('X-Total-Count', count['count(*)']);
    
    return response.json(empresas);
  },

  async create(request, response) {
    const {nome_emp, tarefa1_id, tarefa2_id, tarefa3_id, tarefa4_id, tarefa5_id} = request.body;
    const funcionario_id = request.headers.authorization;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('empresas').insert({
      id,
      nome_emp,
      funcionario_id,
      tarefa1_id,
      tarefa2_id,
      tarefa3_id,
      tarefa4_id,
      tarefa5_id,
    })

    return response.json({ id });
  }
};