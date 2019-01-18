
var StudentController   = require('./student');

var express = require('express');

var app = express();

app.get('/',StudentController.getAllStudents);
app.get('/:id',StudentController.getSingleStudent);

module.exports  = app;






