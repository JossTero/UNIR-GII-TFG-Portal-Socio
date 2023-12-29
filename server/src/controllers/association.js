const AssociationModel = require('../models/association');
const ImageModel = require('../models/image');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');

// Método para guardar una asociación en base de datos
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  const associationModel = new AssociationModel(req.body);
  associationModel
    .save()
    .then((associationStored) => {
      const response = {
        status: 'success',
        associationStored,
      };
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear la asociación ${associationModel.businessName}: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para devolver la asociación por código
const read = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  try {
    const associationFound = await AssociationModel.findOne({
      code: associationCode,
    });
    if (!associationFound) {
      const response = {
        status: 'error',
        message: `No se han encontrado la asociación : ${associationCode}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      association: associationFound,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar la asociación con código${associationCode}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar una asociación
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  try {
    req.body.associationCode = associationCode;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    const associationModel = new AssociationModel(req.body);
    const associationUpdated = await AssociationModel.findOneAndUpdate(
      { code: associationCode },
      associationModel,
      {
        new: true,
      }
    );
    if (!associationUpdated) {
      const response = {
        status: 'error',
        message: `No se ha encontrado la asociación a actualizar: ${associationCode}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      association: associationUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar la asociación con código ${associationCode}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar la imagen de una asociación
const updateLogo = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  try {
    req.body.associationCode = associationCode;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    const imageModel = new ImageModel(req.file);
    const associationUpdated = await AssociationModel.findOneAndUpdate(
      { code: associationCode },
      { logo: imageModel },
      {
        new: true,
      }
    );
    if (!associationUpdated) {
      const response = {
        status: 'error',
        message: `No se ha encontrado la asociación a actualizar: ${associationCode}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      association: associationUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar la asociación con código ${associationCode}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar una asociación
const remove = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  try {
    const associationRemoved = await AssociationModel.findOneAndDelete(
      { code: associationCode },
      {
        new: true,
      }
    );
    if (!associationRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado la asociación a eliminar: ${associationCode}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      association: associationRemoved,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar la asociación con código ${associationCode}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para devolver la lista de asociaciones
const getAssociations = async (req, res, next) => {
  try {
    const associations = await AssociationModel.find().sort('-dischargeDate');
    const response = {
      status: 'success',
      associations: associations,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar las asociaciones: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para devolver la lista de asociaciones simple
const getAssociationsSimple = async (req, res, next) => {
  try {
    const associations = await AssociationModel.find()
      .select('code businessName logo')
      .sort('-dischargeDate');
    const response = {
      status: 'success',
      associations: associations,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar las asociaciones: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = {
  create,
  read,
  update,
  updateLogo,
  remove,
  getAssociations,
  getAssociationsSimple,
};
