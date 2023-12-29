const express = require("express");
const {
  create,
  read,
  update,
  updateBufferDocument,
  remove,
  getDocuments,
} = require("../controllers/document");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const associationDocumentRouter = express.Router();
associationDocumentRouter.post(
  "/:associationCode/documentos/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
associationDocumentRouter.get(
  "/:associationCode/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
associationDocumentRouter.put(
  "/:associationCode/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
associationDocumentRouter.put(
  "/:associationCode/documentos/:documentId/documento",
  authRequiered,
  auditRequestInput,
  upload.single('file'),
  updateBufferDocument,
  auditRequestOutput
);
associationDocumentRouter.delete(
  "/:associationCode/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
associationDocumentRouter.get(
  "/:associationCode/documentos/",
  authRequiered,
  auditRequestInput,
  getDocuments,
  auditRequestOutput
);

const partnerDocumentRouter = express.Router();
partnerDocumentRouter.post(
  "/:associationCode/socios/:partnerId/documentos/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
partnerDocumentRouter.get(
  "/:associationCode/socios/:partnerId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
partnerDocumentRouter.put(
  "/:associationCode/socios/:partnerId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
partnerDocumentRouter.delete(
  "/:associationCode/socios/:partnerId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
partnerDocumentRouter.get(
  "/:associationCode/socios/:partnerId/documentos/",
  authRequiered,
  auditRequestInput,
  getDocuments,
  auditRequestOutput
);

const membershipFeeDocumentRouter = express.Router();
membershipFeeDocumentRouter.post(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/documentos/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
membershipFeeDocumentRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
membershipFeeDocumentRouter.put(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
membershipFeeDocumentRouter.delete(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
membershipFeeDocumentRouter.get(
  "/:associationCode/socios/:partnerId/cuotas/:membershipId/documentos/",
  authRequiered,
  auditRequestInput,
  getDocuments,
  auditRequestOutput
);

const announcementDocumentRouter = express.Router();
announcementDocumentRouter.post(
  "/:associationCode/anuncios/:announcementId/documentos/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
announcementDocumentRouter.get(
  "/:associationCode/anuncios/:announcementId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
announcementDocumentRouter.put(
  "/:associationCode/anuncios/:announcementId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
announcementDocumentRouter.delete(
  "/:associationCode/anuncios/:announcementId/documentos/:documentId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
announcementDocumentRouter.get(
  "/:associationCode/anuncios/:announcementId/documentos/",
  authRequiered,
  auditRequestInput,
  getDocuments,
  auditRequestOutput
);

module.exports = {
  associationDocumentRouter,
  partnerDocumentRouter,
  membershipFeeDocumentRouter,
  announcementDocumentRouter,
};
