const validateSchema = (schema, req, res) => {
  try {
    schema.parse(req.boby);
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      status: "error",
      error: error.errors.map((error) => error.message),
    });
  }
};

module.exports = { validateSchema };
