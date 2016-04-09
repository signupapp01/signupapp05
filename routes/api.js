/*
 * Serve to our AngularJS client
 */

 var User = require('../models/user');


exports.saveForm = function (req, res) {
    // check mongo for duplicate user data is sent from angular post and found in the req.body
    User.findOne({email: req.body.data.email}, function(err, user){
        // if user already exists return json object with status & message
        if(user){
            return res.json({
                success: false,
                message: "This user already exists"
            });
        // User is not in mongo db so create a new record in user collection
        } else {
            var user = new User();
            user.email = req.body.data.email;
            user.password = req.body.data.password;
            user.fullname = req.body.data.fullname;
            user.address = req.body.data.address;
            user.city = req.body.data.city;
            user.state = req.body.data.state;
            user.country = req.body.data.country;
            user.zipcode = req.body.data.zipcode;
            user.phone = req.body.data.phone;

            // Save to mongo
            user.save(function(err, doc){
                if(err) {
                    return res.json({
                        success: false,
                        message: err
                    });
                } else {
                    // User is registered
                    return res.json({
                        success: true,
                        data: doc,
                        message: "Registered successfully"
                    });
                }
            });
        }
    });
};

exports.getCustomer = function (req, res) {
    // check mongo for duplicate user data is sent from angular post and found in the req.body
    User.findOne({'_id': req.body.data}, function(err, user){
        if(err) {
            return res.json({
                success: false,
                message: err,
            });
        } else {
            return res.json({
                success: true,
                message: "Got User",
                data: user
            });
        }
    })
};
