const { matchedData } = require("express-validator");
const { tracksModel } = require("../models");
const { handleError } = require("../utils/hanldeError");

async function getItems(req, res) {
  try {
    const data = await tracksModel.find({});
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_GET_ITEMS", 403);
  }
}
async function getItem(req, res) {
  try {
    req = matchedData(req);
    const { id } = req;
    const data = await tracksModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_GET_ITEM", 403);
  }
}
async function createItem(req, res) {
  try {
    //function de express-validator que limpia lo que no se espesifica
    const body = matchedData(req);
    const data = await tracksModel.create(body);
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_CREATE_ITEMS", 403);
  }
}
async function updateItem(req, res) {
  try {
    //Crea dos arreglos, uno id y otro con el resto
    const { id, ...body } = matchedData(req);
    const data = await tracksModel.findOneAndUpdate(id, body);
    //busca con un id y cambia el body
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_UPDATE_ITEMS", 403);
  }
}
async function deleteItem(req, res) {
  try {
    req = matchedData(req);
    const { id } = req;
    //soft delete/no borra los datos de la base de datos
    //delteOne/si borra el dato
    const data = await tracksModel.delete({ _id: id });
    res.send({ data });
  } catch (error) {
    handleError(res, "ERROR_DELETE_ITEM", 403);
  }
}
module.exports = { getItems, getItem, createItem, updateItem, deleteItem };
