import { Outlet, Link } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <div class="flex">
      <div class="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto border-r">
        <a href="../admin">
          <h2 class="text-3xl font-semibold text-center text-blue-800">Logo</h2>
        </a>
        <div class="flex flex-col justify-between mt-6">
          <aside>
            <ul>
              <li>
                <a
                  class="flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-md "
                  href="../admin/food"
                >
                  <span class="mx-4 font-medium">Food List</span>
                </a>
              </li>

              <li>
                <a
                  class="flex items-center px-4 py-2 mt-5 text-gray-600 rounded-md hover:bg-gray-200"
                  href="#"
                >
                  <span class="mx-4 font-medium">Settings</span>
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
