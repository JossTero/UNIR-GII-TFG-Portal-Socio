const sendRequestResponse = async (req, res, next, status, response) => {
  if (!status) {
    status = 200;
  }
  res.response = response;
  await next();
  return res.status(status).send(response);
};

module.exports = { sendRequestResponse };
