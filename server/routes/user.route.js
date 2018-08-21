const express = require('express');
const router = require('express-promise-router')();


const controller = require('../controllers/user.controller');



router.route('/login',)
    .post(controller.login)



module.exports = router;

