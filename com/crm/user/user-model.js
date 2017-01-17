define([
  '../crm-constants'
  ],

  function(Constants){

    function UserModel() {
      var self = this;
      self.class = 'user-model';
    }

    UserModel.prototype.initialize = function(user) {
      var users = [];
//      users = userTools.getUserFromDb();
//      console.log(userTools.name);
      return users;
    };

    UserModel.prototype.validateUser = function(user) {
      for (var user in users){
        if (user != null) {
          // Needs to initialize the model and validate as well
          var userModel =  new UserModel(user);
          userTools.addUserToDb(user);
        }
      }
    };

    return UserModel;
});