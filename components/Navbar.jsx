import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const navLinks = [
    { name: "Home" },
    { name: "Gallery" },
    { name: "Work" },
    { name: "Contact" },
  ];

  const [nav, setNav] = useState(false);
  const [color, setColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor("#ffffff");
        setTextColor("#000000");
      } else {
        setColor("transparent");
        setTextColor("#ffffff");
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="fixed left-0 top-0 w-full z-10 ease-in duration-300"
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white">
        <Link href="/">
          <h1 style={{ color: `${textColor}` }} className="font-bold text-4xl">
            Captur
          </h1>
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          {navLinks.map((navLink, i) => (
            <li className="p-4" key={i}>
              <Link
                href={
                  navLink.name === "Home"
                    ? `/`
                    : navLink.name === "Gallery"
                    ? `/#${
                        navLink.name.charAt(0).toLocaleLowerCase() +
                        navLink.name.slice(1)
                      }`
                    : `/${
                        navLink.name.charAt(0).toLocaleLowerCase() +
                        navLink.name.slice(1)
                      }`
                }
              >
                {navLink.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300"
          }
        >
          <ul>
            {navLinks.map((navLink, i) => (
              <li
                key={i}
                onClick={handleNav}
                className="p-4 text-4xl hover:text-gray-500"
              >
                <Link
                  href={
                    navLink.name === "Home"
                      ? `/`
                      : navLink.name === "Gallery"
                      ? `/#${
                          navLink.name.charAt(0).toLocaleLowerCase() +
                          navLink.name.slice(1)
                        }`
                      : `/${
                          navLink.name.charAt(0).toLocaleLowerCase() +
                          navLink.name.slice(1)
                        }`
                  }
                >
                  {navLink.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
