const Jobs = require('../models/jobs');

exports.jobs = ((req, res, next) => {
  Jobs.find({}, (err, users) => {
    res.json({
      jobs: users
    });
  })
});