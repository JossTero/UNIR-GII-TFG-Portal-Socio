const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const membershipFeeSituationScheme = new Schema(
  {
    situationNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    statusSituation: {
      type: String,
      required: true,
      trim: true,
    },
    reason: {
      type: String,
      required: true,
      trim: true,
    },
    situationDate: {
      type: Date,
      trim: true,
      required: true,
      default: Date.now,
    },
    paymentMethod: {
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
    partnerId: {
      type: String,
      ref: DDBB_CONSTANTS.partnersCollection,
      required: true,
      trim: true,
    },
    membershipFeeId: {
      type: String,
      ref: DDBB_CONSTANTS.membershipFeesCollection,
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
  DDBB_CONSTANTS.membershipFeeSituationsCollection,
  membershipFeeSituationScheme
);
