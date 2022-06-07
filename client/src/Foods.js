import { useState, useEffect } from "react";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Axios from "axios";

const Products = () => {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/food").then((response) => {
      setFoods(response.data);
    });
  }, []);

  console.log(foods);

  return (
    <div className="flex flex-col w-[100%]">
      <Jumbotron />
      <div className="container flex justify-around mt-20 flex-wrap">
        {foods.map((val, key) => {
          return (
            <>
              <div class="max-w-[17rem] bg-white">
                <a href={`food/${val._id}`} className="duration-[1000]">
                  <img
                    class="bg-center"
                    src={`http://localhost:3001/images/${val.foodImage}`}
                    alt=""
                  />
                </a>
                <div class="p-5 text-center">
                  <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {val.foodName}
                    </h5>
                  </a>
                  <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {val.foodDescription}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default Products;
