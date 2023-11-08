//PASO 9
const mongoose = require("mongoose");

const SingerSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: true },
    photo: {type: String, required: true, default:
        "https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg",
    },
    age: { type: Number, required: true },
    quality: { type: Number, enum: [1, 2, 3, 4, 5] },
    discography: { type: Number, required: true },
  },
  {
    timestamps: true,
  }
);

const Singer = mongoose.model("singer", SingerSchema);

module.exports = Singer;