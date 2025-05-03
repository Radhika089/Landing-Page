import React from "react";
import Button from "../component/Button";
import Star from "../assets/stars.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.section
      className="h-[429px] md:h-[800px] flex items-center bg-no-repeat bg-cover bg-center overflow-hidden relative animate-moveBackground"
      style={{
        backgroundImage: `url(${Star})`,
        maskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(75%_75%_at_center_center,_rgba(140,69,255,0.5)_15%,_rgba(14,0,36,0.5)_78%,_transparent)]"></div>

      {/* Start Planet */}
      <div className=" absolute h-64 w-64 md:h-96 md:w-96 bg-purple-600 rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgb(184,148,255)_37%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,.5),-20px_-20px_80px_rgb(255,255,255,.1),0_0_50px_rgb(140,69,255)]"></div>
      {/* End Planet */}

      {/* Start Ring 1 */}
      <motion.div
        style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "1turn" }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute h-[344px] w-[344px]  md:h-[580px] md:w-[580px] border rounded-full left-1/2 top-1/2  border-white opacity-20"
      >
        <div className="absolute h-2 w-2 bg-white top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white top-0 left-1/2 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-5 w-5 border border-white top-1/2 left-full rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex justify-center items-center">
          <div className="bg-white h-2 w-2 rounded-full"></div>
        </div>
      </motion.div>
      {/* End Ring 1 */}

      {/* Start Ring 2 */}
      <motion.div
        // style={{ translateX: "-50%", translateY: "-50%" }}
        animate={{ rotate: "-1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[444px] w-[444px]  md:h-[780px] md:w-[780px] rounded-full border border-white/20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-dashed "
      ></motion.div>
      {/* End Ring 2*/}

      {/* Start Ring 3 */}
      <motion.div
        animate={{ rotate: "1turn" }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[544px] w-[544px]  md:h-[980px] md:w-[980px] rounded-full border border-white opacity-20 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 "
      >
        <div className="absolute h-2 w-2 bg-white top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute h-2 w-2 bg-white top-1/2 left-0 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      </motion.div>
      {/* End Ring 3 */}

      <div className="container relative mt-16">
        <h1
          className="text-8xl  md:text-[168px] md:leading-none font-bold tracking-tighter text-transparent text-center"
          style={{
            backgroundImage:
              "radial-gradient(circle at top left, white 40%, rgba(74, 32, 138, 0.8) 80%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          AI SEO
        </h1>
        <p className="text-lg text-center text-white/70 mt-5 md:text-xl max-w-xl mx-auto">
          Elevate your site's visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Button>Join Waitlist</Button>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;
