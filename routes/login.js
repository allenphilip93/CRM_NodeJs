define([
  'express',
  'module',
  '../com/crm/user/user-manager'
  ],

  function(express, module, UserManager) {
    router = express.Router();

    /* GET home page. */
    router.get('/', function(req, res, next) {
      res.render('login/login.html', { title: 'User'});
      var userManager = new UserManager();
      console.log(userManager.getUsers());
    });

    module.exports = router;

    return router;
});