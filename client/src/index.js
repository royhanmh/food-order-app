import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/main.css";
import Layout from "./Layout";
import Login from "./Login";
import Home from "./Home";
import Foods from "./Foods";
import FoodData from "./Admin/Food";
import Add from "./Admin/Add";
import Update from "./Admin/Update";
import AdminLayout from "./Admin/LayoutAdmin";
import Dashboard from "./Admin/Dashboard";
import Food from "./Food";
import API from "./API";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="foods" element={<Foods />} />
          <Route path="food/:id" element={<Food />} />
          <Route path="api" element={<API />} />
          <Route path="login" element={<Login />} />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="food" element={<FoodData />} />
          <Route path="add" element={<Add />} />
          <Route path="update" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
