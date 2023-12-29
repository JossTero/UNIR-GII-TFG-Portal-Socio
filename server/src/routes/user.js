const express = require("express");
const {
  create,
  read,
  update,
  remove,
  getusers,
} = require("../controllers/user");
const authRequiered = require("../middlewares/validateToken");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");

const userRouter = express.Router();
userRouter.post(
  "/usuarios/",
  authRequiered,
  auditRequestInput,
  create,
  auditRequestOutput
);
userRouter.get(
  "/usuarios/:userId",
  authRequiered,
  auditRequestInput,
  read,
  auditRequestOutput
);
userRouter.put(
  "/usuarios/:userId",
  authRequiered,
  auditRequestInput,
  update,
  auditRequestOutput
);
userRouter.delete(
  "/usuarios/:userId",
  authRequiered,
  auditRequestInput,
  remove,
  auditRequestOutput
);
userRouter.get(
  "/usuarios/",
  authRequiered,
  auditRequestInput,
  getusers,
  auditRequestOutput
);

module.exports = userRouter;
