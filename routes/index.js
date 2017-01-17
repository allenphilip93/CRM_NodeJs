define([
  'express',
  'module'
  ],

  function(express, module) {
    router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('index.html', { title: 'Hello World!'});
    });

    module.exports = router;
});