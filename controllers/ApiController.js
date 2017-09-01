const Job = require('../models/job');

exports.jobs = ((req, res, next) => {
  Job.find({}, (err, jobs) => {
    res.json({
      jobs
    });
  })
});