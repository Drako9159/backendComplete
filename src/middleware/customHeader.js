function customHeader(req, res, next) {
  try {
    const apiKey = req.headers.api_key;
    if (apiKey === "00") {
      next();
    } else {
      res.status(403).send({ error: "Api incorrecta" });
    }
  } catch (error) {
    res.status(403).send({ error: "Fallo en el custom header" });
  }
}

module.exports = customHeader;
