define([
  'mongodb',
  '../crm-constants'
  ],

  function(mongodb, Constants){

    function UserTools() {
      var self = this;
    }

    UserTools.prototype.getUsersFromDb = function() {
      var self = this;
      console.log('connecting to db');
      // Connect to the db
      mongodb.MongoClient.connect("mongodb://localhost:27017/CRM_db", function(err, db){
        if (err) {
          throw err;
        } else {
          db.collection('contacts', function (err, collection) {
            collection.find().toArray(function(err, items) {
              if(err) throw err;
              console.log(items);
            });
          });
        }
      });
    };

    return UserTools;
});