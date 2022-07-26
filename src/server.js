const express = require('express');
const app = require('./index')

app.use(express.json())

app.listen(3333);