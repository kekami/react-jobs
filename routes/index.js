var express = require('express');
var router = express.Router();
// const data = require('../data.json');
const ApiController = require('../controllers/ApiController');

router.get('/api/jobs', ApiController.jobs);

module.exports = router;
