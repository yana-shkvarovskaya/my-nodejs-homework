const Joi = require("joi");

const contactCreateScheme = Joi.object({
  name: Joi.string().min(3).max(15).required().messages({
    "any.required": "missing required name field",
  }),
  email: Joi.string().min(3).max(20).required().email().required().messages({
    "any.required": "missing required email field",
  }),
  phone: Joi.string().min(7).max(14).required().messages({
    "any.required": "missing required phone field",
  }),
});

const contactUpdateScheme = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  email: Joi.string().min(3).max(20).required().email().required(),
  phone: Joi.string().min(7).max(14).required(),
});

module.exports = contactUpdateScheme;
module.exports = contactCreateScheme;