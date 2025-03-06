import { useState } from "react";

const Banner = () => {
  const [position, setPosition] = useState({ x: 100, y: 100 });

  const handleDrag = (e) => {
    setPosition({
      x: e.clientX - 25, // Centering
      y: e.clientY - 25,
    });
  };
  return (
    <section className="bg-gradient-to-br from-cyan-200 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-6 md:px-12">
        {/* Left Side - Text */}
        <div className="md:w-1/2 text-center md:text-left mb-6 md:mb-0">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">
            Manage Your Tasks Efficiently
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Stay organized, track progress, and boost productivity with our
            easy-to-use Task Management App.
          </p>
          <button
            className="bg-cyan-300 text-black font-bold
             px-6 py-3 rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Get Started
          </button>

          {/* Moving Circle */}
         
        </div>

        <div className="md:w-1/2 relative flex justify-center">
          <img
            src="https://i.ibb.co/zhYJwVzc/banner-main-object.png"
            alt="Task Management"
            className="rounded-lg shadow-lg max-w-[20rem] md:max-w-md lg:max-w-lg   "
          />

          {/* Moving Circle */}
          <div
            className="hidden md:block absolute w-40 h-40 bg-cyan-300 rounded-full cursor-grab active:cursor-grabbing transition-transform duration-200"
            style={{ top: "-4%", left: "10%" }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
