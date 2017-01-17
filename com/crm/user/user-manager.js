define([
  './user-model',
  './user-tools',
  '../crm-constants'
  ],

  function(UserModel, UserTools, Constants){

    function UserManager() {
      var self = this;
      self.users = [];
      self.userTools = new UserTools();

      if (self.userTools.status != Constants.mongodb_connection_active) {
        console.log('Database connection is not successful');
      } else {
        console.log('Database connection is successful');
      }
    }

    UserManager.prototype.getUsers = function(parameters) {
      var self = this;
      self.users = self.userTools.getUsersFromDb();
      return self.users;
    };

    UserManager.prototype.addUser = function(users) {
      for (var user in users){
        if (user != null) {
          // Needs to initialize the model and validate as well
          var userModel =  new UserModel(user);
          userTools.addUserToDb(user);
        }
      }
    };

    return UserManager;
});