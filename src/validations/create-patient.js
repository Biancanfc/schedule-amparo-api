const { validator } = require("cpf-cnpj-validator");
const Joi = require("@hapi/joi").extend(validator);

module.exports = Joi.object()
  .keys({
    name: Joi.string().required(),
    cpf: Joi.document().cpf().required(),
  })
  .required();
