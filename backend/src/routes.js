const express = require('express');

const GerenteController = require('./controllers/GerenteController');
const FuncionarioController = require('./controllers/FuncionarioController');
const EmpresaController = require('./controllers/EmpresaController');
const TarefaController = require('./controllers/TarefaController');
const TempoController = require('./controllers/TempoController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');

const routes = express.Router();

routes.post('/sessions', SessionController.create);

routes.get('/profile', ProfileController.index);

routes.get('/gerente', GerenteController.index);
routes.post('/gerente', GerenteController.create);

routes.get('/funcionarios', FuncionarioController.index); 
routes.post('/funcionarios', FuncionarioController.create);
routes.delete('/funcionarios/:id', FuncionarioController.delete);

routes.get('/empresas', EmpresaController.index); 
routes.post('/empresas', EmpresaController.create);

routes.get('/tarefas', TarefaController.index); 
routes.post('/tarefas', TarefaController.create);

routes.get('/tempos', TempoController.index); 
routes.post('/tempos', TempoController.create);

module.exports = routes; 