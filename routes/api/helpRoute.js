const express = require('express');
const helpController = require('../../controller/helpController');

const helpRoute = express.Router();

helpRoute.get('/requests', helpController.helpRequest_get); //This route is use to RETRIEVE all help request
helpRoute.post('requests', helpController.helpRequest_post)
helpRoute.get('/offers', helpController.helpOffer_get);
helpRoute.post('/offers', helpController.helpOffer_post);

module.exports = helpRoute;