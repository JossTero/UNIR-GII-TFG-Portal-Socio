const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../../constants");

const auditLoginScheme = new Schema(
  {
    instanceNumber: {
      type: Number,
      ref: DDBB_CONSTANTS.AUDIT.auditStartCollection,
      required: true,
      trim: true,
    },
    user: {
      type: String,
      required: true,
      trim: true,
    },
    token: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    message: {
      type: String,
      required: true,
      trim: true,
    },
    userStored: {
      type: Object,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
    loginTime: {
      type: Date,
      trim: true,
    },
    logoutTime: {
      type: Date,
      trim: true,
    },
    auditDate: {
      type: Date,
      required: true,
      trim: true,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model(
  DDBB_CONSTANTS.AUDIT.auditLoginCollection,
  auditLoginScheme
);
