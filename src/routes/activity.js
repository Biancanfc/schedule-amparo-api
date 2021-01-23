const express = require('express');
const router = express.Router();

const ActivityController = require('../controllers/activity.controller');

const { validation } = require('../lib/validator');
const createActivity = require('../validations/create-activity');

router.get('/', ActivityController.getAll);
router.post('/', validation(createActivity), ActivityController.create);
router.patch('/:id', ActivityController.update);
router.delete('/:id', ActivityController.delete);

module.exports = (app) => app.use('/activity', router);
