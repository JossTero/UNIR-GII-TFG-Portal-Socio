const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const documentScheme = new Schema(
  {
    module: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    dischargeDate: {
      type: Date,
      required: true,
      trim: true,
      default: Date.now,
    },
    highUser: {
      type: String,
      required: true,
      trim: true,
    },
    fileName: {
      type: String,
      trim: true,
    },
    extension: {
      type: String,
      trim: true,
    },
    size: {
      type: Number,
      trim: true,
    },
    mimetype: {
      type: String,
    },
    encoding: {
      type: String,
    },
    buffer: {
      type: Buffer,
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
      trim: true,
    },
    membershipFeeId: {
      type: String,
      ref: DDBB_CONSTANTS.membershipFeesCollection,
      trim: true,
    },
    membershipFeeSituationId: {
      type: String,
      ref: DDBB_CONSTANTS.membershipFeeSituationsCollection,
      trim: true,
    },
    announcementId: {
      type: String,
      ref: DDBB_CONSTANTS.announcementsCollection,
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
  DDBB_CONSTANTS.documentsCollection,
  documentScheme
);
