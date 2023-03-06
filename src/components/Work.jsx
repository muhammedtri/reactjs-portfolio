import React from "react"
import work1 from "../assets/projects/work1.png"

const Work = () => {
  return (
    <div
      name="work"
      className="bg-[#0a192f] min-h-screen w-full text-gray-300 py-10"
    >
      {/* container */}
      <div className="max-w-[1000px] w-full min-h-screen mx-auto flex flex-col justify-center items-center">
        <div className="grid sm:grid-cols-2 w-full gap-8 text-left sm:text-right px-4">
          <div className="my-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              Work
            </p>
            <p className="py-4">Check out some of my recent work :</p>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative overflow-hidden group shadow-lg rounded-md">
            <img src={work1} alt="" className="max-w-full" />
            <div className="absolute w-full left-1/2 -translate-x-1/2 -bottom-[100%] group-hover:bottom-2 duration-300 p-2 bg-pink-100">
              <p className="text-center font-bold text-black">
                Crypto Tracker with ReactJS
              </p>
              <div className="flex justify-between">
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>View Code</button>
                </a>
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>Live Preview</button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group shadow-lg rounded-md">
            <img src={work1} alt="" />
            <div className="absolute w-full left-1/2 -translate-x-1/2 -bottom-[100%] group-hover:bottom-2 duration-300 p-2 bg-pink-100">
              <p className="text-center font-bold text-black">
                Crypto Tracker with ReactJS
              </p>
              <div className="flex justify-between">
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>View Code</button>
                </a>
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>Live Preview</button>
                </a>
              </div>
            </div>
          </div>
          <div className="relative overflow-hidden group shadow-lg rounded-md">
            <img src={work1} alt="" />
            <div className="absolute w-full left-1/2 -translate-x-1/2 -bottom-[100%] group-hover:bottom-2 duration-300 p-2 bg-pink-100">
              <p className="text-center font-bold text-black">
                Crypto Tracker with ReactJS
              </p>
              <div className="flex justify-between">
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>View Code</button>
                </a>
                <a
                  href="/"
                  className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
                >
                  <button>Live Preview</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Work
