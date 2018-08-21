const passport = require('passport');


const passportConfig = require('../passport')
module.exports = {
    login: async (req, res, next) => {
        console.log(req.body);
        try {

            req.login(req.body.id, function () {
                res.json({message: "Registration successfully"});

            })
        } catch (e) {
            console.log(e)
        }

    },

}