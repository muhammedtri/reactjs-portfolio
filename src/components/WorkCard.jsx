import React from "react"

const WorkCard = ({ work: { name, image, livePreview, liveCode } }) => {
  return (
    <div className="relative overflow-hidden group shadow-sm shadow-white rounded-md">
      <img src={image} alt="" className="max-w-full h-52 object-cover" />
      <div className="absolute w-full left-1/2 -translate-x-1/2 -bottom-[100%] group-hover:bottom-2 duration-300 p-2 bg-pink-100">
        <p className="text-center font-bold text-black">{name}</p>
        <div className="flex justify-between">
          <a
            rel="noreferrer"
            target="_blank"
            href={liveCode}
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
          >
            <button>View Code</button>
          </a>
          <a
            rel="noreferrer"
            target="_blank"
            href={livePreview}
            className="flex-1 bg-pink-600 hover:bg-pink-700 text-gray-200 mx-2 block p-2 rounded-md text-center"
          >
            <button>Live Preview</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard
