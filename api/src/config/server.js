const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const app = express();
const router = require('../modules/index');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(helmet())

app.use('/api', router);

module.exports = app;