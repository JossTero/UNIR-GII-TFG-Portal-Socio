const express = require("express");
const {
  create,
  read,
  update,
  updateImage,
  remove,
  getAnnouncements,
} = require("../controllers/announcement");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");
const multer = require('multer');
const upload = multer({ storage: multer.memoryStorage() });

const announcementRouter = express.Router();
announcementRouter.post(
  "/:associationCode/anuncios/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
announcementRouter.get(
  "/:associationCode/anuncios/:announcementId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
announcementRouter.put(
  "/:associationCode/anuncios/:announcementId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
announcementRouter.put(
  '/:associationCode/anuncios/:announcementId/imagen',
  authRequiered,
  auditRequestInput,
  upload.single('image'),
  updateImage,
  auditRequestOutput
);
announcementRouter.delete(
  "/:associationCode/anuncios/:announcementId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
announcementRouter.get(
  "/:associationCode/anuncios/",
  authRequiered,
  auditRequestInput,
  getAnnouncements,
  auditRequestOutput
);

module.exports = announcementRouter;
