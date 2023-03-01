const express = require('express');

const launchRoutes = express.Router();

const { 
    httpGetAllLaunches,
} =require('./launches.controller');

launchRoutes.get("/",httpGetAllLaunches);

module.exports = launchRoutes;