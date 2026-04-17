import { useState } from "react";

import "../../styles/animations/animations.css";

export default function PlansCard({ planName, description, price, img, color }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className=" w-80 h-100 perspective">
      <div
        className={`relative w-full h-full transition-transform duration-700 transform-style preserve-3d ${
          flipped ? "rotate-y-180" : ""
        }`}
      >
        {/* FRONT */}
        <div className="absolute w-full h-full backface-hidden bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col">
          <img
            src={img}
            alt={planName}
            className="cover w-full h-full object-cover"
          />

          <button
            onClick={() => setFlipped(true)}
            className="absolute flex justify-center items-center bottom-4 right-4 h-12 w-12 rounded-full bg-white shadow-md hover:scale-110 transition cursor-pointer"
          >
            <img src="/plans/update.png" className="h-7 w-7" />
          </button>
        </div>

        {/* BACK */}
        <div className="absolute w-full h-full rotate-y-180 backface-hidden bg-white rounded-2xl shadow-lg p-6 flex flex-col justify-between">
          <div>
            <h3 className={`text-3xl font-bold`} style={{ color: `var(${color})` }}>{planName}</h3>
            <ul className="h-full text-gray-600 flex flex-col justify-center items-center gap-2">
              {description.map((item, index) => (
                <li key={index} className="flex items-center justify-center text-sm">
                  • {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-between items-end">
            <span className={`text-xl font-semibold p-3 rounded-4xl text-white`} style={{ backgroundColor: `var(${color})` }}>{price}</span>

            <button
              onClick={() => setFlipped(false)}
              className="flip h-12 w-12 flex justify-center items-center  rounded-full bg-white shadow-md hover:scale-110 transition cursor-pointer"
            >
              <img src="/plans/update.png" className="h-7 w-7" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
