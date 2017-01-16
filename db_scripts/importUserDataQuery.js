// MongoDB Query script to add user data to the db

use CRM_db;

db.counters.insert(
    {
        "_id" : "userId",
        "sequence_value" : 10000
    }
);

var USER_CONSTANT = "user";

function getNextSequenceValue(sequenceName) {
    var sequenceDocument = db.counters.findAndModify({
        query : {_id: sequenceName},
        update : {$inc : {sequence_value: 1}},
        new : true
    });
    return USER_CONSTANT + sequenceDocument.sequence_value;
}

db.contacts.insertMany(
    [
        {
            "_id" : getNextSequenceValue("userId"),
            "username" : "allenphilip93",
            "password" : "password123",
            "email" : "allen@jda.com",
            "status" : "Active",
            "priority" : 1,
            "firstName" : "Allen",
            "lastName" : "Philip",
            "contact" : "9789091331",
            "createdDate" : new Timestamp()
        },
        {
            "_id" : getNextSequenceValue("userId"),
            "username" : "max1993",
            "password" : "password123",
            "status" : "Active",
            "email" : "max.racer@gmail.com",
            "priority" : 4,
            "createdDate" : new Date()
        },
        {
            "_id" : getNextSequenceValue("userId"),
            "username" : "rootFinder",
            "password" : "password123",
            "email" : "root.master@forum.com",
            "status" : "Active",
            "priority" : 2
        },
        {
            "_id" : getNextSequenceValue("userId"),
            "username" : "admin",
            "password" : "admin",
            "email" : "noone@admin.com",
            "status" : "Active",
            "priority" : 0
        },
        {
            "_id" : getNextSequenceValue("userId"),
            "username" : "rootFinder",
            "password" : "password123",
            "email" : "root.master@forum.com",
            "status" : "Inactive"
        }
    ]
);