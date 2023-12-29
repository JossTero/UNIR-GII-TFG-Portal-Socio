const { Schema, model } = require("mongoose");
const basicDocumentScheme = require("./image"); 
const { DDBB_CONSTANTS } = require("../constants");

const announcementScheme = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
    },
    publicationDate: {
      type: Date,
      trim: true,
      required: true,
      default: Date.now,
    },
    finishDate: {
      type: Date,
      trim: true,
      default: Date.now,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    text: {
      type: String,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
      trim: true,
      image: basicDocumentScheme,
    },
    author: {
      type: String,
      trim: true,
    },
    importanceLevel: {
      type: String,
      required: true,
      trim: true,
      default: "ILOW",
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
  DDBB_CONSTANTS.announcementsCollection,
  announcementScheme
);
