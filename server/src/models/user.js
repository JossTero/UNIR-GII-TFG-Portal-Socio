const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const userScheme = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      trim: true,
    },
    surname: {
      type: String,
      required: true,
      trim: true,
    },
    secondSurname: {
      type: String,
      trim: true,
    },
    registrationDate: {
      type: Date,
      trim: true,
      default: Date.now,
    },
    type: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    associationCode: {
      type: String,
      ref: DDBB_CONSTANTS.associationsCollection,
      trim: true,
    },
    partnerId: {
      type: String,
      ref: DDBB_CONSTANTS.partnersCollection,
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

module.exports = model(DDBB_CONSTANTS.usersCollection, userScheme);
