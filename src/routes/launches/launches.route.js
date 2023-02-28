const express = require('express');

const launchRoutes = express.Router();

const { 
    getAllLaunches,
} =require('./launches.controller');

launchRoutes.get("/",getAllLaunches);

module.exports = launchRoutes;