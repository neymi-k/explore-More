import React, { useState, useEffect } from "react";
import logo from "../../assets/logo_explore_more.png";
import { BsBackpackFill } from "react-icons/bs";
import { FaCircleUser } from "react-icons/fa6";
import { Link } from "react-router-dom";
import * as AuthService from "../../services/auth.service";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const [currentUser, setCurrentUser] = useState(undefined);
  const [showAdminBoard, setShowAdminDashboard] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      const user = await AuthService.getCurrentUser();
      if (user) {
        setCurrentUser(user);
        setShowAdminDashboard(user.roles.includes("ROLE_ADMIN"));
      }
    };

    fetchUser();
  }, []);

  const logOut = () => {
    AuthService.logout();
    setShowAdminDashboard(false);
    setCurrentUser(undefined);
  };

  return (
    <nav className="relative flex items-center justify-between p-5 bg-amber-500 gap-20">
      <div className="lg:hidden flex justify-between gap-10 w-full">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 hover:text-black"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="lg:flex lg:items-center  w-full">
        <div className="hidden lg:flex gap-10 p-5 mr-20">
          <Link
            to="/home"
            className="text-orange px-2 flex-grow hover:text-white transform hover:scale-110 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            to="#contact"
            className="text-orange px-2 flex-grow hover:text-white transform hover:scale-110 transition-transform duration-200"
          >
            Contact
          </Link>
          <Link
            to="/newproduct"
            className="text-orange px-2 flex-grow hover:text-white transform hover:scale-110 transition-transform duration-200"
          >
            Add Product
          </Link>
        </div>
        <img src={logo} alt="Logo" className="w-24 h-50" />
      </div>
      {showAdminBoard && (
        <Link
          to="/admin"
          className="text-orange px-2 flex-grow hover:text-white transform hover:scale-110 transition-transform duration-200"
        >
          Admin Dashboard
        </Link>
      )}

      <Link to="/shoppingcart">
        <BsBackpackFill className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl text-white hover:text-black" />
      </Link>
      <FaCircleUser
        className="text-9xl sm:text-8xl md:text-7xl lg:text-5xl xl:text-5xl text-white hover:text-black"
        onClick={() => setIsProfileModalOpen(true)}
      />

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          isProfileModalOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsProfileModalOpen(false)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber p-4 rounded text-center">
          {/* <Link
            to="/"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
          >
            Your reservations
          </Link> */}
          <Link
            to="/yourproducts"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
          >
            Your products
          </Link>
          <a
            href="/login"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
            onClick={logOut}
          >
            Sign out
          </a>
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
        onClick={() => setIsOpen(false)}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-amber p-4 rounded text-center">
          <Link
            to="/home"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
          >
            Home
          </Link>
          <Link
            to="#contact"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
          >
            Contact
          </Link>
          <Link
            to="/newproduct"
            className="block text-white px-2 hover:text-amber-500 transform hover:scale-110 transition-transform duration-200"
          >
            Add Product
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
