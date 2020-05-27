var express = require('express');
var router = express.Router();
const IndexController = require("../controllers/IndexController");

/* GET home page. */
router.get('/',IndexController.showIndex);

/* About page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

module.exports = router;
