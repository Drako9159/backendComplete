const { Router } = require("express");
const router = Router();
const {
  getItems,
  getItem,
  createItem,
} = require("../controllers/tracks.controller");

const { validatorCreateItem } = require("../validators/tracks")

//localhost/tracks/GET,POST,DELETE,PUT
router.get("/",  getItems);

router.post("/", validatorCreateItem, createItem);

module.exports = router;/*
const purple = {
  "name": "Drako",
  "album": "ultrainsint",
  "cover": "http://tttt.com",
  "artist": {
    "name": "Drakito",
    "nickname": "drako9159",
    "nationality": "MX"
  },
  "duration": {
    "start": 1,
    "end": 0
  },
  "mediaId": "88623847ijwhsrf687we6tui"
};
*/