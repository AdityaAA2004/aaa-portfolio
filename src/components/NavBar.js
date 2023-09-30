import React from "react";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import "./navbar-styles.css";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

function NavBar() {
  const [activeMenuItem, setActiveMenuItem] = useState("");
  const [nav,setNav] = useState(false)

  const handleMenuItemHover = (menuItem) => {
    setActiveMenuItem(menuItem);
  };

  const links = [
    {
      id: 1,
      link: "home",
      label: "Home",
    },
    {
      id: 2,
      link: "about",
      label: "About",
    },
    {
      id: 3,
      link: "portfolio",
      label: "Portfolio",
    },
    {
      id: 4,
      link: "skills",
      label: "Skills",
    },
    {
      id: 5,
      link: "experience",
      label: "Experience",
    },
    {
      id: 6,
      link: "contact",
      label: "Contact",
    },
  ];

  return (
    <div className=" fixed flex justify-between items-center w-full h-20 text-white bg-black px-4">
      <div className="flex flex-row">
        <img
          src={require("../assets/my-logo.png")}
          height={50}
          width={50}
          className="rounded-full"
          alt="Icon"
        />
        <h1 className="hidden lg:flex text-4xl ml-6">
          <TypeAnimation
            sequence={[
              "Aditya",
              500,
              "Aditya Archunan",
              500,
              "Aditya Archunan Anand",
              500,
              "Aditya Archunan",
              500,
              "Aditya",
              500,
              "",
              500,
            ]}
            repeat={Infinity}
          />
        </h1>
      </div>
      <ul className="hidden md:flex absolute ml-72 right-2">
        {links.map(({ id, link, label }) => (
          <li key={id}>
            <MenuItem
              label={label}
              link={link}
              isActive={activeMenuItem === label}
              onMouseEnter={() => handleMenuItemHover(label)}
              onMouseLeave={() => handleMenuItemHover("")}
            />
            
          </li>
        ))}
      </ul>
      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10  text-gray-300 md:hidden">
      {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>
      {nav && (
        <ul className=" flex flex-col gap-4 items-center justify-center h-screen w-full absolute top-0 left-0 bg-gradient-to-b from-black to-gray-800">
            {links.map(({ id, link, label }) => (
                <li key={id} className="text-2xl cursor-pointer hover:bg-pink-300 hover:text-black px-4 py-0 my-3">
                  <Link to={link} smooth={true} duration={500} onClick={() => setNav(!nav)}>{label}</Link>
                </li>    
            )
            )
            }
        </ul>
      )}
    </div>
  );
}

function MenuItem({ label, link,isActive, onMouseEnter, onMouseLeave }) {
  return (
    <div
      className={`relative px-4 py-0 cursor-pointer text-center`}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
    
        <Link to={link} smooth={true} duration={500}>
          <span
            className={`text-lg mt-9 ${
              "text-blue-200"
            } z-20 my-2`}
          >
            {label}
        </span>
      </Link>
      
      {isActive && (
        <div
          className="absolute -z-10 inset-x-0 pt-3 top-0 h-full bg-purple-500"
          style={{
            animation: "slide 0.3s linear forwards",
          }}
        />
      )}
    </div>
  );
}

export default NavBar;
