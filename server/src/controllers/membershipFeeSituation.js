const MembershipFeeSituationModel = require('../models/membershipFeeSituation');
const { updateSituationId } = require('./membershipFee');
const { DDBB_CONSTANTS } = require('../constants');
const { nextVal } = require('../helpers/nextVal');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');

// Método para crear una situación de cuota de socio
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (req.params.associationCode) {
    req.body.associationCode = req.params.associationCode;
  }
  if (req.params.partnerId) {
    req.body.partnerId = req.params.partnerId;
  }
  if (req.params.membershipId) {
    const membershipId = req.params.membershipId;
    req.body.membershipFeeId = membershipId;
    req.body.situationNumber = await nextVal(
      DDBB_CONSTANTS.membershipFeeSituationsCollection + '#' + membershipId
    );
  }
  const membershipFeeSituationModel = new MembershipFeeSituationModel(req.body);
  membershipFeeSituationModel
    .save()
    .then((membershipFeeSituationStored) => {
      req.body.membershipFeeSituationId = membershipFeeSituationStored._id;
      updateSituationId(req, res);
      const response = {
        status: 'success',
        membershipFeeSituationStored,
      };
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear la situación de la cuota de socio ${membershipFeeSituationModel.situationNumber}: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar una situación de cuota de socio
const read = async (req, res, next) => {
  const situationId = req.params.situationId;
  try {
    const membershipFeeSituationFound =
      await MembershipFeeSituationModel.findOne({
        associationCode: req.params.associationCode,
        partnerId: req.params.partnerId,
        membershipFeeId: req.params.membershipId,
        _id: situationId,
      });
    if (!membershipFeeSituationFound) {
      const response = {
        status: 'error',
        message: `No se han encontrado la situación de la cuota de socio con número: ${situationId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membershipSituation: membershipFeeSituationFound,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar la situación de la cuota de socio ${situationId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar una situación de cuota de socio
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const situationId = req.params.situationId;
  try {
    req.body._id = situationId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const membershipFeeSituationModel = new MembershipFeeSituationModel(
      req.body
    );
    const membershipFeeSituationUpdated =
      await MembershipFeeSituationModel.findOneAndUpdate(
        {
          associationCode: associationCode,
          partnerId: req.params.partnerId,
          membershipFeeId: req.params.membershipId,
          _id: situationId,
        },
        membershipFeeSituationModel,
        {
          new: true,
        }
      );
    if (!membershipFeeSituationUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado la situación de la cuota de socio a eliminar: ${situationId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membershipSituation: membershipFeeSituationUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar la situación de la cuota de socio con número ${situationId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para eliminar una situación de cuota de socio
const remove = async (req, res, next) => {
  const situationId = req.params.situationId;
  try {
    const membershipFeeSituationRemoved =
      await MembershipFeeSituationModel.findOneAndDelete({
        associationCode: req.params.associationCode,
        partnerId: req.params.partnerId,
        membershipFeeId: req.params.membershipId,
        _id: situationId,
      });
    if (!membershipFeeSituationRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado la situación de la cuota de socio a eliminar: ${situationId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membershipSituation: membershipFeeSituationRemoved,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar la situación de la cuota de socio ${situationId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar las situaciones de una cuota de socio
const getSituations = async (req, res, next) => {
  try {
    const membershipFeeSituations = await MembershipFeeSituationModel.find({
      associationCode: req.user.associationCode,
      partnerId: req.params.partnerId,
      membershipFeeId: req.params.membershipId,
    }).sort('-situationNumber');
    const response = {
      status: 'success',
      membershipSituations: membershipFeeSituations,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar las situaciones de la cuota de socio: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = { create, read, update, remove, getSituations };
