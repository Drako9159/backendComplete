const { tracksModel } = require("../models");

async function getItems(req, res) {
  const data = await tracksModel.find({});

  res.send({ data });
}
function getItem(req, res) {}
async function createItem(req, res) {
  const { body } = req;
  
  const data = await tracksModel.create(body)
  res.send({ data });
}
function updateItem(req, res) {}
function deleteItem(req, res) {}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
