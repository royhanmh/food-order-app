import React, { useState, useEffect } from "react";
import Axios from "axios";

function Update() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const [foodData, setFoodData] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:3001/food/" + id).then((response) => {
      setFoodData(response.data);
    });
  }, [id]);

  const [newFoodName, setFoodName] = useState("");
  const [newFoodCategory, setFoodCategory] = useState("");
  const [newFoodDescription, setFoodDescription] = useState("");
  const [newFoodPrice, setFoodPrice] = useState(0);
  const [newFoodImage, setFoodImage] = useState("");

  const updateToList = (id) => {
    const foodName = newFoodName ? newFoodName : foodData.foodName;
    const foodCategory = newFoodCategory
      ? newFoodCategory
      : foodData.foodCategory;
    const foodDescription = newFoodDescription
      ? newFoodDescription
      : foodData.foodDescription;
    const foodPrice = newFoodPrice ? newFoodPrice : foodData.foodPrice;
    const foodImage = newFoodImage ? newFoodImage : foodData.foodImage;
    Axios.put("http://localhost:3001/food/update", {
      id: id,
      newFoodName: foodName,
      newFoodCategory: foodCategory,
      newFoodDescription: foodDescription,
      newFoodPrice: foodPrice,
      newFoodImage: foodImage,
    }).then((response) => {
      alert("Data Updated");
      window.open("../food", "_self");
    });
  };
  return (
    <div class="w-full h-full p-4 m-8 overflow-y-auto bg-gray-50">
      <div class="flex items-center justify-center p-40 border-4 border-dotted ">
        <div class="px-20 py-10 text-left bg-white shadow-lg">
          <h3 class="text-2xl font-bold text-center">Update Data</h3>

          <div class="mt-4">
            <div>
              <label class="block" for="Name">
                Name
              </label>
              <input
                defaultValue={foodData.foodName}
                type="text"
                placeholder="Update Name"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setFoodName(event.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Category</label>
              <select
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setFoodCategory(event.target.value);
                }}
              >
                <option value={foodData.foodCategory}>
                  {foodData.foodCategory}
                </option>
                <option>===================</option>
                <option value="Food">Food</option>
                <option value="Beverage">Beverage</option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>
            <div class="mt-4">
              <label class="block">Description</label>
              <input
                defaultValue={foodData.foodDescription}
                type="text"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setFoodDescription(event.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Price</label>
              <input
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                defaultValue={foodData.foodPrice}
                type="number"
                onChange={(event) => {
                  setFoodPrice(event.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Image</label>
              <input
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                type="file"
                onChange={(event) => {
                  setFoodImage(event.target.value);
                }}
              ></input>
              <img href={foodData.foodImage}></img>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={() => updateToList(foodData._id)}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Update;
