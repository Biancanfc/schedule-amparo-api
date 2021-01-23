const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = require('mongoose');

const patientSchema = new Schema({
  name: String,
  cpf: {
    type: String,
    unique: true,
  },
});

patientSchema.plugin(uniqueValidator);

const Patient = model('patients', patientSchema);

module.exports = Patient;
