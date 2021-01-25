const Patient = require("../models/patient");

module.exports = {
  async getAll() {
    const patients = await Patient.find();

    return patients;
  },
  async create(data) {
    const patient = await Patient.create(data);

    return patient;
  },
  async update(id, data) {
    const patient = await Patient.findByIdAndUpdate(id, data, { new: true });

    return patient;
  },
  async delete(id) {
    const patient = await Patient.findByIdAndDelete(id);

    return patient;
  },
};
