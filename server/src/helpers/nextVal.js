const SequenceModel = require("../models/sequence");

const nextVal = async (reference) => {
  const sequenceUpdated = await SequenceModel.findOneAndUpdate(
    { reference: reference },
    { $inc: { seq: 1 } },
    {
      new: true,
      upsert: true,
    }
  );
  return sequenceUpdated.seq;
};

module.exports = { nextVal };
