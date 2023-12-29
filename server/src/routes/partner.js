const express = require('express');
const {
  create,
  read,
  update,
  updateImage,
  remove,
  getPartners,
} = require('../controllers/partner');
const authRequiered = require('../middlewares/validateToken');
const {
  auditRequestInput,
  auditRequestOutput,
} = require('../controllers/audit/auditRequest');
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const partnerRouter = express.Router();
partnerRouter.post(
  '/:associationCode/socios/',
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
partnerRouter.get(
  '/:associationCode/socios/:partnerId',
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
partnerRouter.put(
  '/:associationCode/socios/:partnerId',
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
partnerRouter.put(
  '/:associationCode/socios/:partnerId/imagen',
  authRequiered,
  auditRequestInput,
  upload.single('image'),
  updateImage,
  auditRequestOutput
);
partnerRouter.delete(
  '/:associationCode/socios/:partnerId',
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
partnerRouter.get(
  '/:associationCode/socios/',
  authRequiered,
  auditRequestInput,
  getPartners,
  auditRequestOutput
);

module.exports = partnerRouter;
