const uniqueValidator = require('mongoose-unique-validator');
const { Schema, model } = require('mongoose');

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    cpf: {
      type: String,
      unique: true,
    },
  },
  {
    timestamps: true,
  }
);

patientSchema.plugin(uniqueValidator);

const Patient = model('patients', patientSchema);

module.exports = Patient;
