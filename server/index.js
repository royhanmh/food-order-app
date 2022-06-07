const express = require("express");
const cors = require("cors");

const app = express();

const connectDB = require("./database/connection");
const orderModel = require("./models/Order");
const userModel = require("./models/User");
const foodModel = require("./models/Food");

const multer = require("multer");

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

// Food
const fileStorageEngine = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./images");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: fileStorageEngine });
app.post("/food/insert", upload.single("foodImage"), async (req, res) => {
  name = req.body.foodName;
  category = req.body.foodCategory;
  description = req.body.foodDescription;
  price = req.body.foodPrice;
  image = req.file.originalname;

  const food = new foodModel({
    foodName: name,
    foodCategory: category,
    foodDescription: description,
    foodPrice: price,
    foodImage: image,
  });

  try {
    await food.save();
    res.send("inserted data");
  } catch (err) {
    console.log(err);
  }
});

app.get("/food", async (req, res) => {
  foodModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }

    res.send(result);
  });
});

app.use("/images", express.static("images"));

app.get("/food/:id", async (req, res) => {
  foodModel.findById(req.params.id, (err, result) => {
    if (err) {
      return res.send(err);
    }
    return res.send(result);
  });
});

app.put("/food/update", async (req, res) => {
  newFoodName = req.body.newFoodName;
  newFoodCategory = req.body.newFoodCategory;
  newFoodDescription = req.body.newFoodDescription;
  newFoodPrice = req.body.newFoodPrice;
  newFoodImage = req.body.newFoodImage;
  id = req.body.id;

  var imageName = newFoodImage.replace(/^.*[\\\/]/, "");

  try {
    await foodModel.findById(id, (err, updatedFood) => {
      updatedFood.foodName = newFoodName;
      updatedFood.foodCategory = newFoodCategory;
      updatedFood.foodDescription = newFoodDescription;
      updatedFood.foodPrice = newFoodPrice;
      updatedFood.foodImage = imageName;
      updatedFood.save();
      res.send("update");
    });
  } catch (err) {
    console.log(err);
  }
});

app.delete("/food/delete/:id", async (req, res) => {
  const id = req.params.id;
  await foodModel.findByIdAndRemove(id).exec();
  res.send("deleted");
});

// Login
app.post("/login", async (req, res) => {
  await userModel.findOne({username: req.body.name}).then( (err, result) => {
    if (result) {
      if (req.body.password === result.password) {
        res.send(result);
      } else {
        res.send("Wrong Password!")
      }
    } else {
      res.send(req.body)
    }
  })
})


app.listen(3001, () => {
  console.log("Server is running on http://localhost:3001");
});
