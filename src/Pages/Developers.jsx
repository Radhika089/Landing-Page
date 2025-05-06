import React from "react";
import { FaGithub, FaCode, FaUsers } from "react-icons/fa";

const Developers = () => {
  return (
    <section className="min-h-screen bg-black text-white px-4 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
          Developers Hub
        </h1>
        <p className="text-lg text-white/70 mb-12">
          Unlock powerful tools and resources designed for developers. Explore
          the following sections to get started.
        </p>

        {/* Resources Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* API Documentation Card */}
          <div className="bg-black/60 p-8 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <FaCode size={40} className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              API Documentation
            </h2>
            <p className="text-white/70 mb-6">
              Dive deep into our API documentation. Whether you're building a
              new app or integrating with our platform, we’ve got you covered.
            </p>
            <a
              href="#"
              className="text-purple-400 font-bold text-lg hover:text-purple-200 transition duration-300"
            >
              Explore API Docs
            </a>
          </div>

          {/* SDK Card */}
          <div className="bg-black/60 p-8 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <FaGithub size={40} className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">SDKs</h2>
            <p className="text-white/70 mb-6">
              Download our SDKs for seamless integration into your preferred
              environment. Start building with us in no time!
            </p>
            <a
              href="#"
              className="text-purple-400 font-bold text-lg hover:text-purple-200 transition duration-300"
            >
              Download SDKs
            </a>
          </div>

          {/* Developer Community Card */}
          <div className="bg-black/60 p-8 rounded-xl shadow-lg backdrop-blur-md transform transition-all hover:scale-105 hover:shadow-2xl">
            <div className="flex items-center justify-center mb-6">
              <FaUsers size={40} className="text-purple-400" />
            </div>
            <h2 className="text-2xl font-semibold mb-4 text-white">
              Developer Community
            </h2>
            <p className="text-white/70 mb-6">
              Connect with developers from around the world. Share ideas,
              discuss issues, and grow your knowledge.
            </p>
            <a
              href="#"
              className="text-purple-400 font-bold text-lg hover:text-purple-200 transition duration-300"
            >
              Join Our Community
            </a>
          </div>
        </div>

        {/* Section to Showcase More Developer Resources */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-indigo-500 mb-8">
            More Developer Resources
          </h3>
          <div className="flex justify-center gap-8">
            <a
              href="#"
              className="bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white p-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              Developer Blog
            </a>
            <a
              href="#"
              className="bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white p-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              Tutorials & Guides
            </a>
            <a
              href="#"
              className="bg-gradient-to-b from-[#190d2e] to-[#4a208a] text-white p-4 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300 transform hover:scale-105"
            >
              API Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Developers;
