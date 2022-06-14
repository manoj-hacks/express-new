var express = require('express');
var router = express.Router();
const dashboardController = require('../controllers/Dashboard');
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',dashboardController.dashboard);

module.exports = router;
