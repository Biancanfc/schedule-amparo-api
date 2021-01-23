const express = require('express');
const router = express.Router();

const PatientController = require('../controllers/patient.controller');

const { validation } = require('../lib/validator');
const createPatient = require('../validations/create-patient');

router.get('/', PatientController.getAll);
router.post('/', validation(createPatient), PatientController.create);
router.patch('/:id', PatientController.update);
router.delete('/:id', PatientController.delete);

module.exports = (app) => app.use('/patient', router);
