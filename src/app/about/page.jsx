"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/My1.jpg"
              alt=""
              width="112"
              height="112"
              className="w-28 h-28 rounded-full object-cover"
            />
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">BIOGRAPHY</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
            Hi, I’m Pasindu Roshan — a passionate and self-driven learner in the world of technology and digital innovation. I specialize in building intuitive and user-friendly applications using tools like Flutter, React, and WordPress. With a growing portfolio of mobile and web projects, I’m always exploring new ways to combine creativity with functionality.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              Driven by curiosity. Focused on impact.
            </span>
            {/* BIOGRAPHY SIGN SVG*/}
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 370 114"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
    
                <path
                  d="M3.44 16.04L4.92 14.96Q4.80 13.72 4.56 13.36L4.56 13.36Q4.40 13.12 3.44 12.88L3.44 12.88Q2.36 14.72 1.80 17.20L1.80 17.20L3.44 16.04ZM4.96 15.36L4.96 15.36Q4.28 15.76 1.68 17.60L1.68 17.60Q1.52 18.48 1.40 19.44L1.40 19.44Q3.40 18.96 5 19.40L5 19.40Q5.04 16.84 4.96 15.36ZM-1.24 20.36L-1.24 20.36Q-0.40 19.96 0.40 19.72L0.40 19.72Q0.48 19.04 0.64 18.40L0.64 18.40Q-0.84 19.92-1.24 20.36ZM-6.08 33.52L-6.08 33.52Q-6.12 37.60-4.80 41.48L-4.80 41.48Q-4.40 42.64-3.92 43.64Q-3.44 44.64-2.68 45.74Q-1.92 46.84-0.90 47.42Q0.12 48 1.28 47.80L1.28 47.80Q3.80 43.28 4.64 31.80L4.64 31.80Q0.96 32.76-2.40 33.24L-2.40 33.24Q-4.60 33.56-6.08 33.52ZM-6.04 32.32L-6.04 32.32Q-4.20 32.52-1.28 32.12L-1.28 32.12Q1.56 31.72 4.68 30.96L4.68 30.96Q4.96 26.56 4.96 22.24L4.96 22.24Q4.96 22.04 5 20.96L5 20.96L4.68 20.80Q3.20 20.16 1.28 20.40L1.28 20.40Q1.12 22 0.96 26.12L0.96 26.12L-0.16 27.24Q0 22.48 0.24 20.56L0.24 20.56Q-0.88 20.84-2.08 21.36L-2.08 21.36L-2.56 22Q-5.68 26.48-6.04 32.32ZM-8.60 26.16L-7.48 25.04Q-7 24.64-6.16 23.84L-6.16 23.84L-4.56 22.40Q-3.84 21.80-3.12 21.36L-3.12 21.36Q-2.24 20.84-1.36 20.40L-1.36 20.40Q0.28 18.72 0.60 18.36L0.60 18.36L0.68 18.28Q1.44 15 3.12 12.80L3.12 12.80L4.24 11.68Q4.40 11.72 4.74 11.78Q5.08 11.84 5.32 11.94Q5.56 12.04 5.68 12.24L5.68 12.24Q5.96 12.68 6.08 14.24L6.08 14.24Q6.68 13.88 7.24 13.60L7.24 13.60Q8.60 12.96 10.40 12.48Q12.20 12 14.28 11.76Q16.36 11.52 18.34 11.76Q20.32 12 21.94 12.70Q23.56 13.40 24.56 14.92Q25.56 16.44 25.60 18.60L25.60 18.60Q25.60 19.04 25.50 19.50Q25.40 19.96 25.20 20.54Q25 21.12 24.92 21.44L24.92 21.44L23.80 22.56Q23.48 22.84 22.90 23.42Q22.32 24 21.82 24.42Q21.32 24.84 20.84 25.16L20.84 25.16Q16.44 28 9.76 30.28L9.76 30.28Q9.80 30.72 9.86 32.04Q9.92 33.36 9.94 33.92Q9.96 34.48 10.06 35.30Q10.16 36.12 10.28 36.68L10.28 36.68Q11.12 40.20 12.36 42.32L12.36 42.32Q13.08 43.52 13.92 44.56Q14.76 45.60 15.78 46.44Q16.80 47.28 17.70 47.92Q18.60 48.56 19.92 49.12L19.92 49.12L22.16 50.04Q23.04 50.40 24.60 50.80L24.60 50.80L27.04 51.44Q27.92 51.68 29.60 52.04L29.60 52.04Q30.68 52.32 31.24 52.44L31.24 52.44L30.12 53.56L28.48 53.20Q26.76 52.80 25.92 52.56L25.92 52.56L23.48 51.92Q21.92 51.52 21 51.16Q20.08 50.80 18.78 50.24Q17.48 49.68 16.58 49.04Q15.68 48.40 14.64 47.58Q13.60 46.76 12.80 45.72L12.80 45.72Q11.96 44.68 11.24 43.44L11.24 43.44Q10 41.32 9.16 37.80L9.16 37.80Q8.96 37.04 8.88 36.02Q8.80 35 8.72 33.18Q8.64 31.36 8.60 30.68L8.60 30.68L5.72 31.52Q4.72 43.84 1.72 47.72L1.72 47.72L0.60 48.84Q-0.40 49.12-1.34 48.82Q-2.28 48.52-2.96 47.86Q-3.64 47.20-4.26 46.22Q-4.88 45.24-5.24 44.40Q-5.60 43.56-5.92 42.60L-5.92 42.60Q-7.48 38.12-7.16 33.48L-7.16 33.48Q-11.16 33.04-10.52 29.92L-10.52 29.92Q-10.40 29.32-10.08 28.70Q-9.76 28.08-9.28 27.34Q-8.80 26.60-8.60 26.16L-8.60 26.16ZM-7.60 25.28L-7.60 25.28Q-7.76 25.60-8.24 26.34Q-8.72 27.08-9 27.64Q-9.28 28.20-9.40 28.80L-9.40 28.80Q-9.96 31.48-7.04 32.16L-7.04 32.16Q-6.44 27.12-3.68 23.12L-3.68 23.12Q-3.12 22.32-2.36 21.48L-2.36 21.48Q-3.32 21.92-4.24 22.48L-4.24 22.48Q-5.28 23.12-7.60 25.28ZM9.72 29.52L9.72 29.52Q17.16 27.16 21.96 24.04L21.96 24.04Q22.68 23.56 23.80 22.48L23.80 22.48Q23.88 22.20 24.08 21.62Q24.28 21.04 24.38 20.60Q24.48 20.16 24.48 19.72L24.48 19.72Q24.44 17.56 23.44 16.04Q22.44 14.52 20.82 13.84Q19.20 13.16 17.20 12.90Q15.20 12.64 13.14 12.90Q11.08 13.16 9.26 13.62Q7.44 14.08 6.12 14.72L6.12 14.72Q6.20 16.44 6.12 19.84L6.12 19.84Q7.08 20.36 7.78 21.36Q8.48 22.36 8.86 23.76Q9.24 25.16 9.42 26.48Q9.60 27.80 9.72 29.52ZM8.52 29.88L8.52 29.88Q8.08 23.88 6.08 21.80L6.08 21.80Q6.08 26.32 5.76 30.68L5.76 30.68Q7.16 30.32 8.52 29.88ZM35.88 36.64L34.76 37.76Q32.84 39.52 30.84 40.36L30.84 40.36Q29 41.16 29.16 39.92L29.16 39.92Q29.24 39 30.44 37.08L30.44 37.08L31.56 35.96Q29.24 39.72 31 39.52L31 39.52Q32.36 39.36 35 37.40L35 37.40Q35.60 36.16 34.16 36.20L34.16 36.20Q33.80 36.20 32.92 36.32L32.92 36.32Q32.32 36.40 32.08 36.40L32.08 36.40L33.20 35.28Q33.32 35.28 34.44 35.12L34.44 35.12Q33.64 33.92 31.56 35.96L31.56 35.96L32.08 35.44L32.76 34.76Q33.04 34.48 33.42 34.14Q33.80 33.80 34.12 33.68Q34.44 33.56 34.76 33.52Q35.08 33.48 35.36 33.74Q35.64 34 35.80 34.52L35.80 34.52L35.28 35.04Q36.04 35.04 36.24 35.34Q36.44 35.64 35.88 36.64L35.88 36.64ZM35.80 39.92L35.80 39.92Q35.76 40.08 35.54 40.46Q35.32 40.84 35.28 41Q35.24 41.16 35.28 41.52L35.28 41.52Q35.36 41.68 35.98 41.40Q36.60 41.12 37.66 40.44Q38.72 39.76 39.76 38.88L39.76 38.88Q39.76 37.92 39.52 37.04L39.52 37.04Q37.72 38.16 35.80 39.92ZM41.64 32.04L40.52 33.16Q40.60 32.84 41 32.12L41 32.12Q41.40 31.32 41.20 31.32L41.20 31.32Q41.12 31.32 40.92 31.44L40.92 31.44Q40.48 32.08 40.28 32.58Q40.08 33.08 40.08 33.54Q40.08 34 40.12 34.26Q40.16 34.52 40.36 35.06Q40.56 35.60 40.64 35.88L40.64 35.88Q42.40 34.80 44.32 34.08L44.32 34.08L43.20 35.20Q41.92 35.68 40.72 36.32L40.72 36.32Q40.88 37.04 40.88 37.84L40.88 37.84L39.76 38.96Q38.60 40.12 37.26 41.08Q35.92 42.04 35.08 42.44Q34.24 42.84 34.16 42.64L34.16 42.64Q34.04 42.40 34.14 42.12Q34.24 41.84 34.44 41.50Q34.64 41.16 34.72 40.96L34.72 40.96L35.84 39.84Q37.76 37.96 39.40 36.72L39.40 36.72Q39.36 36.56 39.20 36.12Q39.04 35.68 39.02 35.52Q39 35.36 38.94 35Q38.88 34.64 38.96 34.38Q39.04 34.12 39.18 33.72Q39.32 33.32 39.60 32.86Q39.88 32.40 40.32 31.80L40.32 31.80L41.44 30.68Q42.40 30.04 42.44 30.28L42.44 30.28Q42.44 30.32 41.84 31.52L41.84 31.52Q41.72 31.80 41.64 32.04L41.64 32.04ZM50 18.12L50.96 13.72L52.08 12.60L51.16 16.88L50.16 21.44Q49.84 22.88 49.18 25.62Q48.52 28.36 48 30.14Q47.48 31.92 46.74 34.22Q46 36.52 45.20 38.52L45.20 38.52L48.08 34.88L49.20 33.76Q48.88 34.56 48.68 35.16Q48.48 35.76 48.50 36.26Q48.52 36.76 48.56 37.10Q48.60 37.44 48.94 37.74Q49.28 38.04 49.52 38.22Q49.76 38.40 50.40 38.60Q51.04 38.80 51.44 38.90Q51.84 39 52.72 39.20L52.72 39.20Q53.20 39.32 53.44 39.40L53.44 39.40L52.32 40.52Q52.08 40.48 51.56 40.36L51.56 40.36L50.36 40.08Q50 39.96 49.38 39.76Q48.76 39.56 48.52 39.40L48.52 39.40L47.92 38.96Q47.56 38.72 47.50 38.42Q47.44 38.12 47.38 37.68Q47.32 37.24 47.44 36.72Q47.56 36.20 47.84 35.52L47.84 35.52L44.96 39.16L43.84 40.28Q44.68 38.24 45.46 35.88Q46.24 33.52 46.76 31.70Q47.28 29.88 47.96 27.04L47.96 27.04L48.96 22.80L50 18.12ZM53.52 38.68L53.52 38.68Q55.96 38.24 60.36 37.12L60.36 37.12Q60.44 37.08 60.54 36.96Q60.64 36.84 60.72 36.76Q60.80 36.68 60.86 36.60Q60.92 36.52 60.92 36.48Q60.92 36.44 60.84 36.40L60.84 36.40Q57.96 35.76 53.52 38.68ZM62.32 37.48L60.20 38.04Q59.72 38.88 59.40 39.72L59.40 39.72L58.28 40.84Q58.72 39.64 59.68 38.16L59.68 38.16Q54.48 39.48 51.80 39.92L51.80 39.92L52.92 38.80Q58.56 34.52 61.96 35.28L61.96 35.28Q62.08 35.36 62.02 35.46Q61.96 35.56 61.72 35.80L61.72 35.80L61.40 36.12L60.80 37.04L63.44 36.36L62.32 37.48ZM68.36 37.40L68.36 37.40Q70.16 35.60 70.32 35.72L70.32 35.72Q70.40 35.92 70.36 36.46Q70.32 37 70.24 37.68L70.24 37.68L70.16 38.36Q70.20 38.92 70.30 39.20Q70.40 39.48 70.62 39.60Q70.84 39.72 71.06 39.74Q71.28 39.76 71.80 39.76Q72.32 39.76 72.76 39.84L72.76 39.84L71.64 40.96Q71.20 40.92 70.68 40.90Q70.16 40.88 69.94 40.88Q69.72 40.88 69.48 40.76Q69.24 40.64 69.16 40.34Q69.08 40.04 69.04 39.48L69.04 39.48L69.12 38.80Q69.20 38.12 69.24 37.58Q69.28 37.04 69.20 36.84L69.20 36.84Q69.08 36.76 68.36 37.40ZM63.72 35.92L64.52 34.04L65.64 32.92Q65.56 33.12 65.38 33.50Q65.20 33.88 65.08 34.20Q64.96 34.52 64.84 34.80L64.84 34.80Q64.68 35.28 64.28 36.68L64.28 36.68Q63.64 38.96 63.72 39.56L63.72 39.56Q64 41.68 67.36 38.40L67.36 38.40Q64.32 41.52 63.32 41.56L63.32 41.56Q62.72 41.60 62.60 40.68L62.60 40.68Q62.52 40.08 63.16 37.80L63.16 37.80Q63.52 36.40 63.72 35.92L63.72 35.92Z"
                  stroke="black"
                  strokeWidth="2"
                />
              </svg>
            </div>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                MongoDB
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                AWS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Firebase
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Figma
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              EXPERIENCE
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: "0" } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Freelancer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I provided web solutions, applying a range of technologies
                    to address client requirements.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2024 - Present
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Project Associate
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    I managed a backend of a system that uses to share the royalty fee of songs in BMI society in US.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 Dec - 2024 Nov{" "}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Orfium Sri Lanka
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/* LEFT */}
                <div className="w-1/3 ">
                  {/* JOB TITLE */}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Associate Production{" "}
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    Trained an AI model to identify items in a image using given data.{" "}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2023 Jan - 2023 May{" "}
                  </div>
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Innodata Lanka
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
