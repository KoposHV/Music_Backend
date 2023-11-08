//paso 11
const Singer = require("../models/singer.model");

const getSingers = async (req, res) => {
  try {
    const singers = await Singer.find();
    return res.status(200).json(singers);
  } catch (error) {
    return res.status(404).json("Singers not found", error);
  }
};

const getSingerByID = async (req, res) => {
  try {
    const { id } = req.params;
    const singer = await Singer.findById(id);
    return res.status(200).json(singer);
  } catch (error) {
    return res.status(404).json("Singer not found", error);
  }
};

const getSingerByName = async (req, res) => {
  try {
    const { name } = req.params;
    const singer = await Singer.findOne({ name: name });
    return res.status(200).json(satisfiesinger);
  } catch (error) {
    return res.status(404).json("Singer not found", error);
  }
};

const createSinger = async (req, res) => {
  try {
    const newSinger = new Singer(req.body);
    await newSinger.save();
    return res.status(201).json(newSinger);
  } catch (error) {
    return res.status(500).json("Failed creating singer", error);
  }
};

const deleteSinger = async (req, res) => {
  try {
    const { id } = req.params;
    await Singer.findByIdAndDelete(id);
    return res.status(200).json("Singer deleted");
  } catch (error) {
    return res.status(500).json("Failed deleting singer");
  }
};

const updateSinger = async (req, res) => {
  try {
    const { id } = req.params;
    const newSinger = new Singer(req.body);
    newSinger._id = id;
    await Singer.findByIdAndUpdate(id, newSinger);
    return res.status(200).json("Edited singer");
  } catch (error) {
    return res.status(500).json("Failed editing singer", error);
  }
};

const changePlaceholder = async (req, res) => {
  try {
    const { id } = req.params;
    const newSinger = new Singer({
      photo:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmqVo5-PL__WgOgNsQ7Gk_7cQy62R86AJEewof590Nkg&s",
    });
    newSinger._id = id;
    await Singer.findByIdAndUpdate(id, newSinger);
    return res.status(200).json("Placeholder added");
  } catch (error) {
    return res.status(500).json("Failed placeholder");
  }
};

module.exports = {
  getSingers,
  getSingerByID,
  getSingerByName,
  deleteSinger,
  createSinger,
  updateSinger,
  changePlaceholder,
};