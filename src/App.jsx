import React, { useState } from "react";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import About from "./component/About";
import Portfolio from "./component/Portfolio";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import Contact from "./component/Contact";
import { Toaster } from "react-hot-toast";
import DarkModeToggle from "react-dark-mode-toggle";

function App() {
  const [isDarkMode, setIsDarkMode] = useState();

  function toggletheme() {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <div
          onClick={toggletheme}
          className="absolute right-5 md:top-24 md:text-xl top-60 text-sm rounded-full text-black bg-white dark:bg-black dark:text-white cursor-pointer"
        >
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </div>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
