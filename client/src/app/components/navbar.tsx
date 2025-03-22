import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <Image
                src="/logo.png" // Replace with your logo path
                alt="Logo"
                width={40}
                height={40}
              />
            </Link>
          </div>

          {/* Navigation Items */}
          <div className="flex items-center">
            {/* Dropdown 1 */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsOpen1(!isOpen1)}
                className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                Dropdown 1
                <span className="ml-1">▼</span>
              </button>
              {isOpen1 && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/option1" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 1
                  </Link>
                  <Link href="/option2" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 2
                  </Link>
                </div>
              )}
            </div>

            {/* Dropdown 2 */}
            <div className="relative ml-4">
              <button
                onClick={() => setIsOpen2(!isOpen2)}
                className="px-3 py-2 rounded-md text-gray-700 hover:text-gray-900"
              >
                Dropdown 2
                <span className="ml-1">▼</span>
              </button>
              {isOpen2 && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                  <Link href="/option3" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 3
                  </Link>
                  <Link href="/option4" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                    Option 4
                  </Link>
                </div>
              )}
            </div>

            {/* Login Button */}
            <div className="ml-4">
              <Link
                href="/login"
                className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
