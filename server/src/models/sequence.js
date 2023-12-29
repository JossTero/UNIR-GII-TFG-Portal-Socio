const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const sequenceScheme = new Schema(
  {
    reference: {
      type: String,
      unique: true,
    },
    seq: {
      type: Number,
      required: true,
    }
  }
);

module.exports = model(
  DDBB_CONSTANTS.sequencesCollection,
  sequenceScheme
);
