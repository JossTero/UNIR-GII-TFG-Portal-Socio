const express = require("express");
const {
  create,
  read,
  update,
  remove,
  getExecutives,
} = require("../controllers/executive");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const executiveRouter = express.Router();
executiveRouter.post(
  "/:associationCode/directiva/:boardId/directivos/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
executiveRouter.get(
  "/:associationCode/directiva/:boardId/directivos/:executiveId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
executiveRouter.put(
  "/:associationCode/directiva/:boardId/directivos/:executiveId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
executiveRouter.delete(
  "/:associationCode/directiva/:boardId/directivos/:executiveId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
executiveRouter.get(
  "/:associationCode/directiva/:boardId/directivos/",
  authRequiered,
  auditRequestInput,
  getExecutives,
  auditRequestOutput
);

module.exports = executiveRouter;
