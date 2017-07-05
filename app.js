const express = require('express')
var index = require('./index');
const app = express()

app.get('/', function(req, res, next) {
  console.log("works fine");
});

// app.use('/', index);

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

module.exports = app;
