const Patient = require('../models/patient');

module.exports = {
  async getAll({ search }) {
    let query = {};

    if (search) {
      query = {
        $or: [
          {
            name: new RegExp(`${search}`, 'i'),
          },
          {
            cpf: new RegExp(`${search}`, 'i'),
          },
        ],
      };
    }

    const patients = await Patient.find(query);

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
