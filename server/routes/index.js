const express = require('express');

const memoryRouter = require('./memory');

const app = express();

app.use('./memory', memoryRouter);

module.exports = app;