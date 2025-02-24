import { useContext, useState } from "react";
import { BiHome } from "react-icons/bi";
import { CiGrid31 } from "react-icons/ci";
import { FcGoogle } from "react-icons/fc";
import { GiBrain } from "react-icons/gi";
import { CgLogOut } from "react-icons/cg";
import { Link, NavLink } from "react-router-dom"; // ✅ Correct Import
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut, login } = useContext(AuthContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false); 

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen); 

  return (
    <div className="static   flex flex-col lg:flex-row items-center justify-between px-5 py-3 shadow-md bg-gradient-to-b from-cyan-200 bg-white">
      {/* Logo Section */}
      <div className="flex items-center gap-2 w-full justify-between lg:w-auto">
        <Link to="/" className="flex items-center text-xl font-semibold">
          <span className="bg-gradient-to-r from-stone-800 to-cyan-800 bg-clip-text text-transparent font-bold">
           Task Scheduling 
          </span>
          <img
            src="https://img.icons8.com/?size=96&id=8gR77jBNhfyz&format=png"
            alt="Logo"
            width={22}
          />
          <span className="text-cyan-600 font-bold">APP</span>
        </Link>

        {/* Hamburger Icon for Mobile */}
        <button onClick={toggleMenu} className="lg:hidden p-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Menu Section */}
      <div
        className={`flex flex-col lg:flex-row lg:items-center lg:gap-5 lg:px-5 mt-3 lg:mt-0 space-y-4 lg:space-y-0 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <ul className="menu flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center font-semibold">
          {/* Home */}
          <li>
            <NavLink
              to="/"
              className="border rounded-full border-gray-300 px-4 py-2 bg-base-100 flex items-center gap-1 hover:bg-gray-100"
            >
              <BiHome size={18} /> Home
            </NavLink>
          </li>

          {/* Create */}
          <li>
            <NavLink
              to="/create"
              className="border rounded-full border-gray-300 px-4 py-2 bg-base-100 flex items-center gap-1 hover:bg-gray-100"
            >
              <GiBrain size={18} /> Features
            </NavLink>
          </li>

          {/* Creations */}
          <li>
            <NavLink
              to="/about"
              className="border rounded-full border-gray-300 px-4 py-2 bg-base-100 flex items-center gap-1 hover:bg-gray-100"
            >
              <CiGrid31 size={18} />AboutUs
            </NavLink>
          </li>

          {/* Authentication Buttons */}
          {user && user?.email ? (
            <li>
              <button
                onClick={logOut}
                className="border rounded-full border-gray-300 px-4 py-2 bg-base-100 flex items-center gap-1 hover:bg-gray-100"
              >
                <CgLogOut size={18} /> Logout
              </button>
            </li>
          ) : (
            <li>
              <button
                onClick={login}
                className="border rounded-full border-gray-300 px-4 py-2 bg-base-100 flex items-center gap-1 hover:bg-gray-100"
              >
                <FcGoogle size={18} /> Sign-In
              </button>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
