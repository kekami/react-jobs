const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const JobsSchema = new Schema({
  title: { type: String, trim: true, required: true },
  city: { type: String, trim: true, required: true },
  location: { type: String, trim: true, required: true },
  companyName: { type: String, trim: true, required: true },
  companyLogo: { type: String, trim: true, required: true },
  headquarters: { type: String, trim: true, required: true },
  teamSize: { type: String, trim: true, required: true },
  founded: { type: Number, trim: true, required: true },
  type: { type: String, trim: true, required: true },
  website: { type: String, trim: true, required: true },
  socialMedia: { type: Array, required: true },
  videoLifeAt: { type: String, trim: true, required: true },
  deadline: { type: Date, trim: true, required: true },
  image: { type: String, trim: true, required: true },
  description: { type: String, trim: true, required: true },
  descripitionFull: { type: String, trim: true, required: true },
  responsibilities: { type: Array, trim: true, required: true },
  requirements: { type: Array, trim: true, required: true },
  compensation: { type: Array, trim: true, required: true },
  jobDescription: { type: Array, trim: true, required: true },
});

const Jobs = mongoose.model('jobs', JobsSchema);

module.exports = Jobs;