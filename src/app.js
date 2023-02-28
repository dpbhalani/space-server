const express = require('express');

const path = require('path');

const cors = require('cors');

const morgan = require('morgan');

const planetRoutes =require("../src/routes/planets/planets.route");
const launchRoutes =require("../src/routes/launches/launches.route");

const app = express();

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..','public')));
app.use('/planets', planetRoutes);
app.use('/launch', launchRoutes);
app.get('/' , (req,res) => {
    res.sendFile(path.join(__dirname,'..','public','index.html'))
})


module.exports = app;