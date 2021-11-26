const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const funcionarios = await connection('funcionarios').select('*');
    
    return response.json(funcionarios);
  },

  async create(request, response) {
    const {nome_func, empresa1_id, empresa2_id, empresa3_id} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('funcionarios').insert({
      id,
      nome_func,
      empresa1_id,
      empresa2_id,
      empresa3_id,
    })

    return response.json({ id });
  },

  async delete(request, response) {
    const { id } = request.params;

    const funcionario = await connection('funcionarios')
       .where('id', id)
       .first();

    await connection('funcionarios').where('id', id).delete();

    return response.status(204).send();
  }
};