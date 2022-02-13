var express = require('express');
var router = express.Router();
var pa11y = require('pa11y')

/* GET home page. */
router.get('/api/test', async function(req, res, next) {
  if (!req.query.url) {
    res.status(400).json({error: 'url is required'})
  }
  else {
    const results = await pa11y(req.query.url)
    res.status(200).json(results)
  }
});

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* use colon (:) to set dynamic url */
/* req.params to access dynamic variables */

module.exports = router;
