import React from "react";
import html from "../../public/html.png";
import mongoDB from "../../public/mongodb.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";

const Portfolio = () => {
  const cardItem = [
    {
      id: 1,
      logo: mongoDB,
      name: "Database saver with register and login page",
      sourceLink: "https://github.com/madhurgautam20/PROJECT-1.git", // Add your specific link
    },
    {
      id: 2,
      logo: reactjs,
      name: "React.js",
      sourceLink: "https://github.com/yourusername/react-project", // Add your specific link
    },
    {
      id: 3,
      logo: nodejs,
      name: "Node.js",
      sourceLink: "https://github.com/yourusername/node-project", // Add your specific link
    },
    {
      id: 4,
      logo: html,
      name: "HTML",
      sourceLink: "https://github.com/yourusername/html-project", // Add your specific link
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
      sourceLink: "https://github.com/yourusername/javascript-project", // Add your specific link
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold text-xl">Featured Project</span>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {cardItem.map(({ id, logo, name, sourceLink }) => (
            <div
              className="w-full h-full border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                alt={name}
                className="w-[120px] h-[120px] p-1 rounded-full border-[2px] mx-auto"
              />
              <div className="text-center">
                <div className="px-2 font-bold text-xl mb-2">{name}</div>
                <p className="px-2 text-gray-700">
                  View Source Code on GitHub and you can check this project's videos on YouTube.
                </p>
              </div>
              <div className="flex justify-around px-6 py-4 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                <a href={sourceLink} target="_blank" rel="noopener noreferrer">
                  <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Sourcecode</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
