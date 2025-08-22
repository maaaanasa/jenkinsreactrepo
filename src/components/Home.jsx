import { Outlet, Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-blue-600 text-white flex flex-col p-6">
        <h1 className="text-2xl font-bold mb-6">E-Commerce 2300030342</h1>
        <nav>
          <ul className="space-y-4 font-semibold">
            <li>
              <Link to="/about-us" className="hover:text-yellow-300">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/computers" className="hover:text-yellow-300">
                Computers
              </Link>
            </li>
            <li>
              <Link to="/mobiles" className="hover:text-yellow-300">
                Mobiles
              </Link>
            </li>
            <li>
              <Link to="/laptops" className="hover:text-yellow-300">
                Laptops
              </Link>
            </li>
            <li>
              <Link to="/accessories" className="hover:text-yellow-300">
                Accessories
              </Link>
            </li>
            <li>
              <Link to="/cart" className="hover:text-yellow-300">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/orders" className="hover:text-yellow-300">
                Orders
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default HomePage;
