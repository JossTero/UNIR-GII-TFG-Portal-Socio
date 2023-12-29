const express = require("express");
const {
  create,
  read,
  readActive,
  update,
  remove,
} = require("../controllers/boardOfDirectors");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const boardOfDirectorsRouter = express.Router();
boardOfDirectorsRouter.post(
  "/:associationCode/directiva/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
boardOfDirectorsRouter.get(
  "/:associationCode/directiva/:boardId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
boardOfDirectorsRouter.get(
  "/:associationCode/directiva-activa/",
  authRequiered,
  auditRequestInput,
  readActive,
  auditRequestOutput
);
boardOfDirectorsRouter.put(
  "/:associationCode/directiva/:boardId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
boardOfDirectorsRouter.delete(
  "/:associationCode/directiva/:boardId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);


module.exports = boardOfDirectorsRouter;
