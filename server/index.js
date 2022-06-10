const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./database/connection");
const orderModel = require("./models/Order");

app.use(express.json());
app.use(cors());

connectDB();

app.post("/order/insert", async (req, res) => {
  foodId = req.body.foodId;
  foodAmount = req.body.foodAmount;
  name = req.body.custName;
  orderDate = new Date();
  kecamatan = req.body.kecamatan;
  kelurahan = req.body.kelurahan;
  address = req.body.address;
  totalCost = req.body.totalCost;

  const order = new orderModel({
    foodId: foodId,
    foodAmount: foodAmount,
    custName: name,
    orderDate: orderDate,
    kecamatan: kecamatan,
    kelurahan: kelurahan,
    address: address,
    totalCost: totalCost,
  });

  try {
    await order.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/order", async (req, res) => {
  orderModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.get("/order/:id", async (req, res) => {
  orderModel.findById(req.params.id, (err, result) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

app.put("/order/update/:id", async (req, res) => {
  id = req.params.id;
  newFoodId = req.body.newFoodId;
  newAmount = req.body.newAmount;
  newName = req.body.newCustName;
  newOrderDate = new Date();
  newKecamatan = req.body.newKecamatan;
  newKelurahan = req.body.newKelurahan;
  newAddress = req.body.newAddress;
  newTotalCost = req.body.newTotalCost;

  try {
    await orderModel.findById(id, (err, updatedOrder) => {
      updatedOrder.foodAmount = newAmount;
      updatedOrder.custName = newName;
      updatedOrder.orderDate = newOrderDate;
      updatedOrder.kecamatan = newKecamatan;
      updatedOrder.kelurahan = newKelurahan;
      updatedOrder.address = newAddress;
      updatedOrder.totalCost = newTotalCost;

      updatedOrder.save();
      res.send("updated");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/order/delete/:id", async (req, res) => {
  const id = req.params.id;
  await orderModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

app.listen(3002, () => {
  console.log("Server is running on http://localhost:3002");
});
