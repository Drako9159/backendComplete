function handleError(res, mensagge = "Algo succeido", code = 403) {
  res.status(code).send({ error: mensagge });
}
module.exports = { handleError };
