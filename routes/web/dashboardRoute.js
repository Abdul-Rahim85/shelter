const express = require('express');
const dashboardController = require('../../controller/dashboardController');

dashboardRouter = express.Router();

dashboardRouter.get('/', dashboardController.dashboard_get);
dashboardRouter.get('/users', dashboardController.users_get);
dashboardRouter.get('/helpoffer', dashboardController.helpoffer_get);
dashboardRouter.get('/helprequest', dashboardController.helprequest_get);



module.exports = dashboardRouter;