const ExecutiveModel = require("../models/executive");
const { sendRequestResponse } = require("../middlewares/sendRequestResponse");

// Método para crear un directivo
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (req.params.associationCode) {
    req.body.associationCode = req.params.associationCode;
  }
  if (req.params.boardId) {
    req.body.boardOfDirectorsId = req.params.boardId;
  }
  const parms = req.body;
  const executiveModel = new ExecutiveModel(parms);
  executiveModel
    .save()
    .then((executiveStored) => {
      const response = {
        status: "success",
        executiveStored,
      };
      return sendRequestResponse(req, res, next, "", response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear el directivo ${executiveModel.position}: ${err}`;
      const response = {
        status: "error",
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar un directivo
const read = async (req, res, next) => {
  const executiveId = req.params.executiveId;
  try {
    const executiveFound = await ExecutiveModel.findOne({
      associationCode: req.params.associationCode,
      boardOfDirectorsId: req.params.boardId,
      _id: executiveId,
    });
    if (!executiveFound) {
      const response = {
        status: "error",
        message: `No se han encontrado el directivo : ${executiveId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      executive: executiveFound,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar el directivo ${executiveId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un directivo
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const executiveId = req.params.executiveId;
  try {
    req.body._id = executiveId;
    req.body.boardOfDirectorsId = req.params.boardId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const executiveModel = new ExecutiveModel(req.body);
    const executiveUpdated = await ExecutiveModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        boardOfDirectorsId: req.params.boardId,
        _id: executiveId,
      },
      executiveModel,
      {
        new: true,
      }
    );
    if (!executiveUpdated) {
      const response = {
        status: "error",
        message: `No se han encontrado el directivo a eliminar: ${executiveId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      executive: executiveUpdated,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al actualizar el directivo con identificador ${executiveId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar un directivo
const remove = async (req, res, next) => {
  const executiveId = req.params.executiveId;
  try {
    const executiveRemoved = await ExecutiveModel.findOneAndDelete({
      associationCode: req.params.associationCode,
      boardOfDirectorsId: req.params.boardId,
      _id: executiveId,
    });
    if (!executiveRemoved) {
      const response = {
        status: "error",
        message: `No se han encontrado el directivo a eliminar: ${executiveId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      executive: executiveRemoved,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al eliminar el usuario con código ${executiveId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar los directivos de la asociación
const getExecutives = async (req, res, next) => {
  try {
    const executives = await ExecutiveModel.find({
      associationCode: req.params.associationCode,
      boardOfDirectorsId: req.params.boardId,
    }).sort("positionDate");
    const response = {
      status: "success",
      executives: executives,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar las asociaciones: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = { create, read, update, remove, getExecutives };
