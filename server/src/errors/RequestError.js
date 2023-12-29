class RequestError extends Error {
  constructor(message, status) {
      super(message);
      this.name = "RequestError";
      this.status = status;
  }
}

module.exports = RequestError;