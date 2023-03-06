import React from "react"

const Contact = () => {
  return (
    <div
      name="contact"
      className="max-w-[1000px] mx-auto min-h-screen text-gray-300 flex justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/16464ac8-c6c1-4cbd-bc77-5a0b6b3e2780"
        className="flex flex-col max-w-[600px] w-full mx-auto"
      >
        <div className="my-4">
          <p className="text-4xl inline border-b-4 border-pink-600">Contact</p>
          <p className="pt-4">
            Submit the form below or shoot me an email :
            mellala.mohammed@gmail.com
          </p>
        </div>
        <input
          required
          className="bg-[#ccd6f6] p-2 my-2 rounded-sm text-black"
          type="text"
          name="name"
          placeholder="Name..."
        />
        <input
          required
          className="bg-[#ccd6f6] p-2 my-2 rounded-sm text-black"
          type="email"
          name="email"
          placeholder="Email..."
        />
        <textarea
          required
          className="bg-[#ccd6f6] p-2 my-2 rounded-sm text-black"
          name="message"
          rows="10"
          placeholder="Message..."
        ></textarea>
        <button
          type="submit"
          className="my-2 border-2 p-3 font-bold hover:bg-pink-600 hover:border-pink-600"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Contact
