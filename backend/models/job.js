const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const jobSchema = new Schema({
    userEmail: {
      type: String,
      required: true,
    },
    jobName: {
      type: String,
      required: true,
    },
    jobCategory: {
      type: String,
      required: true,
    },
    jobDescription: {
      type: String,
      required: true,
    },
    jobDuration: {
      type: String,
    },
    price: {
      type: Schema.Types.Decimal128,
    },
    datePosted: {
      type: Date,
      default: Date.now,
      required: true,
    },
  });
  
jobSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.price = ret.price.toString();
    return ret;
  },
});
  
module.exports = mongoose.model('Jobs', jobSchema);