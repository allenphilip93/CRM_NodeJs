// MongoDB Query script to setup the user model

use CRM_db;

db.createCollection ("counters");

db.createCollection( "contacts", {
        validator: { $and:
            [
                { username: { $type: "string"} },
                { password: { $type: "string"} },
                { email: { $exists: true }},
                { status: { $in: [ "Active", "Inactive" ] } }
            ]
        },
        validationAction: "error"
    }
);