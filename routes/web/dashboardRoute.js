const express = require('express');
const dashboardController = require('../../controller/dashboardController');

dashboardRouter = express.Router();

dashboardRouter.get('/', dashboardController.dashboard_get);
dashboardRouter.get('/users', dashboardController.detectDevice_get);
dashboardRouter.get('/users/:id', dashboardController.detectDevice_get);
dashboardRouter.get('/helpoffer', dashboardController.deviceOwner_get);
dashboardRouter.get('/helpoffer/:id', dashboardController.deviceOwner_get);
dashboardRouter.get('/helprequest', dashboardController.deviceOwner_get);
dashboardRouter.get('/helprequest/:id', dashboardController.deviceOwner_get);



module.exports = dashboardRouter;