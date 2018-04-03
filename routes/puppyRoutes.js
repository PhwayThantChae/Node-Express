var express = require('express');
var puppyRouter = express.Router();
const db = require('../database.js');

puppyRouter.get('/puppies', db.getAllPuppies);
puppyRouter.get('/puppies/:id', db.getSinglePuppy);


module.exports = puppyRouter;