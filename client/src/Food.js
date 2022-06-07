import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import { useState, useEffect } from "react";
import Axios from "axios";
import { useParams } from "react-router-dom";

const Product = () => {
  const id = useParams().id;
  const [food, setFood] = useState({});

  useEffect(() => {
    Axios.get(`http://localhost:3001/food/${id}`).then((res) =>
      setFood(res.data)
    );
  }, id);

  return (
    <div>
      <Jumbotron />
      <div className="px-10 flex lg:flex-row flex-col lg:justify-around justify-center my-4">
        <div className="basis-1/2">
          <img
            src={`http://localhost:3001/images//${food.foodImage}`}
            className="bg-cover h-[350px] w-full"
          />
        </div>
        <div className="basis-1/3">
          <h1 className="text-bold text-[35px]">{food.foodName}</h1>
          <a
            href="products"
            className="text-gray-600 hover:text-blue-500 text-left"
          >
            Back to catalog
          </a>
          <h2 className="text-bold text-[25px] mt-5 ">${food.foodPrice}</h2>
          <h3 className="text-bold font-mono mt-2 ">Product Details</h3>
          <p>{food.foodDescription}</p>
          <button className="text-center rounded-md p-2 w-[70%] bg-gray-900 hover:bg-gray-400 mt-4 text-white hover:text-gray-900">
            Add to Bag
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Product;
