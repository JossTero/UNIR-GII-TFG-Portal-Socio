const UserModel = require('../models/user');
const bcrypt = require('bcryptjs');
const { createAccessToken } = require('../helpers/auth');
const { getStructureUserResponse } = require('../helpers/structureUser');
const { USER_CONSTANTS } = require('../constants');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');
const { validateSchema } = require('../middlewares/validatorSchema');
const { registerSchema } = require('../validations/user');

// Método para crear un usuario
const create = async (req, res, next) => {
  //validateSchema(registerSchema, req, res, next);

  const { email } = req.body;
  const userFound = await UserModel.findOne({ email });
  if (userFound) {
    const response = {
      status: 'error',
      message: `El email ${email} ya está en uso`,
    };
    return sendRequestResponse(req, res, next, 400, response);
  }

  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  const parms = req.body;
  const passwordHash = await bcrypt.hash(
    parms.password,
    USER_CONSTANTS.moduleHash
  );
  parms.password = passwordHash;
  const userModel = new UserModel(parms);
  userModel
    .save()
    .then(async (userStored) => {
      const token = await createAccessToken(userStored);
      const response = {
        status: 'success',
        message: 'Usuario creado correctamente',
        userStored: getStructureUserResponse(userStored),
      };
      res.cookie('token', token);
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al guardar el usuario ${userModel.email}: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar un usuario
const read = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const userFound = await UserModel.findById(userId);
    if (!userFound) {
      const response = {
        status: 'error',
        message: `No se ha encontrado el usuario: ${userId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      user: getStructureUserResponse(userFound),
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar el usuario ${userId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un socio
const update = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    req.body._id = userId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    const userModel = new UserModel(req.body);
    const userUpdated = await UserModel.findByIdAndUpdate(
      userId,
      userModel,
      {
        new: true,
      },
      {
        _id: userId,
        email: req.body.email,
        name: req.body.name,
        surname: req.body.surname,
        secondSurname: req.body.secondSurname,
        type: req.body.type,
        status: req.body.status,
      }
    );
    if (!userUpdated) {
      const response = {
        status: 'error',
        message: `No se ha encontrado el usuario: ${userId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      user: getStructureUserResponse(userUpdated),
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar el usuario con identificador ${userId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar un usuario
const remove = async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const userRemoved = await UserModel.findByIdAndDelete(userId);
    if (!userRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado el usuario a eliminar: ${userId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      message: 'Usuario eliminado correctamente',
      user: getStructureUserResponse(userRemoved),
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar el usuario con código ${userId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para devolver la lista de asociaciones
const getusers = async (req, res, next) => {
  const associationCode = req.user.associationCode;
  try {
    let users = null;
    if (associationCode) {
      users = await UserModel.find(
        { associationCode: associationCode },
        '_id username email name surname secondSurname registrationDate type status associationCode'
      ).sort('-registrationDate');
    } else {
      users = await UserModel.find(
        {},
        '_id username email name surname secondSurname registrationDate type status associationCode'
      ).sort('-registrationDate');
    }
    const response = {
      status: 'success',
      users: users,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar la lista de usuarios: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = {
  create,
  read,
  update,
  remove,
  getusers,
};
