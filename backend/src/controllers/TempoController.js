const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const tempos = await connection('tempos').select('*');
    
    return response.json(tempos);
  },

  async create(request, response) {
    const {data, tempo_tar1, tempo_tar2, tempo_tar3, tempo_tar4, tempo_tar5, tempo_total, funcionario_id} = request.body;
    const gerente_id = request.headers.authorization;
    
    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('tempos').insert({
      id,
      data,
      tempo_tar1, 
      tempo_tar2, 
      tempo_tar3, 
      tempo_tar4, 
      tempo_tar5, 
      tempo_total, 
      funcionario_id,
      gerente_id,
    })

    return response.json({ id });
  }
};