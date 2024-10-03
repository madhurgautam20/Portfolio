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
      name: "MongoDb",
    },
   
    {
      id: 2,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 3,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 4,
      logo: html,
      name: "HTML",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
  ];

  return (
    <div name="Portfolio" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
        <span className="underline font-semibold">Featured Project</span>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => (
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
                  View Source Code on GitHub and you can check these project's
                  videos on YouTube.
                </p>
              </div>
              <div className="flex justify-around px-6 py-4 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Sourcecode</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
