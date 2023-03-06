import React, { useState } from "react"
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa"
import { HiOutlineMail } from "react-icons/hi"
import logo from "../assets/logo_portfolio.png"
import { Link } from "react-scroll"
const Navbar = () => {
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(!open)
  }
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div className="logo">
        <img src={logo} alt="" style={{ width: "60px" }} />
      </div>
      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* hamburger */}
      <div onClick={handleClick} className="flex md:hidden">
        {!open ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      <ul
        className={
          !open
            ? "hidden"
            : "absolute top-[80px] left-0 w-full h-screen bg-[#0a192F] flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">Home</li>
        <li className="py-6 text-4xl">About</li>
        <li className="py-6 text-4xl">Skills</li>
        <li className="py-6 text-4xl">Work</li>
        <li className="py-6 text-4xl">Contacts</li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-green-700 ml-[-100px] hover:ml-0 duration-300">
            <a
              href="https://github.com/muhammedtri"
              className="flex w-full justify-between items-center"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-blue-700 ml-[-100px] hover:ml-0 duration-300">
            <a
              href="https://www.linkedin.com/in/mohammed-mellala-43984452/"
              className="flex w-full justify-between items-center"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-gray-700 ml-[-100px] hover:ml-0 duration-300">
            <a href="/" className="flex w-full justify-between items-center">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
