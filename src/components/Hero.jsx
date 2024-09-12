import { useEffect, useState } from "react";
import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/shafinprofile.png";
import { motion } from "framer-motion";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
      staggerChildren: 0.08, // Adds stagger effect between children
    },
  },
});

const letter = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const titles = [
    "Front-End Developer",
    "Developer",
    "Fast Learner",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % titles.length);
    }, 1500); // Change text every 1.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="pl-10 pr-10 w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl flex flex-wrap"
            >
              {"Shafin Hossain".split("").map((char, index) => (
                <motion.span key={index} variants={letter}>
                  {char}
                </motion.span>
              ))}
            </motion.h1>

            <motion.div
              key={currentIndex} // This key triggers re-render on text change
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.75 }}
              className="flex"
            >
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className={`bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 
                bg-clip-text text-4xl tracking-tight text-transparent ${
                  index === currentIndex ? "block" : "hidden"
                }`}
                >
                  {title}
                </motion.span>
              ))}
            </motion.div>

            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        <div className="w-full lg:w-1/2 lg:p-10 flex justify-center">
          <div className="w-3/4 flex justify-center items-center rounded-3xl bg-transparent">
            <motion.img
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              src={profilePic}
              alt="Shafin Hossain"
              className="rounded-3xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
