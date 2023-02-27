const express = require('express');

const planetRoutes = express.Router();

const {
    getAllPlanets,
} = require('../planets/planets.contreller');

planetRoutes.get('/planets', getAllPlanets);


module.exports = planetRoutes;