const express = require("express");
const {
  create,
  read,
  update,
  remove,
  getSituations,
} = require("../controllers/membershipFeeSituation");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const membershipFeeSituationRouter = express.Router();
membershipFeeSituationRouter.post(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/situaciones/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
membershipFeeSituationRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/situaciones/:situationId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
membershipFeeSituationRouter.put(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/situaciones/:situationId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
membershipFeeSituationRouter.delete(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/situaciones/:situationId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
membershipFeeSituationRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/situaciones/",
  authRequiered,
  auditRequestInput,
  getSituations,
  auditRequestOutput
);

module.exports = membershipFeeSituationRouter;
