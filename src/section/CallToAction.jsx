import React, { useEffect, useRef } from "react";
import Button from "../component/Button";
import Star from "../assets/stars.png";
import gridLine from "../assets/grid-lines.png";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useTransform,
} from "framer-motion";

const useRelativeMousePosition = (ref) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const updateMousePosition = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);

    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [ref]);
  return { mouseX, mouseY };
};

const CallToAction = () => {
  const sectionRef = useRef(null);
  const borderDivRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const backgroundPositionY = useTransform(
    scrollYProgress,
    [0, 1],
    [-300, 300]
  );
  // const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px , black, transparent)`;

  const { mouseX, mouseY } = useRelativeMousePosition(borderDivRef);

  const maskImage = useMotionTemplate`radial-gradient(50% 50% at ${mouseX}px ${mouseY}px, black, transparent)`;
  return (
    <section className="py-20" ref={sectionRef}>
      <div className="container">
        <motion.div
          ref={borderDivRef}
          className="border border-white/15 py-24 text-center rounded-xl overflow-hidden relative animate-moveBackground group"
          style={{ backgroundPositionY, backgroundImage: `url(${Star})` }}
        >
          <div
            className="absolute inset-0 bg-[rgba(74,32,128)] bg-blend-overlay [mask-image:radial-gradient(50%_50%_at_50%_35%,black,transparent)] group-hover:opacity-0 transition duration-700"
            style={{ backgroundImage: `url(${gridLine})` }}
          ></div>

          <motion.div
            className="absolute inset-0 bg-[rgba(74,32,128)] bg-blend-overlay opacity-0 group-hover:opacity-100 transition duration-700"
            style={{ maskImage, backgroundImage: `url(${gridLine})` }}
          ></motion.div>

          <div className="relative">
            <h2 className="text-5xl md:text-6xl max-w-sm mx-auto font-medium tracking-tighter">
              AI-driven SEO for everyone.
            </h2>
            <p className="text-lg md:text-xl max-w-xs mx-auto tracking-tight mt-6 text-white/70 px-4">
              Achieve clear, impactful results without the complexity.
            </p>
            <div className="mt-8">
              <Button>Join Waitlist</Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
