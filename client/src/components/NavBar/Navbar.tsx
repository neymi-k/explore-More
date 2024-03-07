import React, { useState } from 'react';
import logo from '../../assets/logo_explore_more.png';

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between p-5 bg-amber-500">
      <div className="lg:hidden flex justify-between w-full">
        <button
          className="flex items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white mr-4"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
          </svg>
        </button>
      </div>
      <div className="lg:flex lg:items-center lg:justify-between w-full">
        <div className="hidden lg:flex lg:items-center w-full justify-between">
          <a href="#Home" className="text-orange px-2 flex-grow hover:text-white">Home</a>
          <a href="#Form" className="text-orange px-2 flex-grow hover:text-white">Contac</a>
          <a href="/login" className="text-orange px-2 flex-grow hover:text-white">Sing Out</a>
        </div>
        <img src={logo} alt="Logo" className="w-24 h-auto lg:w-auto lg:h-11" />
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} lg:hidden`}>
        <a href="#Home" className="block text-orange px-2 hover:text-white">Home</a>
        <a href="#Form" className="block text-orange px-2 hover:text-white">Contac</a>
        <a href="/login" className="block text-orange px-2 hover:text-white">Sing Out</a>
      </div>
    </nav>
  );
}

export default NavBar;
