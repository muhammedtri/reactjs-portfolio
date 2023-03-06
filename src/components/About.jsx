import React from "react"

const About = () => {
  return (
    <div
      name="about"
      className="min-h-screen bg-[#0a192f] text-gray-300 flex justify-center items-center"
    >
      <div className="max-w-[1000px] h-full w-full px-4 mx-auto">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="text-left sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-pink-600">
              About
            </p>
          </div>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8">
          <div className="sm:text-right text-4xl font-bold lg:pl-8">
            <p>
              Hi. I'm MELLALA Mohammed, nice to meet you. Please take a look
              arround.
            </p>
          </div>
          <div>
            <p>
              I'm passionate about buiding excelent and responsive Web Design.
              As an experienced web developer with a strong background in
              designing responsive websites, I am confident in my ability to
              deliver a high-quality project that meets your specific needs and
              requirements.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
