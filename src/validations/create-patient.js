const { validator } = require('cpf-cnpj-validator');
const Joi = require('@hapi/joi').extend(validator);

module.exports = Joi.object()
  .keys({
    name: Joi.string().min(4).max(50).required(),
    cpf: Joi.document().cpf().required(),
  })
  .required();
