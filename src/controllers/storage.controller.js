const { matchedData } = require("express-validator");
const fs = require("fs");
const { storageModel } = require("../models");
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;

const { handleError } = require("../utils/hanldeError");

async function getItems(req, res) {
  try {
    const data = await storageModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_ITEMS_STORAGE", 403);
  }
}
async function getItem(req, res) {
  try {
    const { id } = matchedData(req);
    const data = await storageModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_ITEM_STORAGE", 403);
  }
}

async function createItem(req, res) {
  try {
    const { file } = req;

    const fileDate = {
      filename: file.filename,
      url: `${PUBLIC_URL}/${file.filename}`,
    };
    const data = await storageModel.create(fileDate);
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_CREATE_STORAGE", 403);
  }
}

async function deleteItem(req, res) {
  try {
    const { id } = matchedData(req);
    const dataFile = await storageModel.findById(id);
    await storageModel.deleteOne(id);
    const { filename } = dataFile;
    const filePath = `${MEDIA_PATH}/${filename}`;
    fs.unlinkSync(filePath);
    const data = {
      filePath,
      deleted: 1,
    };
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_ITEM_STORAGE", 403);
  }
}
module.exports = { getItems, getItem, createItem, deleteItem };
