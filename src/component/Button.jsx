import React, { useState } from "react";

const WaitlistModal = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
      onClose(); // close modal after 2 seconds
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-[#111] text-white rounded-xl shadow-2xl p-8 w-full max-w-md relative">
        <button
          className="absolute top-4 right-4 text-white/60 hover:text-white text-xl"
          onClick={onClose}
        >
          &times;
        </button>

        {!submitted ? (
          <>
            <h2 className="text-3xl font-bold mb-4">Join the Waitlist</h2>
            <p className="mb-6 text-white/70">
              Be among the first to experience the future of AI.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 rounded-md bg-black/40 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full p-3 rounded-md bg-black/40 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
                required
              />
              <button
                type="submit"
                className="w-full py-3 rounded-md bg-[#8c44ff] hover:bg-[#a369ff] transition duration-300 font-medium text-black"
              >
                Join Now
              </button>
            </form>
          </>
        ) : (
          <div className="text-center">
            <h3 className="text-2xl font-semibold mb-2">You're in!</h3>
            <p className="text-white/70">Thanks for joining the waitlist.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WaitlistModal;
