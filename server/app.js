const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');

const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');



const app = express();



// Middleware
app.use(bodyParser.urlencoded({extended: false}));

app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(cookieParser());
app.use(cors());

app.use(cookieParser());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");
    next();
});
app.use(session({
    secret: 'secret',
    resave: false,
    domain: '.localhost:3000',
    saveUninitialized: false,
    cookie:  {
        domain: '.localhost:3000',
        maxAge: 24 * 6 * 60 * 10000
    },
}))



app.use(passport.initialize());
app.use(passport.session());

//Routes


app.use('/users', require('./routes/user.route'))


module.exports = app;