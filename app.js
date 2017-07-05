const express = require('express')
var index = require('./index');
const app = express()

app.use('/', index);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
