const express = require("express");
const { login, logout } = require("../controllers/session");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const sessionRouter = express.Router();
sessionRouter.post(
  "/:associationCode/login",
  login,
  auditRequestInput,
  auditRequestOutput
);
sessionRouter.delete(
  "/:associationCode/logout",
  authRequiered,
  auditRequestInput,
  logout,
  auditRequestOutput
);

module.exports = sessionRouter;
