const express = require('express');

const launchRoutes = express.Router();

const { 
    httpGetAllLaunches,
    htttpAddnewLaunch,
} =require('./launches.controller');

launchRoutes.get("/",httpGetAllLaunches);
launchRoutes.post("/",htttpAddnewLaunch);

module.exports = launchRoutes;