const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../../constants");

const auditRequestScheme = new Schema(
  {
    instanceNumber: {
      type: Number,
      ref: DDBB_CONSTANTS.AUDIT.auditStartCollection,
      trim: true,
    },
    auditLoginId: {
      type: String,
      ref: DDBB_CONSTANTS.AUDIT.auditLoginCollection,
      trim: true,
    },
    requestMethod: {
      type: String,
      required: true,
      trim: true,
    },
    requestUrl: {
      type: String,
      required: true,
      trim: true,
    },
    request: {
      type: String,
      required: true,
      trim: true,
    },
    requestBody: {
      type: Object,
      required: true,
      trim: true,
    },
    requestTime: {
      type: Date,
      required: true,
      trim: true,
      default: Date.now,
    },
    statusResponse: {
      type: String,
      trim: true,
    },
    messageResponse: {
      type: String,
      trim: true,
    },
    requestResponse: {
      type: Object,
      trim: true,
    },
    requestResponseTime: {
      type: Date,
      trim: true,
    },
    auditUser: {
      type: String,
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
  DDBB_CONSTANTS.AUDIT.auditRequestCollection,
  auditRequestScheme
);
