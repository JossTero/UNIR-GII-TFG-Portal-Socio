const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const executiveScheme = new Schema(
  {
    position: {
      type: String,
      required: true,
      trim: true,
    },
    positionDate: {
      type: Date,
      required: true,
      trim: true,
      default: Date.now,
    },
    associationCode: {
      type: String,
      ref: DDBB_CONSTANTS.associationsCollection,
      required: true,
      trim: true,
    },
    boardOfDirectorsId: {
      type: String,
      ref: DDBB_CONSTANTS.boardOfDirectorsCollection,
      required: true,
      trim: true,
    },
    partnerId: {
      type: String,
      ref: DDBB_CONSTANTS.partnersCollection,
      required: true,
      trim: true,
    },
    auditUser: {
      type: String,
      required: true,
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

module.exports = model(DDBB_CONSTANTS.executivesCollection, executiveScheme);
