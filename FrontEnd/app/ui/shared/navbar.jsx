"use client"
import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative flex items-center justify-between bg-[#024873] w-screen h-24">
      

      {/* Hamburger Menu */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white">
          {/* Hamburger Icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`absolute top-24 right-0 bg-[#024873] w-48 rounded-md shadow-md ${
            isOpen ? 'block' : 'hidden'
          }`}
        >
          <ul className="p-4">
            <li>
              <Link href="/adoption">
                <p className="font-semibold text-gray-50">Adopción</p>
              </Link>
            </li>
            {/* ... (rest of the menu items) ... */}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
