let mongoose = require('mongoose')
let Schema = mongoose.Schema

let job = new Schema({
  "jobTitle": { type: String, required: true },
  "rate": { type: Number, required: true },
  "description": { type: String, required: true },
  "hours": { type: Number, required: true },
  "company": { type: String, required: true }

})
//export schema
module.exports = mongoose.model('job', job)