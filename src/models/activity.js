const { Schema, model } = require('mongoose');

const activitySchema = new Schema({
  dueDate: Date,
  status: String,
  activity: String,
  patient: Object,
});

const Activity = model('activities', activitySchema);

module.exports = Activity;
