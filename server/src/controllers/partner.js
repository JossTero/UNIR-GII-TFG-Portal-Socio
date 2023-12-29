const PartnerModel = require('../models/partner');
const ImageModel = require('../models/image');
const { DDBB_CONSTANTS } = require('../constants');
const { nextVal } = require('../helpers/nextVal');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');

// Método para crear un socio
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (req.params.associationCode) {
    const associationCode = req.params.associationCode;
    req.body.associationCode = associationCode;
    req.body.partnerNumber = await nextVal(
      DDBB_CONSTANTS.partnersCollection + '#' + associationCode
    );
  }

  const partnerModel = new PartnerModel(req.body);
  partnerModel
    .save()
    .then((partnerStored) => {
      const response = {
        status: 'success',
        partnerStored,
      };
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear el socio ${
        partnerModel.name
      } ${partnerModel.surname}${
        partnerModel.secondSurname.length > 0
          ? ' ' + partnerModel.secondSurname
          : ''
      }: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar un socio
const read = async (req, res, next) => {
  const partnerId = req.params.partnerId;
  try {
    const partnerFound = await PartnerModel.findOne({
      associationCode: req.params.associationCode,
      _id: partnerId,
    });
    if (!partnerFound) {
      const response = {
        status: 'error',
        message: `No se han encontrado el socio : ${partnerId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      partner: partnerFound,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar el socio ${partnerId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar un socio
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const partnerId = req.params.partnerId;
  try {
    req.body._id = partnerId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const partnerModel = new PartnerModel(req.body);
    const partnerUpdated = await PartnerModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: partnerId,
      },
      partnerModel,
      {
        new: true,
      }
    );
    if (!partnerUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado el socio a eliminar: ${partnerId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      partner: partnerUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar el socio con identificador ${partnerId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar la imagen de un socio
const updateImage = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const partnerId = req.params.partnerId;
  try {
    req.body._id = partnerId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const imageModel = new ImageModel(req.file);
    const partnerUpdated = await PartnerModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        _id: partnerId,
      },
      { image: imageModel },
      {
        new: true,
      }
    );
    if (!partnerUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado el socio a actualizar: ${partnerId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      partner: partnerUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar el socio con identificador ${partnerId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar un socio
const remove = async (req, res, next) => {
  const partnerId = req.params.partnerId;
  try {
    const partnerRemoved = await PartnerModel.findOneAndDelete({
      associationCode: req.params.associationCode,
      _id: partnerId,
    });
    if (!partnerRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado el socio a eliminar: ${partnerId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      partner: partnerRemoved,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar el usuario con código ${partnerId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar los socios de la asociación
const getPartners = async (req, res, next) => {
  try {
    const partners = await PartnerModel.find({
      associationCode: req.params.associationCode,
    }).sort('-dischargeDate');
    const response = {
      status: 'success',
      partners: partners,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar los socios: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = { create, read, update, updateImage, remove, getPartners };
