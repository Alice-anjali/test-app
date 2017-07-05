var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {

  module.exports = robot => {
    robot.on('pull_request.number', async context => {
      // An issue was just opened.
      robot.log(context);
    });
  };

  res.send("It works");
});

module.exports = router;
