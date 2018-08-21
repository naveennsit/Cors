const passport = require('passport');





passport.serializeUser(function(id, done) {
    console.log('ddd');
//    console.log(user);
    done(null, id);
});

passport.deserializeUser(function(id, done) {
    console.log('deserializeUser');
    done(null, id);
    // db.User.findById(id, function (err, user) {
    //     done(err, user);
    // });
});