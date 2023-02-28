const express = require('express');

const cors = require('cors');

const planetRoutes =require("../src/routes/planets/planets.route");

const app = express();

app.use(cors({
    origin: "http://localhost:3001"
}));

app.use(express.json());
app.use('/planets', planetRoutes);

module.exports = app;