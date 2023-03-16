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
          <Link to="home" smooth={true} duration={500} activeClass="active" spy>
            Home
          </Link>
        </li>
        <li>
          <Link
            activeClass="active"
            to="about"
            smooth={true}
            duration={500}
            spy
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            activeClass="active"
            spy
          >
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500} activeClass="active" spy>
            Work
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            activeClass="active"
            spy
          >
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
        <li className="py-6 text-4xl">
          <Link to="home" smooth={true} duration={500} onClick={handleClick}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="about" smooth={true} duration={500} onClick={handleClick}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="work" smooth={true} duration={500} onClick={handleClick}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link to="contact" smooth={true} duration={500} onClick={handleClick}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden lg:flex fixed top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-green-700 ml-[-100px] hover:ml-0 duration-300">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/muhammedtri"
              className="flex w-full justify-between items-center"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-blue-700 ml-[-100px] hover:ml-0 duration-300">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://www.linkedin.com/in/mohammed-mellala-43984452/"
              className="flex w-full justify-between items-center"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-center items-center bg-gray-700 ml-[-100px] hover:ml-0 duration-300">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex w-full justify-between items-center"
            >
              <a href="/" className="w-full flex justify-between items-center">
                Email <HiOutlineMail size={30} />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
