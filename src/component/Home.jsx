import React from "react";
import { FaLinkedin, FaInstagramSquare, FaTelegramPlane } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaNode } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { FaReact } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import pic from "../../public/pic.png";

function Home({
  text = "Welcome to my Feed!",
  developerStrings = ["Developer", "Programmer", "Coder"],
  description = "A passionate React developer with a knack for creating dynamic and responsive web applications. With a strong foundation in React, MUI, and Bootstrap, I excel at building intuitive user interfaces and seamless user experiences. My expertise extends to state management, API integration, and form validation. I thrive on solving complex problems and continuously learning new technologies. Let’s collaborate to bring your ideas to life with clean, efficient, and scalable code!"
}) {
  return (
    <div name="Home">
      <div className="max-w-screen-2xl dark:bg-black container mx-auto px-4 md:px-20 my-16">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">{text}</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped className="text-red-700 font-bold"
                strings={developerStrings}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              {description}
            </p>
            <br />
            <div className="flex flex-col item-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="font-bold text-xl">Available on:</h1>
                <ul className="flex space-x-4">
                  <li>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                      <FaLinkedin className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                      <FaInstagramSquare className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://telegram.org/" target="_blank" rel="noopener noreferrer">
                      <FaTelegramPlane className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                      <RiTwitterXLine className="text-3xl cursor-pointer" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-2">
                <h1 className="font-bold text-xl">Currently working on:</h1>
                <div className="flex space-x-4">
                  <FaReact className="text-2xl md:text-3xl hover:scale-1120 duration-200 rounded-full border-[2px]" />
                  <SiMongodb className="text-2xl md:text-3xl hover:scale-1120 duration-200 rounded-full border-[2px]" />
                  <FaNode className="text-2xl md:text-3xl hover:scale-1120 duration-200 rounded-full border-[2px]" />
                  <SiTailwindcss className="text-2xl md:text-3xl hover:scale-1120 duration-200 rounded-full border-[2px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 md:ml-40 md:mt-16 order-1">
            <img src={pic} className="rounded-full md:w-[400px] md:h-[400px] md:mt-25px" alt="Profile" />
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Home;
