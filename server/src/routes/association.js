const express = require('express');
const {
  create,
  read,
  update,
  updateLogo,
  remove,
  getAssociations,
  getAssociationsSimple,
} = require('../controllers/association');
const authRequiered = require('../middlewares/validateToken');
const {
  auditRequestInput,
  auditRequestOutput,
} = require('../controllers/audit/auditRequest');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const associationRouter = express.Router();
associationRouter.post(
  '/asociaciones/',
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
associationRouter.get(
  '/asociaciones/:associationCode',
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
associationRouter.put(
  '/asociaciones/:associationCode',
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
associationRouter.put(
  '/asociaciones/:associationCode/logo',
  authRequiered,
  auditRequestInput,
  upload.single('logo'),
  updateLogo,
  auditRequestOutput
);
associationRouter.delete(
  '/asociaciones/:associationCode',
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
associationRouter.get(
  '/asociaciones/',
  authRequiered,
  auditRequestInput,
  getAssociations,
  auditRequestOutput
);
associationRouter.get('/asociaciones-simple/', getAssociationsSimple);

module.exports = associationRouter;
