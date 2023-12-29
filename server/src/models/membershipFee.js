const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const membershipScheme = new Schema(
  {
    membershipNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    type: {
      type: String,
      required: true,
      trim: true,
      default: "ORDI",
    },
    period: {
      type: String,
      required: true,
      trim: true,
      default: "ANUA",
    },
    effectDate: {
      type: Date,
      trim: true,
      required: true,
      default: Date.now,
    },
    dueDate: {
      type: Date,
      trim: true,
      required: true,
    },
    membership: {
      type: Number,
      trim: true,
      required: true,
      default: 0,
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
    membershipFeeSituationId: {
      type: String,
      ref: DDBB_CONSTANTS.membershipFeeSituationsCollection,
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

module.exports = model(DDBB_CONSTANTS.membershipFeesCollection, membershipScheme);
