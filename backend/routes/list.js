const express = require("express");

const router = express.Router();

const listControllers = require("../controllers/list");

router.get("/", listControllers.getList);

router.post("/add-movie/:id", listControllers.postMovie);

module.exports = router;
