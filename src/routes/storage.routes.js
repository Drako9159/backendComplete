const { Router } = require("express");
const router = Router();
const uploadMiddleware = require("../utils/handleStorage");
const { createItem } = require("../controllers/storage.controller")


router.post("/", uploadMiddleware.single("myFile"), createItem);

module.exports = router;
