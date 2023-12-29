const AuditLoginModel = require("../../models/audit/auditLogin");

// Método para registrar el login del usuario
const auditLogin = async (req, res) => {
  let auditLoginStored = null;
  const instanceNumber = req.app.get("instanceNumber");
  if (instanceNumber) {
    let sessionToken = res.sessionToken;
    if (!sessionToken) {
      const { token } = req.cookies;
      sessionToken = token;
    }
    const token = sessionToken;
    let user = "";
    let loginTime = "";
    if (req.user) {
      user = req.user.username;
      loginTime = Date.now();
    } else {
      user = req.body.username;
    }
    const response = res.response;
    let parms = {
      instanceNumber: instanceNumber,
      user: user,
      token: token,
      status: response.status,
      message: response.message,
      userStored: response.userStored,
      url: req.originalUrl,
      auditUser: user,
    };
    if (loginTime) {
      parms.loginTime = loginTime;
    }
    const auditLoginModel = new AuditLoginModel(parms);
    auditLoginStored = await auditLoginModel
      .save()
      .then((auditLoginStored) => {
        return auditLoginStored;
      })
      .catch((err) => {
        console.log(err);
        return null;
      });
  }
  req.auditLogin = auditLoginStored;
  return auditLoginStored;
};

// Método para registrar el logout del usuario
const auditLogout = async (req, res) => {
  let auditLoginUpdated = null;
  const instanceNumber = req.app.get("instanceNumber");
  const user = req.user.username;
  const { token } = req.cookies;
  if (instanceNumber && user && token) {
    try {
      auditLoginUpdated = await AuditLoginModel.findOneAndUpdate(
        { instanceNumber: instanceNumber, user: user, token: token },
        { logoutTime: Date.now() },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
  }
  return auditLoginUpdated;
};

// Método para consultar el registro de auditoría de login del usuario
const readAuditLogin = async (req, res) => {
  let auditLoginFound = null;
  const instanceNumber = req.app.get("instanceNumber");
  let user = "";
  if (req.user) {
    user = req.user.username;
  } else {
    user = req.body.username;
  }
  const { token } = req.cookies;
  if (instanceNumber && user && token) {
    try {
      auditLoginFound = await AuditLoginModel.findOne({
        instanceNumber: instanceNumber,
        user: user,
        token: token,
      });
    } catch (error) {
      console.log(error);
    }
  }
  return auditLoginFound;
};

module.exports = { auditLogin, auditLogout, readAuditLogin };
