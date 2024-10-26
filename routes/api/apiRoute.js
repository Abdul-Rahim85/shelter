const express = require('express');
const apiController = require('../../controller/apiController');

const apiRoute = express.Router();

apiRoute.post('/singup', apiController.singup_post); //This route is use to send the sining in data
apiRoute.post('/login', apiController.login_post); //This route is use to send the username and password to check them

module.exports = apiRoute;