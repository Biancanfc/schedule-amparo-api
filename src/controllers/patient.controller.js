const httpStatus = require('http-status');
var errors = require('restify-errors');
const PatientService = require('../services/patient.service');

module.exports = {
  async getAll(req, res) {
    try {
      const { query } = req;
      const response = await PatientService.getAll(query);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },

  async create(req, res) {
    try {
      const { body } = req;
      const response = await PatientService.create(body);

      return res.status(201).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
  async update(req, res) {
    try {
      const { id } = req.params;
      const { body } = req;
      const response = await PatientService.update(id, body);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
  async delete(req, res) {
    try {
      const { id } = req.params;
      const response = await PatientService.delete(id);

      return res.status(200).json(response);
    } catch (error) {
      return res.send(
        httpStatus.BAD_REQUEST,
        new errors.BadRequestError(error)
      );
    }
  },
};
