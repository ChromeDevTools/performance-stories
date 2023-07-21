var express = require('express');
var router = express.Router();
function fibonacci(num) {
  if (num <= 1) return 1;

  return fibonacci(num - 1) + fibonacci(num - 2);
}

/* GET home page. */
router.get('/num/:num', function (req, res, next) {
  const result = fibonacci(parseInt(req.params.num));
  res.render('index', { input: req.params.num, result });
});

module.exports = router;
