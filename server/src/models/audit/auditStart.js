const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../../constants");

const auditStartScheme = new Schema(
  {
    instanceNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    serverAddress: {
      type: String,
      //required: true,
      trim: true,
    },
    webAddress: {
      type: String,
      //required: true,
      trim: true,
    },
    serverPort: {
      type: Number,
      required: true,
      trim: true,
    },
    startTime: {
      type: Date,
      required: true,
      trim: true,
      default: Date.now,
    },
    stopTime: {
      type: Date,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model(
  DDBB_CONSTANTS.AUDIT.auditStartCollection,
  auditStartScheme
);
