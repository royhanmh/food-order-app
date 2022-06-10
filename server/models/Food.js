const mongoose = require("mongoose");
const FoodSchema = new mongoose.Schema({
  foodName: { type: String, required: true },
  foodCategory: { type: String },
  foodDescription: { type: String },
  foodPrice: { type: Number, required: true },
  foodImage: { type: String, required: true },
});

const Food = mongoose.model("food", FoodSchema);
module.exports = Food;