var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Form', new Schema({
  name: String,
  description: String,
  category: String,
  basePoints: Number,
  startDate: Date,
  endDate: Date,
  isActive: Boolean,
  alreadyAnswered: Boolean,
  questions: [{
    id: Number,
    text: String,
    type: {type: String},
    options: [{
      id: Number,
      text: String,
      value: String
    }]
  }]
}));