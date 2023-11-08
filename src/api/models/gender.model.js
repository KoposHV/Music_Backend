//PASO 10
const mongoose = require("mongoose");

const GenderSchema = new mongoose.Schema(
  {
    name: { type: String, enum: ["rock", "pop", "reggae, metal"] },
    description: { type: String, require: true },
    singers: [{ type: mongoose.Types.ObjectId, ref: "singer" }],
  },
  {
    timestamps: true,
  }
);

const Gender = mongoose.model("gender", GenderSchema);

module.exports = Gender;