const AnnouncementModel = require("../models/announcement");
const ImageModel = require('../models/image');
const { sendRequestResponse } = require("../middlewares/sendRequestResponse");

// Método para crear un anuncio
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (req.params.associationCode) {
    req.body.associationCode = req.params.associationCode;
  }
  const announcementModel = new AnnouncementModel(req.body);
  announcementModel
    .save()
    .then((announcementStored) => {
      const response = {
        status: "success",
        announcementStored,
      };
      return sendRequestResponse(req, res, next, "", response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear el anuncio ${announcementModel.title}: ${err}`;
      const response = {
        status: "error",
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar un anuncio
const read = async (req, res, next) => {
  const announcementId = req.params.announcementId;
  try {
    const announcementFound = await AnnouncementModel.findOne({
      associationCode: req.params.associationCode,
      _id: announcementId,
    });
    if (!announcementFound) {
      const response = {
        status: "error",
        message: `No se han encontrado el anuncio : ${announcementId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      announcement: announcementFound,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar el anuncio ${announcementId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un anuncio
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const announcementId = req.params.announcementId;
  try {
    req.body._id = announcementId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const announcementModel = new AnnouncementModel(req.body);
    const announcementUpdated = await AnnouncementModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: announcementId,
      },
      announcementModel,
      {
        new: true,
      }
    );
    if (!announcementUpdated) {
      const response = {
        status: "error",
        message: `No se han encontrado el anuncio a eliminar: ${announcementId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      announcement: announcementUpdated,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al actualizar el anuncio con identificador ${announcementId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un anuncio
const updateImage = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const announcementId = req.params.announcementId;
  try {
    req.body._id = announcementId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const imageModel = new ImageModel(req.file);
    const announcementUpdated = await AnnouncementModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: announcementId,
      },
      { image: imageModel },
      {
        new: true,
      }
    );
    if (!announcementUpdated) {
      const response = {
        status: "error",
        message: `No se han encontrado el anuncio a actualizar: ${announcementId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      announcement: announcementUpdated,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al actualizar el anuncio con identificador ${announcementId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar un anuncio
const remove = async (req, res, next) => {
  const announcementId = req.params.announcementId;
  try {
    const announcementRemoved = await AnnouncementModel.findOneAndDelete({
      associationCode: req.params.associationCode,
      _id: announcementId,
    });
    if (!announcementRemoved) {
      const response = {
        status: "error",
        message: `No se han encontrado el anuncio a eliminar: ${announcementId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: "success",
      announcement: announcementRemoved,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al eliminar el anuncio con código ${announcementId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar los anuncios de la asociación
const getAnnouncements = async (req, res, next) => {
  try {
    const announcements = await AnnouncementModel.find({
      associationCode: req.params.associationCode,
    }).sort("-publicationDate");
    const response = {
      status: "success",
      announcements: announcements,
    };
    return sendRequestResponse(req, res, next, "", response);
  } catch (error) {
    const response = {
      status: "error",
      message: `Error al consultar los anuncios: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = { create, read, update, updateImage, remove, getAnnouncements };
