const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema({
  foodId: { type: String, required: true },
  foodAmount: { type: Number, required: true },
  custName: { type: String, required: true },
  orderDate: { type: Date, required: true },
  kecamatan: { type: String, required: true },
  kelurahan: { type: String, required: true },
  address: { type: String, required: true },
  totalCost: { type: Number, required: true },
});

const Order = mongoose.model("order", OrderSchema);
module.exports = Order;
