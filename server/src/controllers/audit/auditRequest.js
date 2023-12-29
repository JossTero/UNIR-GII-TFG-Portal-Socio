const bcrypt = require("bcryptjs");
const AuditRequestModel = require("../../models/audit/auditRequest");
const { USER_CONSTANTS } = require("../../constants");
const { readAuditLogin } = require("./auditLogin");

// Método para registrar la entrada de la petición
const auditRequestInput = async (req, res, next) => {
  let auditRequestStored = null;
  let instanceNumber = req.app.get("instanceNumber");
  let auditLoginId = "";
  let auditUser = "";
  let auditLoginFound = req.auditLogin;
  if (!auditLoginFound) {
    auditLoginFound = await readAuditLogin(req, res);
  }
  if (auditLoginFound) {
    auditLoginId = auditLoginFound._id;
    auditUser = auditLoginFound.user;
  }
  if (instanceNumber) {
    let requestBody = JSON.parse(JSON.stringify(req.body));
    if (requestBody.password) {
      const passwordHash = await bcrypt.hash(
        requestBody.password,
        USER_CONSTANTS.moduleHash
      );
      requestBody.password = passwordHash;
    }
    const parms = {
      instanceNumber: instanceNumber,
      auditLoginId: auditLoginId,
      requestMethod: req.method,
      requestUrl: req.originalUrl,
      request: req.url,
      requestBody: requestBody,
      auditUser: auditUser,
    };

    const auditRequestModel = new AuditRequestModel(parms);
    auditRequestStored = await auditRequestModel
      .save()
      .then((auditRequestStored) => {
        return auditRequestStored;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
  req.auditRequest = auditRequestStored;
  await next();
};

// Método para registrar el logout del usuario
const auditRequestOutput = async (req, res) => {
  let auditRequestUpdated = null;
  const response = res.response;
  const auditRequestFound = req.auditRequest;
  if (response && auditRequestFound) {
    try {
      let status = "";
      if (response.status) {
        status = response.status;
      }
      let message = "";
      if (response.message) {
        message = response.message;
      }
      auditRequestUpdated = await AuditRequestModel.findByIdAndUpdate(
        auditRequestFound._id,
        {
          statusResponse: status,
          messageResponse: message,
          requestResponse: response,
          requestResponseTime: Date.now(),
        },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return auditRequestUpdated;
};

module.exports = { auditRequestInput, auditRequestOutput };
