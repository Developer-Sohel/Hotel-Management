import { useState } from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='container mx-auto lg:px-24 px-2'>
      <div className="flex justify-between items-center py-4">
        <div>
          <a href="/" className="text-xl font-bold">YOUR <span className="text-blue-500">DOCKTOR</span></a>
        </div>

        {/* Mobile Menu Button and Create Account Button (Mobile) */}
        <div className="flex items-center space-x-4 lg:hidden">
          <NavLink to='/register' className="block">
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Create account
            </button>
          </NavLink>
          <button onClick={toggleMenu}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-6 items-center">
          <li>
            <NavLink to='/' className="hover:text-blue-500">Home</NavLink>
          </li>
          <li>
            <NavLink to='/alldocktor' className="hover:text-blue-500">All Docktor</NavLink>
          </li>
          <li>
            <NavLink to='/Contact' className="hover:text-blue-500">About</NavLink>
          </li>
          <li>
                <NavLink to='/blog' className="block hover:text-blue-500">Blog</NavLink>
              </li>

              <li>
                <NavLink to='/Contact' className="block hover:text-blue-500">Contact</NavLink>
              </li>
        </ul>

        {/* Create Account Button (Desktop) */}
        <NavLink to='/register' className="hidden lg:block">
          <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            Create account
          </button>
        </NavLink>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0  z-50" onClick={toggleMenu}>
          <div className="fixed inset-y-0 left-0 w-64 bg-blue-100  p-4">
          <div className="mb-12">
          <a href="/" className="text-xl font-bold">YOUR <span className="text-blue-500">DOCKTOR</span></a>
        </div>
            <ul className="space-y-5">
              <li>
                <NavLink to='/' className="block hover:text-blue-500">Home</NavLink>
              </li>
              <li>
                <NavLink to='/alldocktor' className="block hover:text-blue-500">All Docktor</NavLink>
              </li>
              <li>
                <NavLink to='/about' className="block hover:text-blue-500">About</NavLink>
              </li>
              <li>
                <NavLink to='/blog' className="block hover:text-blue-500">Blog</NavLink>
              </li>

              <li>
                <NavLink to='/Contact' className="block hover:text-blue-500">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;