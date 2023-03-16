import React from "react"
import { dataWorks } from "../DataWorks"
import WorkCard from "./WorkCard"
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
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dataWorks.map((work) => (
            <WorkCard key={work.id} work={work} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Work
