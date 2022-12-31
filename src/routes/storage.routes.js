const { Router } = require("express");
const router = Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
} = require("../controllers/storage.controller");
const { validatorGetItem } = require("../validators/storage");

router.get("/", getItems);

router.get("/:id", validatorGetItem, getItem);

router.delete("/:id", validatorGetItem, deleteItem);

router.post("/", uploadMiddleware.single("myFile"), createItem);

module.exports = router;
