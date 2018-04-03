var express = require('express');
var puppyRouter = express.Router();
const db = require('../database.js');

puppyRouter.get('/puppies', db.getAllPuppies);


module.exports = puppyRouter;