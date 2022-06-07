import Axios from "axios";
import React, { useState } from "react";

function Login() {
  /* const state = {
    data: {
      username: "",
      password: "",
    },
  };

  const handleChange = ({ currentTarget: input }) => {
    const data = { ...state.data };
    data[input.name] = input.value;
    this.setState({ data });
  };

  const handleSubmit = async (e) => {
    e.preventDefaullt();
    const headers = {
      "Access Control-Allow-Origin": "*",
    };
    const formData = {
      username: state.data["username"],
      password: state.data["password"],
    };
    await axios
      .post("http://locahost/login/login-process.php", formData, { headers })
      .then((res) => console.log(res))
      .catch(function (error) {
        console.log(error);
      });
  };*/

  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const login = () => {
    Axios.post("http://localhost/login/login-process.php", {
      userName: userName,
      userPass: userPass,
    }).then(console.log("hahah"));
  };

  return (
    <div class="flex items-center justify-center min-h-screen bg-gray-100">
      <div class="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 class="text-2xl font-bold text-center">Login to your account</h3>
        <form>
          <div class="mt-4">
            <div>
              <label class="block" for="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setUserName(event.target.value);
                }}
              ></input>
            </div>
            <div class="mt-4">
              <label class="block">Password</label>
              <input
                type="password"
                placeholder="Password"
                class="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                onChange={(event) => {
                  setUserPass(event.target.value);
                }}
              ></input>
            </div>
            <div class="flex items-baseline justify-between">
              <button
                class="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={login}
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
