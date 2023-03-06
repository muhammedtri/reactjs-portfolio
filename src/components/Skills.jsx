import React from "react"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import tailwind from "../assets/tailwind.png"
import bootstrap from "../assets/bootstrap.png"
import reactjs from "../assets/react.png"
import github from "../assets/github.png"
const Skills = () => {
  return (
    <div
      name="skills"
      className="bg-[#0a192f] text-gray-300 min-h-screen flex justify-center items-start"
    >
      <div className="max-w-[1000px] w-full min-h-screen bg-[#0a192f] text-gray-300 px-4 mx-auto flex justify-center items-center flex-col">
        <div className="w-full grid sm:grid-cols-2 gap-8 text-left sm:text-right">
          <div>
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Experience
            </p>
            <p className="py-4">
              These are the technologies I've worked with :
            </p>
          </div>
        </div>
        <div className="w-full grid gap-8 grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={html}
              alt="html logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">HTML</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={css}
              alt="css logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">CSS</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={javascript}
              alt="javascript logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">JAVASCRIPT</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={bootstrap}
              alt="bootstrap logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">BOOTSTRAP</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={tailwind}
              alt="tailwind logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">TAILWIND</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={reactjs}
              alt="reactjs logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">REACT</p>
          </div>
          <div className="flex flex-col justify-center items-center p-4">
            <img
              src={github}
              alt="github logo"
              className="w-20 block hover:scale-125 duration-300"
            />
            <p className="pt-4 font-bold">GITHUB</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills
