const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const boardOfDirectorsScheme = new Schema(
  {
    constitutionDate: {
      type: Date,
      trim: true,
      default: Date.now,
      unique: true,
    },
    statusBoardOfDirector: {
      type: String,
      required: true,
      trim: true,
    },
    associationCode: {
      type: String,
      ref: DDBB_CONSTANTS.associationsCollection,
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

module.exports = model(
  DDBB_CONSTANTS.boardOfDirectorsCollection,
  boardOfDirectorsScheme
);
