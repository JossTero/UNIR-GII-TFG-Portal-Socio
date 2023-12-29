const { Schema, model } = require("mongoose");
const { DDBB_CONSTANTS } = require("../constants");

const imageScheme = new Schema(
  {
    originalname: {
      type: String,
      required: true,
    },
    encoding: {
      type: String,
      required: true,
    },
    mimetype: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    buffer: {
      type: Buffer,
      required: true,
    }
  }
);

module.exports = model(
  DDBB_CONSTANTS.imageCollection,
  imageScheme
);
