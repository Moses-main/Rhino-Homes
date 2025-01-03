"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { IoChevronDownSharp } from "react-icons/io5";
import { FaTimes, FaBars, FaUserCircle } from "react-icons/fa";
import { MdPhone } from "react-icons/md";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isLoading, setIsLoading] = useState(false); // Spinner state
  const modalRef = useRef();

  const links = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    // {
    //   name: "Projects",
    //   href: "#projects",
    //   subLinks: [
    //     { name: "Residential", href: "#residential" },
    //     { name: "Commercial", href: "#commercial" },
    //   ],
    // },
    { name: "Agent", href: "/agent" },
    { name: "Blog", href: "/blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

  const handleLinkClick = () => {
    setIsLoading(true); // Show spinner
  };

  const toggleDropdown = (name) => {
    setActiveDropdown((prev) => (prev === name ? null : name));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMenuOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target)
      ) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 z-50 flex justify-center items-center">
          <div className="spinner border-t-4 border-b-4 border-gray-700 w-16 h-16 border-solid rounded-full animate-spin"></div>
        </div>
      )}

      <nav className="bg-white max-w-[90%] md:py-[1rem] w-[90%] m-auto text-black sticky top-0 z-50 border-b shadow-lg border border-red-800 rounded-full landscape-nav ">
        <div className="flex justify-between items-center px-6 py-2 max-w-screen-xl mx-auto">
          {/* Left Section - Logo */}
          <div>
            <Image
              src="/images/mainLogo.png"
              alt="Real Estate Logo"
              width={60}
              height={60}
              className="h-10 object-contain nav-img"
            />
          </div>

          {/* Center Section - Desktop Links */}
          <ul className="hidden lg:flex items-center justify-center space-x-4 font-medium">
            {links.map((link) => (
              <li key={link.name} className="relative group">
                <Link
                  href={link.href}
                  onClick={handleLinkClick} // Trigger spinner on link click
                  className="hover:text-gray-700 text-xl hover:border-b-2 pb-1 hover:border-b-red-800 transition cursor-pointer"
                >
                  {link.name}
                </Link>
                {link.subLinks && (
                  <>
                    <IoChevronDownSharp className="ml-2 inline-block text-sm text-gray-500 group-hover:text-gray-700 transition" />
                    <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                      {link.subLinks.map((subLink) => (
                        <li key={subLink.name} className="hover:bg-gray-100">
                          <Link
                            href={subLink.href}
                            onClick={handleLinkClick} // Trigger spinner on sub-link click
                            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer"
                          >
                            {subLink.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </>
                )}
              </li>
            ))}
          </ul>

          {/* Right Section - Phone Number, Invest Button, and User Icon */}
          <div className="hidden lg:flex items-center space-x-4 ">
            <ul className="flex items-center space-x-4 font-medium cursor-pointer">
              <li className="flex items-center space-x-2 cursor-pointer">
                <MdPhone />
                <span>+ 3490-2734</span>
              </li>
              <li>
                <Link
                  href="/investment"
                  onClick={handleLinkClick}
                  className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition cursor-pointer"
                >
                  Invest
                </Link>
              </li>
              <li>
                <Link
                  href="#profile"
                  onClick={handleLinkClick}
                  className="text-2xl cursor-pointer"
                >
                  <FaUserCircle />
                </Link>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center space-x-2 landscape-mobile-nav-right">
            <Link
              href="/investment"
              onClick={handleLinkClick}
              className="bg-red-500 text-white text-sm py-2 px-2 rounded-md hover:bg-green-600 transition cursor-pointer"
            >
              Invest
            </Link>
            <Link
              href="#profile"
              onClick={handleLinkClick}
              className="text-2xl cursor-pointer"
            >
              <FaUserCircle />
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-2xl text-black cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* Mobile Modal */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex items-center justify-center overflow-hidden">
            <div
              ref={modalRef}
              className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-2 relative flex flex-col justify-center"
            >
              <button
                onClick={() => setIsMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl text-black cursor-pointer"
                aria-label="Close menu"
              >
                <FaTimes />
              </button>
              <ul className="flex flex-col items-center justify-center space-y-2">
                {links.map((link, index) => (
                  <li
                    key={link.name}
                    className="border-b-2 border-gray-300 last:border-b-0 py-2 w-full text-center"
                    style={{
                      animation: `slideInDown 0.5s ease-out ${
                        index * 0.1
                      }s both`, // Slide in with staggered delay
                    }}
                  >
                    <button
                      onClick={() => setIsMenuOpen(false)}
                      className="flex items-center justify-between w-full text-left text-black font-semibold transition-all duration-300 hover:bg-gray-200 hover:rounded-md px-2 py-1 cursor-pointer"
                    >
                      <Link
                        href={link.href}
                        onClick={handleLinkClick} // Trigger spinner on link click
                        className="hover:text-gray-700 transition cursor-pointer"
                      >
                        {link.name}
                      </Link>
                      {link.subLinks && (
                        <IoChevronDownSharp
                          className={`ml-2 transition-transform ${
                            activeDropdown === link.name ? "rotate-180" : ""
                          }`}
                        />
                      )}
                    </button>
                    {activeDropdown === link.name && link.subLinks && (
                      <ul className="mt-2 bg-gray-100 rounded-md">
                        {link.subLinks.map((subLink, subIndex) => (
                          <li
                            key={subLink.name}
                            style={{
                              animation: `slideInDown 0.5s ease-out ${
                                index * 0.1 + 0.2 + subIndex * 0.1
                              }s both`, // Add delay for sub-links
                            }}
                          >
                            <Link
                              href={subLink.href}
                              onClick={handleLinkClick}
                              className="block px-4 py-2 text-gray-700 transition-all duration-300 hover:bg-gray-300 hover:rounded-md cursor-pointer"
                            >
                              {subLink.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>

      <style jsx>{`
        @media (max-width: 1024px), (orientation: landscape) {
          .lg\\:hidden {
            display: flex !important;
          }
          .lg\\:flex {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
}
