"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-300 to-blue-300",
    title: "Essence fits",
    desc: "EssenceFits is a stylish and functional e-commerce website tailored for a modern lifestyle and wellness brand. Built with WordPress and WooCommerce, the site features a clean and responsive layout, smooth navigation, and a fully integrated online store. I customized the design using Elementor to ensure brand consistency, user-friendly experience, and mobile optimization. Key components include a homepage slider, product filters, a secure checkout process, and SEO-ready structure for better visibility.",
    img: "/EssenceFits.png",
    link: "https://essencefits.com/",
  },
  {
    id: 2,
    color: "from-blue-300 to-violet-300",
    title: "Dhanaramarine",
    desc: "Dhanara Marine is a professional website built for a company specializing in marine engineering and industrial solutions. The site highlights the company's services, projects, and contact details with a clean, corporate design. Using WordPress and Elementor, I crafted a responsive, SEO-friendly website with easy navigation and clear content structure. The layout emphasizes trust and industry expertise, with a focus on performance and accessibility across all devices.",
    img: "/Dhanaramarine.png",
    link: "https://dhanaramarine.com/",
  },
  {
    id: 3,
    color: "from-violet-300 to-purple-300",
    title: "Villa Arora",
    desc: "Villa Arora is a sleek and elegant website designed for a luxury villa rental property. The site showcases high-resolution imagery, booking details, and amenities in a visually appealing and user-friendly format. Built using WordPress and Elementor, it features smooth scrolling, responsive layouts, and an integrated booking inquiry system. The design captures the premium experience of the villa while ensuring performance and accessibility across devices.",
    img: "/VillaArora.png",
    link: "https://villaarora.com/",
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center">
          My Works
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300" />
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex-col items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="flex flex-col items-center text-center gap-8 px-4 text-white max-w-[800px]">
                  <h1 className="text-xl font-bold md:text-4xl lg:text-5xl xl:text-6xl">
                    {item.title}
                  </h1>
                  <div className="relative w-full max-w-[600px] h-auto aspect-[1.90]">
                    <Image src={item.img} alt="" fill className="object-cover rounded-lg" />
                  </div>
                  <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                    {item.desc}
                  </p>
                  <Link href={item.link} >
                    <button className="p-4 text-md bg-white text-gray-800 font-semibold rounded shadow-md hover:scale-105 transition">See More</button>
                  </Link>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Do you have a project?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px] "
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <text fill="#000">
              <textPath xlinkHref="#circlePath" className="text-xl">
                Web Developer and Mobile Developer
              </textPath>
            </text>
          </motion.svg>
          <Link
            href="/contact"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Hire Me
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
