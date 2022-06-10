import React, { useState, useEffect } from "react";
import axios, { Axios } from "axios";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  const navigateToUpdate = (id) => {
    navigate(`/admin/update/?id=${id}`);
  };
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3002/order")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  });

  const deleteDataById = (event, id) => {
    event.preventDefault();
    axios
      .delete(`http://localhost:3002/order/delete/${id}`)
      .then((res) => alert(res.data))
      .catch((err) => console.log(err));
  };

  return (
    <div className="flex flex-col justify-evenly w-full p-5">
      <h1 className="font-mono text-[32px] font-bold">Data Order</h1>
      <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" class="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" class="px-6 py-3">
                Food Id
              </th>
              <th scope="col" class="px-6 py-3">
                Food Amount
              </th>
              <th scope="col" class="px-6 py-3">
                Total Cost
              </th>
              <th scope="col" class="px-6 py-3">
                Date Order
              </th>
              <th scope="col" class="px-6 py-3">
                District
              </th>
              <th scope="col" class="px-6 py-3">
                Village
              </th>
              <th scope="col" class="px-6 py-3">
                Address
              </th>
              <th scope="col" class="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((el, ind) => {
              return (
                <tr class="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700">
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                  >
                    {el.custName}
                  </th>
                  <td class="px-6 py-4">{el.foodId}</td>
                  <td class="px-6 py-4">{el.foodAmount}</td>
                  <td class="px-6 py-4">{el.totalCost}</td>
                  <td class="px-6 py-4">{el.orderDate}</td>
                  <td class="px-6 py-4">{el.kecamatan}</td>
                  <td class="px-6 py-4">{el.kelurahan}</td>
                  <td class="px-6 py-4">{el.address}</td>
                  <td class="px-6 py-4 text-center">
                    <a
                      href="#"
                      onClick={() => navigateToUpdate(el._id)}
                      class="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-3"
                    >
                      Edit
                    </a>
                    <a
                      href="#"
                      onClick={(e) => deleteDataById(e, el._id)}
                      class="font-medium text-red-600 dark:text-red-500 hover:underline"
                    >
                      Delete
                    </a>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
