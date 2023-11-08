//PASO 12
const express = require("express");

const {
  getSingers,
  getSingerByID,
  getSingerByName,
  deleteSinger,
  createSinger,
  updateSinger,
  changePlaceholder,
} = require("../api/controllers/singer.controller");

const SingerRouter = express.Router();

SingerRouter.get("/", getSingers);
SingerRouter.get("/byid/:id", getSingerByID);
SingerRouter.get("/byname/:name", getSingerByName);
SingerRouter.post("/", createSinger);
SingerRouter.patch("/:id", updateSinger);
SingerRouter.patch("/placeholder/:id", changePlaceholder);
SingerRouter.delete("/:id", deleteSinger);

module.exports = SingerRouter;

