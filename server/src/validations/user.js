const { z } = require('zod');
const { USER_CONSTANTS } = require('../constants');

const registerSchema = z.object({
  email: z
    .string({
      required_error: 'El email es necesario',
    })
    .email({
      menssage: 'Email inválido',
    }),
  password: z
    .string({
      required_error: 'El contraseña es necesario',
    })
    .min(USER_CONSTANTS.passworkMin, {
      message: `La contraseña debe ser al menos de ${USER_CONSTANTS.passworkMin} caracteres`,
    }),
});

const loginSchema = z.object({
  email: z
    .string({
      required_error: 'El email es necesario',
    })
    .email({
      menssage: 'Email inválido',
    }),
  password: z
    .string({
      required_error: 'El contraseña es necesario',
    })
    .min(USER_CONSTANTS.passworkMin, {
      message: `La contraseña debe ser al menos de ${USER_CONSTANTS.passworkMin} caracteres`,
    }),
});

module.exports = { registerSchema, loginSchema };
