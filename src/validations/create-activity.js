const Joi = require('@hapi/joi');

module.exports = Joi.object()
  .keys({
    dueDate: Joi.date().required(),
    status: Joi.string().required(),
    activity: Joi.string().required(),
    patient: Joi.object().required(),
  })
  .required();
