import Axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isFailed, setIsFailed] = useState({state : false, msg: ""});
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();

    Axios.post("http://localhost:3001/login", {username : username}).then(res => {
      if (typeof res.data === "object") {
        if (res.data.password === password) {
          navigate("/admin");
        } else {
          setIsFailed({ state : true, msg: "Wrong Password" })
        }
      } else {
        setIsFailed({state: true, msg: res.data})
      }
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
        <h3 className="text-2xl font-bold text-center">Login to your account</h3>
        {
          (isFailed.state) ? 
          <p className="my-5 text-red-700 text-center">{isFailed.msg}</p> : ""
        }
        <form method="POST">
          <div className="mt-4">
            <div>
              <label className={`block ${(isFailed.state) ? 'text-red-700 dark:text-red-500' : 'text-black dark:text-black' }`} for="username">
                Username
              </label>
              <input
                type="text"
                placeholder="Username"
                className={`w-full px-4 py-2 mt-2 border rounded-md ${(isFailed.state) ? 'bg-red-50 border border-red-500 text-red-900' : 'bg-white border-gray-300 text-gray-900' } focus:outline-none focus:ring-1 focus:ring-blue-600`}
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              ></input>
            </div>
            <div className="mt-4">
              <label className={`block ${(isFailed.state) ? 'text-red-700 dark:text-red-500' : 'text-black dark:text-black' }`}>Password</label>
              <input
                type="password"
                placeholder="Password"
                className={`w-full px-4 py-2 mt-2 border rounded-md ${(isFailed.state) ? 'bg-red-50 border border-red-500 text-red-900' : 'bg-white border-gray-300 text-gray-900' } focus:outline-none focus:ring-1 focus:ring-blue-600`}
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              ></input>
            </div>
            <div className="flex items-baseline justify-between">
              <button
                className="px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900"
                onClick={(e) => login(e)}
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
