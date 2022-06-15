var express = require('express');
var router = express.Router();
const authController = require('../controllers/Auth');
/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
router.get('/login',authController.login);
router.get('/register',authController.register);
module.exports = router;
