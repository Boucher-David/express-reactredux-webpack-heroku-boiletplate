'use strict';

var express = require('express');
var app = express();
require('dotenv').config();
app.use(express.static(__dirname + '../bundle/'));

module.exports = app;

//need start and stop function to export here