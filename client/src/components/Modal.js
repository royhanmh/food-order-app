import axios, { Axios } from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal = (props) => {
  const [kecamatan, setKecamatan] = useState([]);
  const [desa, setDesa] = useState([]);
  const [idKec, setIdKec] = useState(0);
  const [nameKec, setNameKec] = useState("");
  const [amount, setAmount] = useState(0);

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
        res.json().then((result) => {
          setDesa(result.kelurahan);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const nav = useNavigate();

  const order = (ev) => {
    ev.preventDefault();
    const formData = new FormData(document.getElementById("form-order"));
    const data = {
      foodId: props.food._id,
      foodAmount: formData.get("jumlah"),
      custName: formData.get("nama"),
      kecamatan: nameKec,
      kelurahan: formData.get("desa"),
      address: formData.get("alamat"),
      totalCost: formData.get("total"),
    };

    axios
      .post("http://localhost:3002/order/insert", data)
      .then((res) => {
        document.querySelector(".modal").classList.add("hidden");
        alert("Order Succesfull");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div
      className={`modal ${
        !props.state ? "hidden" : "flex justify-center items-center"
      }`}
    >
      <div className="modal-content">
        <div className="modal-header">
          <h1 className="text-[25px] mb-3">Pesan Makanan</h1>
          <button
            type="button"
            onClick={() =>
              document.querySelector(".modal").classList.add("hidden")
            }
            className="mb-3 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg dark:hover:bg-gray-800 dark:hover:text-white"
          >
            <svg
              class="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <form method="post" onSubmit={(e) => order(e)} id="form-order">
          <div className="modal-body">
            <h3 className="font-mono mb-2 text-[20px] text-bold">
              Nama Makanan : {props.food.foodName}
            </h3>
            <div className="grid grid-cols-4 gap-2 my-3">
              <div className="place-self-center">
                <label
                  for="nama"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Nama
                </label>
              </div>
              <div className="col-span-3">
                <input
                  type="text"
                  id="nama"
                  name="nama"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nama..."
                />
              </div>
            </div>
            <select
              name="kecamatan"
              onClick={() => getKecamatan()}
              onChange={(e) => {
                setIdKec(e.target.value);
                setNameKec(e.target.options[e.target.selectedIndex].text);
              }}
              class="mb-7 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Pilih Kecamatan</option>
              {kecamatan.map((el, ind) => {
                return <option value={el.id}>{el.nama}</option>;
              })}
            </select>
            <select
              name="desa"
              onClick={() => getDesa()}
              class="mb-5 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option selected>Pilih Desa</option>
              {desa.map((el, ind) => {
                return <option value={el.nama}>{el.nama}</option>;
              })}
            </select>
            <div className="grid grid-cols-2 gap-2 mb-4">
              <div>
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Alamat
                </label>
                <input
                  type="text"
                  id="address"
                  name="alamat"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Alamat..."
                />
              </div>
              <div>
                <label
                  for="amount"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Jumlah makanan
                </label>
                <input
                  onChange={(e) => setAmount(e.target.value)}
                  type="number"
                  name="jumlah"
                  id="amount"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                />
              </div>
            </div>
            <label
              for="total"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Total harga
            </label>
            <input
              type="text"
              id="total"
              name="total"
              class="mb-6 bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 cursor-not-allowed dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-600 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={`Rp. ${props.food.foodPrice * amount}`}
              value={props.food.foodPrice * amount}
            />
          </div>
          <div>
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
              Order
            </button>
            <button
              type="button"
              class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={() =>
                document.querySelector(".modal").classList.add("hidden")
              }
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
