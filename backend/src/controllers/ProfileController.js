const connection = require('../database/connection');

module.exports = {
  async index(request, response) {
    const funcionario_id = request.headers.authorization;

    const empresas = await connection('empresas')
      .where('funcionario_id', funcionario_id)
      .select('*');
      
    
    return response.json(empresas);
  }

}