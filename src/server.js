const express = require('express');
const app = express();
const routes = require('./routes');

const HOST = '0.0.0.0';
const PORT = '3333';

app.use(routes);

app.listen(PORT, HOST);