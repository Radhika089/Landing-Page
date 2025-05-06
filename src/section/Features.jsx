import React, { useEffect, useRef, useState } from "react";
import "@dotlottie/player-component";
import productImage from "../assets/product-image.png";
import {
  animate,
  motion,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

const tabs = [
  {
    icon: "/assets/lottie/vroom.lottie",
    title: "User-friendly dashboard",
    isNew: false,
    backgroundPositionX: 0,
    backgroundPositionY: 0,
    backgroundSizeX: 150,
  },
  {
    icon: "/assets/lottie/click.lottie",
    title: "One-click optimization",
    isNew: false,
    backgroundPositionX: 98,
    backgroundPositionY: 100,
    backgroundSizeX: 135,
  },
  {
    icon: "/assets/lottie/stars.lottie",
    title: "Smart keyword generator",
    isNew: true,
    backgroundPositionX: 100,
    backgroundPositionY: 27,
    backgroundSizeX: 177,
  },
];

const FeatureTab = ({ icon, title, isNew, onClick }) => {
  const ref = useRef(null);
  const xPercentage = useMotionValue(0);
  const yPercentage = useMotionValue(0);

  useEffect(() => {
    if (!ref.current) return;

    const { height, width } = ref.current.getBoundingClientRect();
    const circumference = height * 2 + width * 2;

    const times = [
      0,
      width / circumference,
      (width + height) / circumference,
      (width * 2 + height) / circumference,
      1,
    ];

    const options = {
      times,
      duration: 4,
      repeat: Infinity,
      ease: "linear",
      repeatType: "loop",
    };

    animate(xPercentage, [0, 100, 100, 0, 0], { ...options, times });
    animate(yPercentage, [0, 0, 100, 100, 0], { ...options, times });
  }, []);

  const maskImage = useMotionTemplate`radial-gradient(80px 80px at ${xPercentage}% ${yPercentage}%,black,transparent)`;
  return (
    <div
      onClick={onClick}
      ref={ref}
      className="flex border border-white/15 p-2.5 gap-2.5 rounded-xl items-center lg:flex-1 relative"
    >
      <motion.div
        style={{ maskImage }}
        className="absolute inset-0 border border-[#A369ff] -m-px rounded-xl"
      ></motion.div>
      <div className="h-12 w-12 border border-white/15 rounded-lg items-center justify-center inline-flex">
        <dotlottie-player
          src={icon}
          autoplay
          className="h-5 w-5"
        ></dotlottie-player>
      </div>
      <div className="font-medium">{title}</div>
      {isNew && (
        <div className="rounded-full text-xs text-black bg-[#8c44ff] px-2 py-0.5">
          new
        </div>
      )}
    </div>
  );
};

const Features = () => {
  const [selectiveTab, setSelectiveTab] = useState(0);

  const backgroundPositionX = useMotionValue(tabs[0].backgroundPositionX);
  const backgroundPositionY = useMotionValue(tabs[0].backgroundPositionY);
  const backgroundSizeX = useMotionValue(tabs[0].backgroundSizeX);

  const backgroundPosition = useMotionTemplate`${backgroundPositionX}% ${backgroundPositionY}%`;
  const backgroundSize = useMotionTemplate`${backgroundSizeX}% auto`;

  const handleSelectiveTab = (index) => {
    setSelectiveTab(index);

    const animateOptions = {
      duration: 2,
      ease: "easeInOut",
    };

    animate(
      backgroundSizeX,
      [backgroundSizeX.get(), 100, tabs[index].backgroundSizeX],
      animateOptions
    );

    animate(
      backgroundPositionX,
      [backgroundPositionX.get(), tabs[index].backgroundPositionX],
      animateOptions
    );

    animate(
      backgroundPositionY,
      [backgroundPositionY.get(), tabs[index].backgroundPositionY],
      animateOptions
    );
  };
  return (
    <section className="py-20 md:py-24" id="features">
      <div className="container">
        <h1 className="text-5xl md:text-6xl text-center font-medium tracking-tighter">
          Elevate your SEO efforts.
        </h1>
        <p className="text-white/70 tracking-tight text-center mt-5 text-lg md:text-xl max-w-2xl mx-auto">
          From small startups to large enterprises, our AI-driven tool has
          revolutionized the way businesses approach SEO.
        </p>
        <div className="mt-10 flex flex-col lg:flex-row gap-3">
          {tabs.map((tab, tabIndex) => (
            <FeatureTab
              {...tab}
              key={tab.title}
              selected={selectiveTab === tabIndex}
              onClick={() => handleSelectiveTab(tabIndex)}
            />
          ))}
        </div>
        <div className="border border-white/20 p-2.5 rounded-xl mt-3">
          <motion.div
            style={{
              backgroundPosition,
              backgroundSize,
              backgroundImage: `url(${productImage})`,
            }}
            className="border border-white/30 rounded-lg aspect-video bg-cover"
          ></motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
