const jwt = require("jsonwebtoken");
const { USER_CONSTANTS } = require("../constants");
const { getStructureUserResponse } = require("./structureUser");

const createAccessToken = (user) => {
  const payload = getStructureUserResponse(user);
  return new Promise((resolve, reject) => {
    jwt.sign(
      payload,
      USER_CONSTANTS.passwordKey,
      {
        expiresIn: USER_CONSTANTS.expiresIn,
      },
      (err, token) => {
        if (err) {
          return reject(err);
        }
        resolve(token);
      }
    );
  });
};

const verifyJWT = (token, dataCallback) => {
  jwt.verify(token, USER_CONSTANTS.passwordKey, dataCallback);
};

module.exports = { createAccessToken, verifyJWT };
