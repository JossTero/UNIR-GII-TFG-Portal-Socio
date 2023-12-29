const MembershipModel = require('../models/membershipFee');
const { DDBB_CONSTANTS } = require('../constants');
const { nextVal } = require('../helpers/nextVal');
const { sendRequestResponse } = require('../middlewares/sendRequestResponse');

// Método para crear una cuota de socio
const create = async (req, res, next) => {
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (req.params.associationCode) {
    req.body.associationCode = req.params.associationCode;
  }
  if (req.params.partnerId) {
    const partnerId = req.params.partnerId;
    req.body.partnerId = partnerId;
    req.body.membershipNumber = await nextVal(
      DDBB_CONSTANTS.membershipFeesCollection + '#' + partnerId
    );
  }

  const membershipModel = new MembershipModel(req.body);
  membershipModel
    .save()
    .then((membershipStored) => {
      const response = {
        status: 'success',
        membershipStored,
      };
      return sendRequestResponse(req, res, next, '', response);
    })
    .catch((err) => {
      const message = `Se ha producido un error al crear la cuota de socio ${membershipModel.numberMembership}: ${err}`;
      const response = {
        status: 'error',
        message: message,
      };
      return sendRequestResponse(req, res, next, 404, response);
    });
};

// Método para consultar una cuota de socio
const read = async (req, res, next) => {
  const membershipId = req.params.membershipId;
  try {
    const membershipFound = await MembershipModel.findOne({
      associationCode: req.params.associationCode,
      partnerId: req.params.partnerId,
      _id: membershipId,
    });
    if (!membershipFound) {
      const response = {
        status: 'error',
        message: `No se han encontrado la cuota de socio: ${membershipId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membership: membershipFound,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar la cuota de socio ${membershipId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar una cuota de socio
const update = async (req, res, next) => {
  const associationCode = req.params.associationCode;
  const membershipId = req.params.membershipId;
  try {
    req.body._id = membershipId;
    if (req.user) {
      req.body.auditUser = req.user.username;
    }
    if (associationCode) {
      req.body.associationCode = associationCode;
    }
    const membershipModel = new MembershipModel(req.body);
    const membershipUpdated = await MembershipModel.findOneAndUpdate(
      {
        associationCode: associationCode,
        partnerId: req.params.partnerId,
        _id: membershipId,
      },
      membershipModel,
      {
        new: true,
      }
    );
    if (!membershipUpdated) {
      const response = {
        status: 'error',
        message: `No se han encontrado la cuota de socio a actualizar: ${membershipId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membership: membershipUpdated,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al actualizar la cuota de socio con identificador ${membershipId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para actualizar el identificador de la situación actual de la cuota
const updateSituationId = async (req, res) => {
  const associationCode = req.params.associationCode;
  const membershipId = req.params.membershipId;
  req.body._id = membershipId;
  if (req.user) {
    req.body.auditUser = req.user.username;
  }
  if (associationCode) {
    req.body.associationCode = associationCode;
  }
  const membershipUpdated = await MembershipModel.findOneAndUpdate(
    {
      associationCode: associationCode,
      partnerId: req.params.partnerId,
      _id: membershipId,
    },
    { membershipFeeSituationId: req.body.membershipFeeSituationId },
    {
      new: true,
    }
  );
  return membershipUpdated;
};

// Método para eliminar una cuota de socio
const remove = async (req, res, next) => {
  const membershipId = req.params.membershipId;
  try {
    const membershipRemoved = await MembershipModel.findOneAndDelete({
      associationCode: req.params.associationCode,
      partnerId: req.params.partnerId,
      _id: membershipId,
    });
    if (!membershipRemoved) {
      const response = {
        status: 'error',
        message: `No se han encontrado la cuota de socio a eliminar: ${membershipId}`,
      };
      return sendRequestResponse(req, res, next, 404, response);
    }
    const response = {
      status: 'success',
      membership: membershipRemoved,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al eliminar el usuario con código ${membershipId}: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

// Método para consultar los socios de la asociación
const getMemberships = async (req, res, next) => {
  try {
    const memberships = await MembershipModel.find({
      associationCode: req.params.associationCode,
      partnerId: req.params.partnerId,
    }).sort('-effectDate');
    const response = {
      status: 'success',
      memberships: memberships,
    };
    return sendRequestResponse(req, res, next, '', response);
  } catch (error) {
    const response = {
      status: 'error',
      message: `Error al consultar las cuotas de socios: ${error}`,
    };
    return sendRequestResponse(req, res, next, 500, response);
  }
};

module.exports = {
  create,
  read,
  update,
  updateSituationId,
  remove,
  getMemberships,
};
