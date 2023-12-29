const path = require('path');
const DocumentModel = require('../models/document');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');

// Método para crear un documento
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
    req.body.highUser = req.user.username;
  }
  if (req.params.associationCode) {
    req.body.associationCode = req.params.associationCode;
  }
  if (req.params.partnerId) {
    req.body.partnerId = req.params.partnerId;
  }
  if (req.params.documentId) {
    req.body.documentFeeId = req.params.documentId;
  }
  if (req.params.announcementId) {
    req.body.announcementId = req.params.announcementId;
  }
  const documentModel = new DocumentModel(req.body);
  documentModel
    .save()
    .then((documentStored) => {
      const response = {
        status: 'success',
        documentStored,
      };
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear el documento ${documentModel.title}: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar un documento
const read = async (req, res, next) => {
  const documentId = req.params.documentId;
  try {
    const documentFound = await DocumentModel.findOne({
      associationCode: req.params.associationCode,
      _id: documentId,
    });
    if (!documentFound) {
      const response = {
        status: 'error',
        message: `No se han encontrado el documento con identificador: ${documentId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      document: documentFound,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar el documento ${documentId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un documento
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const documentId = req.params.documentId;
  try {
    req.body._id = documentId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const documentModel = new DocumentModel(req.body);
    const documentUpdated = await DocumentModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: documentId,
      },
      documentModel,
      {
        new: true,
      }
    );
    if (!documentUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado el documento a eliminar: ${documentId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      document: documentUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar el documento con identificador ${documentId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar el buffer de documento
const updateBufferDocument = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const documentId = req.params.documentId;
  try {
    req.body._id = documentId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const documentUpdated = await DocumentModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: documentId,
      },
      {
        fileName: path.basename(
          req.file.originalname,
          path.extname(req.file.originalname)
        ),
        extension: path.extname(req.file.originalname),
        encoding: req.file.encoding,
        mimetype: req.file.mimetype,
        size: req.file.size,
        buffer: req.file.buffer,
      },
      {
        new: true,
      }
    );
    if (!documentUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado el documento a eliminar: ${documentId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      document: documentUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar el documento con identificador ${documentId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar un documento
const remove = async (req, res, next) => {
  const documentId = req.params.documentId;
  try {
    const documentRemoved = await DocumentModel.findOneAndDelete({
      associationCode: req.params.associationCode,
      _id: documentId,
    });
    if (!documentRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado el documento a eliminar: ${documentId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      document: documentRemoved,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar el documento ${documentId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar las situaciones de una cuota de socio
const getDocuments = async (req, res, next) => {
  try {
    const documents = await DocumentModel.find({
      associationCode: req.params.associationCode,
      partnerId: req.params.partnerId,
      documentFeeId: req.params.documentId,
      announcementId: req.params.announcementId,
    }).sort('-dischargeDate');
    const response = {
      status: 'success',
      documents: documents,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar los documentos: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = {
  create,
  read,
  update,
  updateBufferDocument,
  remove,
  getDocuments,
};
