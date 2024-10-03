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
  const [isDarkMode, setIsDarkMode] = useState(false);

  function toggletheme() {
    document.documentElement.classList.toggle("dark");
  }
  const label = { inputProps: { "aria-label": "Switch demo" } };

  return (
    <>
      <div className="dark:bg-black dark:text-white min-h-screen">
        <button
          onClick={toggletheme}
          className="absolute right-5 md:top-24 md:text-xl top-60 text-sm rounded-full text-black bg-white  dark:bg-black dark:text-white"
        >
          <DarkModeToggle
            onChange={setIsDarkMode}
            checked={isDarkMode}
            size={60}
          />
        </button>
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
