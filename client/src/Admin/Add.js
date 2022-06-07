import Axios from "axios";
import React, { useState } from "react";

function Add() {
  const [foodName, setFoodName] = useState("");
  const [foodCategory, setFoodCategory] = useState("");
  const [foodDescription, setFoodDescription] = useState("");
  const [foodPrice, setFoodPrice] = useState(0);
  const [foodImage, setFoodImage] = useState("");

  const addToList = () => {
    Axios.post("http://localhost:3001/food/insert", {
      foodName: foodName,
      foodCategory: foodCategory,
      foodDescription: foodDescription,
      foodPrice: foodPrice,
      foodImage: foodImage,
    }).then((response) => {
      alert("Data Added");
      window.open("../admin/food", "_self");
    });
  };

  return (
    <div class="w-full h-full  overflow-y-auto">
      <div class="flex items-center justify-center p-40 border-4 border-dotted">
        <div class="px-20 py-10 text-left bg-white shadow-lg">
          <h3 class="text-2xl font-bold text-center">Add Food Data</h3>

          <div class="mt-4">
            <div>
              <label class="block" for="Name">
                Name
              </label>
              <input
                type="text"
                placeholder="Product Name"
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
                <option value=""></option>
                <option value="Food">Food</option>
                <option value="Beverage">Beverage</option>
                <option value="Snacks">Snacks</option>
              </select>
            </div>
            <div class="mt-4">
              <label class="block">Description</label>
              <input
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
                type="number"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setFoodPrice(event.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Image</label>
              <input
                type="file"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setFoodImage(event.target.value);
                }}
              ></input>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={addToList}
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

export default Add;
