const router = require('express').Router();
const usersRepo = require('../repositories/users')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
