const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const { handleError } = require("../utils/hanldeError");
async function getItems(req, res) {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_GET_STORAGE", 403);
  }
}
async function getItem(req, res) {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_GET_STORAGE", 403);
  }
}





async function createItem(req, res) {
  const { body, file } = req;
  console.log(body);
  const fileDate = {
    filename: file.filename,
    url: `${PUBLIC_URL}/${file.filename}`,
  };
  const data = await storageModel.create(fileDate);
  res.send({ data });
}
function updateItem(req, res) {}
function deleteItem(req, res) {}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
