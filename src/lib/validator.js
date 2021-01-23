let httpStatus = require('http-status');
let errors = require('restify-errors');

module.exports.validation = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body || req.params || req.query);
  const valid = error == null;

  if (valid) return next();

  const { details } = error;

  const message = details.map((i) => i.message).join(',');

  res.send(
    httpStatus.BAD_REQUEST,
    new errors.InvalidArgumentError('Invalid request ' + message)
  );
  return;
};
