const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const RequestError = require('../errors/RequestError');
const { createAccessToken } = require('../helpers/auth');
const { getStructureUserResponse } = require('../helpers/structureUser');
const { USER_CONSTANTS } = require('../constants');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');
const { auditLogin, auditLogout } = require('./audit/auditLogin');
const { verifyJWT } = require('../helpers/auth');
const { validateSchema } = require('../middlewares/validatorSchema');
const { loginSchema } = require('../validations/user');

// Método para loguear el usuario en el sistema
const login = async (req, res, next) => {
  try {
    const userFound = await validationLogin(req, res);
    if (userFound.userType != USER_CONSTANTS.typePartner) {
      throw new Error('Tipo de usuario no válido');
    }
    return autentificacionUserOK(req, res, userFound, next);
  } catch (error) {
    return autentificacionUserKO(req, res, error, next);
  }
};

// Método para loguear el un usuario administrador en el sistema
const loginAdministrator = async (req, res, next) => {
  try {
    const userFound = await validationLogin(req, res);
    if (userFound.userType != USER_CONSTANTS.typeAdmin) {
      throw new Error('Tipo de usuario no válido');
    }
    return autentificacionUserOK(req, res, userFound, next);
  } catch (error) {
    return autentificacionUserKO(req, res, error, next);
  }
};

// Método para desloguear el un usuario del sistema
const logout = async (req, res, next) => {
  try {
    res.cookie('token', '', {
      expires: new Date(),
    });
    const response = {
      status: 'success',
      message: 'Sesión cerrada correcta',
    };
    res.response = response;
    await auditLogout(req, res);
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al realizar el logout: ${error}`,
    };
    res.response = response;
    await auditLogout(req, res);
    return sendRequestResponse(req, res, next, 401, response);
  }
};

// Método para verificar el token del usuario
const verifyToken = async (req, res) => {
  const { token } = req.cookies;
  if (!token || token === '') {
    const response = {
      status: 'error',
      message: 'Autentificación denegada',
    };
    res.response = response;
    return sendRequestResponse(req, res, () => {}, 401, response);
  }

  const resultVerifyToken = async (err, user) => {
    if (err) {
      const response = {
        status: 'error',
        message: err,
      };
      res.response = response;
      return sendRequestResponse(req, res, () => {}, 403, response);
    }

    if (!user) {
      const response = {
        status: 'error',
        message: 'Usuario no encontrado',
      };
      res.response = response;
      return sendRequestResponse(req, res, () => {}, 403, response);
    }

    /*if (user.associationCode) {
      const isMatchAssociation =
        user.associationCode == req.params.associationCode;
      if (!isMatchAssociation) {
        const response = {
          status: "error",
          message: "Usuario no válido",
        };
        res.response = response;
        return sendRequestResponse(req, res, () => {}, 403, response);
      }
    } */
    const response = {
      status: 'success',
      message: 'Usuario válido',
      userStored: getStructureUserResponse(user),
    };
    res.response = response;
    return sendRequestResponse(req, res, () => {}, '', response);
  };
  verifyJWT(token, resultVerifyToken);
};

// Método para validar lo básico del login
const validationLogin = async (req, res) => {
  //validateSchema(loginSchema, req, res);
  const { username, password } = req.body;
  if (!username || !password) {
    throw new RequestError('Autentificación inválida', 401);
  }

  const userFound = await UserModel.findOne({ username: username });
  if (!userFound) {
    throw new RequestError('Autentificación inválida', 401);
  }

  if (userFound.associationCode && req.params.associationCode) {
    const isMatchAssociation =
      userFound.associationCode == req.params.associationCode;
    if (!isMatchAssociation) {
      throw new RequestError('Autentificación inválida', 401);
    }
  }

  const isMatch = await bcrypt.compare(password, userFound.password);
  if (!isMatch) {
    throw new RequestError('Autentificación inválida', 401);
  }

  if (userFound.userStatus != USER_CONSTANTS.statusActive) {
    throw new RequestError('Autentificación inválida', 401);
  }
  return userFound;
};

const autentificacionUserOK = async (req, res, userFound, next) => {
  const token = await createAccessToken(userFound);
  req.user = userFound;
  res.cookie('token', token);
  res.sessionToken = token;
  const response = {
    status: 'success',
    message: 'Autentificación correcta',
    userStored: getStructureUserResponse(userFound),
  };
  res.response = response;
  await auditLogin(req, res);
  return sendRequestResponse(req, res, next, '', response);
};

const autentificacionUserKO = async (req, res, error, next) => {
  let status = 500;
  if (error instanceof RequestError) {
    status = error.status;
  }
  res.cookie('token', '', {
    expires: new Date(),
  });
  const response = {
    status: 'error',
    message: error.message,
  };
  res.response = response;
  await auditLogin(req, res);
  return sendRequestResponse(req, res, next, status, response);
};

module.exports = {
  login,
  loginAdministrator,
  logout,
  verifyToken,
};
