const BoardOfDirectorsModel = require("../models/boardOfDirectors");
const { sendRequestResponse } = require("../middlewares/sendRequestResponse");

// Método para crear una junta directiva
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if(req.params.associationCode){
    req.body.associationCode = req.params.associationCode;
  }
  const boardOfDirectorsModel = new BoardOfDirectorsModel(req.body);
  boardOfDirectorsModel
    .save()
    .then((boardOfDirectorsStored) => {
      const response = {
        status: "success",
        boardOfDirectorsStored,
      };
      return sendRequestResponse(req, res, next, "", response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear la junta directiva con fecha ${boardOfDirectorsModel.constitutionDate}: ${err}`;
      const response = {
        status: "error",
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar una junta directiva
const read = async (req, res, next) => {
  const boardId = req.params.boardId;
  try {
    const boardOfDirectorsFound = await BoardOfDirectorsModel.findOne({
      associationCode: req.params.associationCode,
      _id: boardId,
    });
    if (!boardOfDirectorsFound) {
      const response = {
        status: "error",
        message: `No se han encontrado la junta directiva: ${boardId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      boardOfDirectors: boardOfDirectorsFound,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar la junta directiva ${boardId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar una junta directiva activa
const readActive = async (req, res, next) => {
  try {
    const boardOfDirectorsFound = await BoardOfDirectorsModel.findOne({
      associationCode: req.params.associationCode,
      statusBoardOfDirector: 'ACTI',
    });
    if (!boardOfDirectorsFound) {
      const response = {
        status: "error",
        message: `No se han encontrado una junta directiva activa para la asociación: ${req.params.associationCode}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      boardOfDirectors: boardOfDirectorsFound,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar la junta directiva activa para la asociación: ${req.params.associationCode}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar una junta directiva
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const boardId = req.params.boardId;
  try {
    req.body._id = boardId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const boardOfDirectorsModel = new BoardOfDirectorsModel(req.body);
    const boardOfDirectorsUpdated =
      await BoardOfDirectorsModel.findOneAndUpdate(
        {
          associationCode: associationCode,
          _id: boardId,
        },
        boardOfDirectorsModel,
        {
          new: true,
        }
      );
    if (!boardOfDirectorsUpdated) {
      const response = {
        status: "error",
        message: `No se han encontrado la junta directiva a eliminar: ${boardId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      boardOfDirectors: boardOfDirectorsUpdated,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al actualizar la junta directiva con identificador ${boardId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar una junta directiva
const remove = async (req, res, next) => {
  const boardId = req.params.boardId;
  try {
    const boardOfDirectorsRemoved =
      await BoardOfDirectorsModel.findOneAndDelete({
        associationCode: req.params.associationCode,
        _id: boardId,
      });
    if (!boardOfDirectorsRemoved) {
      const response = {
        status: "error",
        message: `No se han encontrado la junta directiva con fecha a eliminar: ${boardId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      boardOfDirectors: boardOfDirectorsRemoved,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al eliminar la junta directiva con identificador ${boardId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = { create, read, readActive,  update, remove };
