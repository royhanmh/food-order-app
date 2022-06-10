import { Outlet, Link } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div class="flex">
      <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <a href="../admin">
          <h2 class="text-3xl font-semibold text-center text-blue-800">
            Foods
          </h2>
        </a>
        <div class="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a
                  class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="../"
                >
                  <span class="mx-4 font-medium">Home</span>
                </a>
              </li>
              <li>
                <a
                  class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="../admin/order"
                >
                  <span class="mx-4 font-medium">Order List</span>
                </a>
              </li>
            </ul>
          </aside>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default LayoutAdmin;
