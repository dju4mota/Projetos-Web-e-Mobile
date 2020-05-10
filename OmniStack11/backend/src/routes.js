const express = require('express');
const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router();

routes.get('/ongs', OngController.index);
routes.post('/ongs',OngController.create);

routes.post('/incidents',IncidentController.create);
routes.get('/incidents',IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profile', ProfileController.index);

routes.post('/sessions', SessionController.create);

module.exports = routes;


// rota é a url inteira(localhost:333/users), recurso o q vem dps da barra (/users)
/*
Métodos HTTP:

GET: buscar uma informação do back-end
POST: criar uma informação no back-end
PUT: alterar uma informação no back-end
DELETE: deletar uma informação no back-end

*/

/*
    Tipos de parâmetro:
Query Params: Parâmetros nomeados enviados na rota após "?",
    (Filtros e Paginação)
Route Params: Parâmetros utilizados para identificar recursos
Request Body: Corpo da requisição, utilizado para criar ou alterar recursos

*/