const express = require('express');
const ejs = require('ejs');
var morgan = require('morgan');

const ROUTES = require('./routes');
const { PUBLIC_DIR } = require('./config');

const app = express();

// ["Primeros auxilios", "Diabetes", "Óptica", "Pediculosis", "Pédicos", "Suplementos Dietarios", "Suplementos Nutricionales", "Suplementos Deportivos", "Protección y Recuperación", "Fitness"];

// settings
app.set('view engine', 'ejs');
app.listen(4444);

// middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// static
app.use(express.static(PUBLIC_DIR));

// routes
app.use(ROUTES);