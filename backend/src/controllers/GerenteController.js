const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const gerente = await connection('gerente').select('*');
    
    return response.json(gerente);
  },

  async create(request, response) {
    const {nome} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');
    
    await connection('gerente').insert({
      id,
      nome,
    })
  
    return response.json({ id });
  }
};