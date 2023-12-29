const express = require('express');
const {
  loginAdministrator,
  logout,
  verifyToken,
} = require('../controllers/session');
const authRequiered = require('../middlewares/validateToken');
const {
  auditRequestInput,
  auditRequestOutput,
} = require('../controllers/audit/auditRequest');

const administratorSessionRouter = express.Router();
administratorSessionRouter.post(
  '/admin/login',
  loginAdministrator,
  auditRequestInput,
  auditRequestOutput
);
administratorSessionRouter.delete(
  '/admin/logout',
  authRequiered,
  auditRequestInput,
  logout,
  auditRequestOutput
);
administratorSessionRouter.get('/admin/verify', verifyToken);

module.exports = administratorSessionRouter;
