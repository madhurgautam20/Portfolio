import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import mongoDB from "../../public/mongodb.jpg";
import javascript from "../../public/javascript.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import oracle from "../../public/oracle.png";

const Experience = () => {
  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: reactjs,
      name: "React.js",
    },
    {
      id: 4,
      logo: nodejs,
      name: "Node.js",
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
    },
    {
      id: 6,
      logo: mongoDB,
      name: "MongoDB",
    },
    {
      id: 7,
      logo: oracle,
      name: "Oracle",
    }
  ];

  return (
    <div name="Experience">
    <div  className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p >I have more than 6 months of experience in below technologies.</p>
        <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-5 gap-5 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] p-1 cursor-pointer hover:scale-105 duration-300"
              key={id}
            >
              <img
                src={logo}
                alt={name}
                className="w-[150px] rounded-full "
              />
              <div className="text-center">
                <div className="">{name}</div>
               
              </div>
              
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default Experience;
