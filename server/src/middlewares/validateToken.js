const { verifyJWT } = require("../helpers/auth");
const {
  auditRequestInput,
  auditRequestOutput,
} = require("../controllers/audit/auditRequest");
const { sendRequestResponse } = require("./sendRequestResponse");

// Middleware de validación de autentificación (Es un Middleware porque tiene el parámetro next para continuar si todo está correcto)
const authRequiered = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token || token === "") {
    const response = {
      status: "error",
      message: "Sesión expirada: Autentificación denegada",
    };
    res.response = response;
    await auditRequestInput(req, res, () => {});
    await auditRequestOutput(req, res);
    return sendRequestResponse(req, res, () => {}, 401, response);
  }

  const resultVerifyToken = async (err, user) => {
    if (err) {
      const response = {
        status: "error",
        message: "Usuario no válido",
      };
      res.response = response;
      await auditRequestInput(req, res, () => {});
      await auditRequestOutput(req, res);
      return sendRequestResponse(req, res, () => {}, 403, response);
    }

    if (user.associationCode) {
      const isMatchAssociation =
        user.associationCode == req.params.associationCode;
      if (!isMatchAssociation) {
        const response = {
          status: "error",
          message: "Usuario no válido",
        };
        res.response = response;
        await auditRequestInput(req, res, () => {});
        await auditRequestOutput(req, res);
        return sendRequestResponse(req, res, () => {}, 403, response);
      }
    }
    req.user = user;
    await next();
  };

  verifyJWT(token, resultVerifyToken);
};

module.exports = authRequiered;
