import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("formSubmitted", "true");
    navigate("/");
  };
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4 py-16">
      <div className="max-w-2xl w-full border border-white/20 rounded-xl p-8 bg-white/5 backdrop-blur-md shadow-lg">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 tracking-tight">
          Get in Touch
        </h1>
        <p className="text-center text-white/70 mb-10">
          We'd love to hear from you! Fill out the form below and we’ll respond
          as soon as possible.
        </p>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/80">
              Your Name
            </label>
            <input
              type="text"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/80">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-white/80">
              Message
            </label>
            <textarea
              rows="5"
              className="w-full p-3 rounded-lg bg-black/40 border border-white/20 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#8c44ff] hover:bg-[#a369ff] transition duration-300 font-medium text-black"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
