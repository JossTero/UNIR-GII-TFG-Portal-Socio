const express = require("express");
const {
  create,
  read,
  update,
  remove,
  getMemberships,
} = require("../controllers/membershipFee");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const membershipRouter = express.Router();
membershipRouter.post(
  "/:associationCode/socios/:partnerId/cuotas/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
membershipRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
membershipRouter.put(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
membershipRouter.delete(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
membershipRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/",
  authRequiered,
  auditRequestInput,
  getMemberships,
  auditRequestOutput
);

module.exports = membershipRouter;
