const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const tarefas = await connection('tarefas').select('*');
    
    return response.json(tarefas);
  },

  async create(request, response) {
    const {nome_tar, etapa1, etapa2, etapa3, etapa4} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('tarefas').insert({
      id,
      nome_tar,
      etapa1,
      etapa2,
      etapa3,
      etapa4,
    })

    return response.json({ id });
  }
};