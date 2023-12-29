const { Schema, model } = require("mongoose");
const basicDocumentScheme = require("./image"); 
const { DDBB_CONSTANTS } = require("../constants");

const partnerScheme = new Schema(
  {
    type: {
      type: String,
      required: true,
      trim: true,
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
    documentType: {
      type: String,
      required: true,
      trim: true,
    },
    documentNumber: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    birthdate: {
      type: Date,
      required: true,
      trim: true,
    },
    dischargeDate: {
      type: Date,
      trim: true,
      default: Date.now,
    },
    phone: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    addressTypeOfRoad: {
      type: String,
      required: true,
      trim: true,
    },
    addressStreet: {
      type: String,
      required: true,
      trim: true,
    },
    addressNumber: {
      type: String,
      trim: true,
    },
    addressPortal: {
      type: String,
      trim: true,
    },
    addressBlock: {
      type: String,
      trim: true,
    },
    addressStaircase: {
      type: String,
      trim: true,
    },
    addressFloor: {
      type: String,
      trim: true,
    },
    addressDoor: {
      type: String,
      trim: true,
    },
    addressPopulation: {
      type: String,
      trim: true,
    },
    addressProvince: {
      type: String,
      required: true,
      trim: true,
    },
    addressPostalCode: {
      type: String,
      required: true,
      trim: true,
    },
    addressComplement: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      trim: true,
    },
    statusDate: {
      type: Date,
      trim: true,
      default: Date.now,
    },
    partnerNumber: {
      type: Number,
      required: true,
      trim: true,
    },
    associationCode: {
      type: String,
      ref: DDBB_CONSTANTS.associationsCollection,
      required: true,
      trim: true,
    },
    image: {
      type: Object,
      trim: true,
      image: basicDocumentScheme,
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

module.exports = model(DDBB_CONSTANTS.partnersCollection, partnerScheme);
