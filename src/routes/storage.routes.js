const { Router } = require("express");
const router = Router();
const uploadMiddleware = require("../utils/handleStorage");
const {
  createItem,
  getItem,
  getItems,
  deleteItem,
  updateItem,
} = require("../controllers/storage.controller");

router.get("/", getItems);
router.get("/:id", getItem);
router.delete("/:id", deleteItem);
router.put("/:id", updateItem);
router.post("/", uploadMiddleware.single("myFile"), createItem);

module.exports = router;
