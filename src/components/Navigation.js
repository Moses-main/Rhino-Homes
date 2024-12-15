"use client";

import dynamic from "next/dynamic"; // Import dynamic from Next.js
import { useState, useEffect, useRef } from "react";
import Link from "next/link"; // Import Link from Next.js
import Image from "next/image";

// Lazy load the icons (optional to enhance performance)
const FaChevronDownLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaChevronDown),
  { ssr: false }
);
const FaTimesLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaTimes),
  { ssr: false }
);
const FaBarsLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaBars),
  { ssr: false }
);
const FaUserCircleLazy = dynamic(
  () => import("react-icons/fa").then((mod) => mod.FaUserCircle),
  { ssr: false }
);
const MdPhoneLazy = dynamic(
  () => import("react-icons/md").then((mod) => mod.MdPhone),
  { ssr: false }
);

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const modalRef = useRef();

  const links = [
    { name: "Home", href: "/" },
    {
      name: "About Us",
      href: "/about",
    },
    {
      name: "Projects",
      href: "#projects",
      subLinks: [
        { name: "Residential", href: "#residential" },
        { name: "Commercial", href: "#commercial" },
      ],
    },
    { name: "Agent", href: "/agent" },
    { name: "Blog", href: "#blog" },
    { name: "FAQ", href: "/faq" },
    { name: "Contact", href: "/contact" },
  ];

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
    <nav className="bg-white max-w-[90%] w-[90%] items-center m-auto text-black sticky top-0 z-50 border-b shadow-lg border border-red-800 rounded-full">
      <div className="flex justify-between items-center px-6 py-2 max-w-screen-xl mx-auto">
        <div>
          {/* <img
            src="/images/rhp_logo.png"
            alt="Real Estate Logo"
            className="h-10 object-contain"
          /> */}

          <Image
            src="/images/rhp_logo.png"
            alt="Real Estate Logo"
            width={60}
            height={60}
            layout="responsive"
            className="h-10 object-contain"
          />
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center space-x-6 font-medium">
          {links.map((link) => (
            <li key={link.name} className="relative group">
              <Link href={link.href} className="hover:text-gray-700 transition">
                {link.name}
              </Link>
              {link.subLinks && (
                <>
                  <FaChevronDownLazy className="ml-2 inline-block text-sm text-gray-500 group-hover:text-gray-700 transition" />
                  <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md border w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition duration-300">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name} className="hover:bg-gray-100">
                        <Link
                          href={subLink.href}
                          className="block px-4 py-2 text-sm text-gray-700"
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
          <li className="flex space-flex-2 text-center">
            <MdPhoneLazy /> + 3490-2734
          </li>
          <li>
            <Link
              href="/investment"
              className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition"
            >
              Invest
            </Link>
          </li>
          <li>
            <Link href="#profile" className="text-2xl">
              <FaUserCircleLazy />
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <Link
            href="#invest"
            className="bg-red-500 text-white text-sm py-2 px-2 rounded-md hover:bg-green-600 transition"
          >
            Invest
          </Link>
          <Link href="#profile" className="text-2xl">
            <FaUserCircleLazy />
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-black"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FaTimesLazy /> : <FaBarsLazy />}
          </button>
        </div>
      </div>

      {/* Mobile Modal */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-40 flex flex-col items-center w-full justify-center">
          <ul
            ref={modalRef}
            className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 space-y-4"
          >
            {links.map((link) => (
              <li
                key={link.name}
                className="border-b-2 ml-7 border-gray-300 last:border-b-0 py-2"
              >
                <button
                  onClick={() => toggleDropdown(link.name)}
                  className="flex items-center justify-between w-full text-left text-black font-semibold"
                >
                  <Link
                    href={link.href}
                    className="hover:text-gray-700 transition"
                  >
                    {link.name}
                  </Link>
                  {link.subLinks && (
                    <FaChevronDownLazy
                      className={`ml-2 transition-transform ${
                        activeDropdown === link.name ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>
                {activeDropdown === link.name && link.subLinks && (
                  <ul className="mt-2 bg-gray-100 rounded-md">
                    {link.subLinks.map((subLink) => (
                      <li key={subLink.name}>
                        <Link
                          href={subLink.href}
                          className="block px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md"
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
      )}
    </nav>
  );
}
