import React from "react";

const HeroSection = () => {
  return (
    <section className="px-8 py-16 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-gray-600 text-xl mb-4">Hey, I'm Zain 👋</p>

          <h1 className="text-7xl font-bold mb-6 leading-tight">
            <span className="text-purple-600">Frontend</span>
            <br />
            <span className="text-gray-900">Developer</span>
          </h1>

          <p className="text-gray-600 text-lg mb-8 max-w-xl">
             “Turning caffeine into clean code and Figma into
            reality"
          </p>

          <div className="flex items-center gap-4">
            <button className="px-8 py-4 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors">
              Get In Touch
            </button>
            <button className="px-8 py-4 border-2 border-gray-900 text-gray-900 font-medium rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
              Browse Projects
            </button>
          </div>
        </div>

        {/* Right Content - Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="w-96 h-96 rounded-full border-4 border-gray-200 overflow-hidden">
              <img
                src="../images/profilePic.jpeg"
                alt="Profile"
                className="w-full h-full object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
