import React from "react";
import acmeLogo from "../assets/logo-acme.png";
import apexLogo from "../assets/logo-apex.png";
import celestialLogo from "../assets/logo-celestial.png";
import echoLogo from "../assets/logo-echo.png";
import pulseLogo from "../assets/logo-pulse.png";
import quantumLogo from "../assets/logo-quantum.png";
import { motion } from "framer-motion";

const logos = [
  acmeLogo,
  apexLogo,
  celestialLogo,
  echoLogo,
  pulseLogo,
  quantumLogo,
];

const BrandLogos = () => {
  return (
    <section className="py-20 md:py-22">
      <div className="container">
        <div className="flex items-center gap-5">
          <div className="flex-1 md:flex-none">
            <h2 className="text-xl md:text-2xl font-semibold">
              Trusted By Top Innovative Teams
            </h2>
          </div>

          <div className="flex flex-1 overflow-hidden relative">
            <motion.div
              className="flex gap-14 min-w-max"
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
              }}
              animate={{ x: ["-50%", "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }}
            >
              {[...logos, ...logos].map((logo, index) => (
                <img key={index} src={logo} className="h-6 w-auto" />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
