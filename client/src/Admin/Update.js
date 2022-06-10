import React, { useState, useEffect } from "react";
import Axios from "axios";

function Update() {
  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get("id");

  const [orderData, setOrderData] = useState([]);
  const [foodData, setFoodData] = useState([]);
  const [food, setFood] = useState([]);
  const [idKec, setIdKec] = useState(0);
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/food/").then((response) => {
      setFoodData(response.data);
    });
  });

  useEffect(() => {
    Axios.get("http://localhost:3002/order/" + id).then((response) => {
      setOrderData(response.data);
    });
  }, [id]);

  const getKecamatan = () => {
    fetch(
      "https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=3202"
    )
      .then((res) => {
        res.json().then((result) => {
          setKecamatan(result.kecamatan);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getDesa = () => {
    fetch(
      `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${idKec}`
    )
      .then((res) => {
        console.log(idKec);
        res.json().then((result) => {
          setDesa(result.kelurahan);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const [newCustName, setCustName] = useState("");
  const [newFoodId, setFoodId] = useState("");
  const [newDesa, setNewDesa] = useState("");
  const [newKecamatan, setNameKec] = useState("");
  const [newAddress, setAddress] = useState("");
  const [newAmount, setAmount] = useState(0);
  const [newTotalCost, setTotalCost] = useState(0);
  const oldFoodId = orderData.foodId;
  useEffect(() => {
    let id = newFoodId ? newFoodId : oldFoodId;
    Axios.get("http://localhost:3001/food/" + id).then((response) => {
      setFood(response.data);
    });
  }, [newFoodId, oldFoodId]);

  const updateToList = (id) => {
    const custName = newCustName ? newCustName : orderData.custName;
    const foodId = newFoodId ? newFoodId : orderData.foodId;
    const amount = newAmount ? newAmount : orderData.foodAmount;
    const desa = newDesa ? newDesa : orderData.kelurahan;
    const kecamatan = newKecamatan ? newKecamatan : orderData.kecamatan;
    const address = newAddress ? newAddress : orderData.address;
    const cost = newTotalCost ? newTotalCost : orderData.totalCost;

    Axios.put(`http://localhost:3002/order/update/${id}`, {
      newFoodId: foodId,
      newAmount: amount,
      newCustName: custName,
      newKecamatan: kecamatan,
      newKelurahan: desa,
      newAddress: address,
      newTotalCost: cost,
    }).then((response) => {
      alert("Data Updated");
      window.open("../order", "_self");
    });
  };
  return (
    <div class="w-full h-full p-4  overflow-y-auto bg-gray-50">
      <div class="flex justify-center p-30 border-4 border-dotted ">
        <div class="px-20 py-10 text-left bg-white shadow-lg">
          <h3 class="text-2xl font-bold text-center">Update Data</h3>

          <div class="mt-4">
            <div>
              <label class="block" for="Name">
                Customer Name
              </label>
              <input
                defaultValue={orderData.custName}
                type="text"
                placeholder="Update Name"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setCustName(e.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Food Choice</label>
              <select
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(e) => {
                  setFoodId(e.target.value);
                }}
              >
                <option value={orderData.foodId}>{food.foodName}</option>
                <option>===================</option>
                {foodData.map((val, key) => {
                  return (
                    <option key={key} value={val._id}>
                      {val.foodName}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="mt-4">
              <label class="block">District</label>
              <select
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onClick={() => getKecamatan()}
                onChange={(e) => {
                  setIdKec(e.target.value);
                  setNameKec(e.target.options[e.target.selectedIndex].text);
                }}
              >
                <option value={orderData.kecamatan}>
                  {orderData.kecamatan}
                </option>
                <option>===================</option>
                {kecamatan.map((val, key) => {
                  return (
                    <option key={key} value={val.id}>
                      {val.nama}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="mt-4">
              <label class="block">Village</label>
              <select
                onChange={(e) => {
                  setNewDesa(e.target.value);
                }}
                onClick={() => getDesa()}
                name="desa"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
              >
                <option value={orderData.kelurahan}>
                  {orderData.kelurahan}
                </option>
                <option>===================</option>
                {desa.map((val, key) => {
                  return (
                    <option key={key} value={val.nama}>
                      {val.nama}
                    </option>
                  );
                })}
              </select>
            </div>
            <div class="mt-4">
              <label class="block">Address</label>
              <input
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                defaultValue={orderData.address}
                type="text"
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Food Amount</label>
              <input
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                defaultValue={orderData.foodAmount}
                type="number"
                onChange={(e) => {
                  setAmount(e.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Total Cost</label>
              <input
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                defaultValue={orderData.totalCost}
                type="text"
                value={food.foodPrice * newAmount}
                onClick={(e) => {
                  setTotalCost(e.target.value);
                }}
              ></input>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={() => updateToList(orderData._id)}
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
