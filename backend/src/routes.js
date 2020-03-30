const express = require('express');
const DreamController = require('./controllers/DreamController');
const routes = express.Router();

routes.get('/', DreamController.index);
routes.post('/create', DreamController.create);

module.exports = routes;