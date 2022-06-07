import Axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  const navigateToUpdate = (id) => {
    navigate(`/admin/update/?id=${id}`);
  };

  const [foodList, setfoodList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/food").then((response) => {
      setfoodList(response.data);
    });
  }, []);

  const deleteFood = (id) => {
    Axios.delete(`http://localhost:3001/food/delete/${id}`).then((response) => {
      alert("Data Deleted");
      window.location.reload();
    });
  };

  return (
    <div class="w-full h-full p-4 m-8 overflow-y-auto ">
      <a
        href="../admin/add"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Data
      </a>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <div></div>
          <thead class="text-xs text-center text-gray-700 uppercase bg-blue-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Product name
              </th>
              <th scope="col" class="px-6 py-3">
                Category
              </th>
              <th scope="col" class="px-6 py-3">
                Desription
              </th>
              <th scope="col" class="px-6 py-3">
                Price
              </th>
              <th scope="col" class="px-6 py-3">
                Image
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Edit</span>
              </th>
              <th scope="col" class="px-6 py-3">
                <span class="sr-only">Delete</span>
              </th>
            </tr>
          </thead>
          <tbody class="text-center">
            {foodList.map((val, key) => {
              return (
                <tr
                  key={key}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {val.foodName}
                  </th>
                  <td class="px-6 py-4">{val.foodCategory}</td>
                  <td class="px-6 py-4">{val.foodDescription}</td>
                  <td class="px-6 py-4">{val.foodPrice}</td>
                  <td class="px-6 py-4">
                    <img
                      href={`http://localhost:3001/images/${val.foodImage}`}
                      width="250"
                      height="300"
                    ></img>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => navigateToUpdate(val._id)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </button>
                  </td>
                  <td class="px-6 py-4 text-right">
                    <button
                      onClick={() => deleteFood(val._id)}
                      class="font-medium text-red-600 dark:text-blue-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
