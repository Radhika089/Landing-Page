import React from "react";
import avatar1 from "../assets/avatar-1.png";
import avatar2 from "../assets/avatar-2.png";
import avatar3 from "../assets/avatar-3.png";
import avatar4 from "../assets/avatar-4.png";
import { motion } from "framer-motion";

const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const Testimonial = () => {
  return (
    <section className="py-20 md:py-24">
      <div className="container">
        <h1 className="text-5xl md:text-6xl text-center font-medium tracking-tighter">
          Beyond Expectations.
        </h1>
        <p className="text-lg md:text-xl text-center text-white/70 mt-5 tracking-tight max-w-sm mx-auto">
          Our revolutionary AI SEO tools have transformed our clients'
          strategies.
        </p>
        <div className="overflow-hidden mt-10 [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="flex gap-5 flex-none pr-5"
          >
            {[...testimonials, ...testimonials].map((testimonials, index) => (
              <div
                key={index}
                className="border border-white/15 rounded-xl p-6 md:p-10 bg-[linear-gradient(to_bottom_left,rgba(140,69,255,.3),black)] max-w-sm md:max-w-md flex-none"
              >
                <div className="text-lg tracking-tight md:text-2xl">
                  {testimonials.text}
                </div>
                <div className="flex items-center gap-3 mt-5">
                  <img
                    src={testimonials.avatarImg}
                    alt={`Avatar Name ${testimonials.name}`}
                    className="h-11 w-11 grayscale rounded-lg border border-white/30"
                  />
                  <div>
                    <div>{testimonials.name}</div>
                    <div className="text-white/50 text-sm">
                      {testimonials.title}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
