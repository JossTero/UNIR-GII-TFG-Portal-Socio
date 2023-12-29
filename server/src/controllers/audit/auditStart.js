const AuditStartModel = require("../../models/audit/auditStart");
const { DDBB_CONSTANTS } = require("../../constants");
const { nextVal } = require("../../helpers/nextVal");

// Método para registrar el arranque del servidor
const auditStart = async (serverAddress, webAddress, serverPort) => {
  const instanceNumber = await nextVal(
    DDBB_CONSTANTS.AUDIT.auditStartCollection
  );
  const parms = {
    instanceNumber: instanceNumber,
    serverAddress: serverAddress,
    webAddress: webAddress,
    serverPort: serverPort,
  };
  const auditStartModel = new AuditStartModel(parms);
  const auditStartStored = await auditStartModel
    .save()
    .then((auditStartStored) => {
      return auditStartStored;
    })
    .catch((err) => {
      console.log(err);
      return null;
    });
  return auditStartStored;
};

// Método para registrar la parada del servidor
const auditStop = async (instanceNumber) => {
  let auditStartUpdated = null;
  if (instanceNumber) {
    try {
      auditStartUpdated = await AuditStartModel.findOneAndUpdate(
        { instanceNumber: instanceNumber },
        { stopTime: Date.now() },
        { new: true }
      );
    } catch (error) {
      console.log(error);
    }
    return auditStartUpdated;
  }
};

module.exports = { auditStart, auditStop };
