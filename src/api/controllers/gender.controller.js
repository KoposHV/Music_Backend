//PASO 12
const Gender = require("../models/gender.model");

const getGenders = async (req, res) => {
  try {
    const genders = await Gender.find().populate("singers");
    return res.status(200).json(categories);
  } catch (error) {
    return res.status(404).json("Genders not found", error);
  }
};

const getGenderByID = async (req, res) => {
  try {
    const { id } = req.params;
    const gender = await Gender.findById(id).populate("singers");
    return res.status(200).json(gender);
  } catch (error) {
    return res.status(404).json("Gender not found", error);
  }
};

const createGender = async (req, res) => {
  try {
    const newGender = new Gender(req.body);
    await newGender.save();
    return res.status(201).json(newGender);
  } catch (error) {
    return res.status(500).json("Failed creating gender", error);
  }
};

module.exports = { getGenders, getGenderByID, createGender };