const connection = require('../database/connection');

module.exports = {
  async create(request, response) {
    const { id } = request.body;

    const funcionario = await connection('funcionarios')
      .where('id', id)
      .select('nome_func')
      .first();

    if (!funcionario) {
        return response.status(400).json({ error: 'No FUNCIONARIO found with this ID'});
    }

      return response.json(funcionario);
  }

}