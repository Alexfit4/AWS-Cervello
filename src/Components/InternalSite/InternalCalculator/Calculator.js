import { React, useState } from "react";
import convert from "convert-units";

import "./Calculator.css";

export default function Calculator() {
  const [Pounds, setPounds] = useState();
  const [Convert, setConvert] = useState();
  const [Option1, setOption1] = useState("lb");
  const [Option2, setOption2] = useState("kg");
  const kiloweightConvert = (e) => {
      
    setPounds(Math.round(convert(Convert).from(Option1).to(Option2)));
    
  };

  const handle = (e) => {
   
    setConvert(e.target.value);
  };

  const handleOption1 = (e) => {
   
    setOption1(e.target.name);
  };

  const handleOption2 = (e) => {
   
    setOption2(e.target.name);
  };
  return (
    <div>
      <h2>Weight Converter</h2>
      <h1 className="font-black text-3xl text-white">
        {" "}
        Conversion:{" "}
        <span name="pounds" id="Pounds">
          {Pounds}{Option2}
        </span>
      </h1>
      <p>Enter a value in the field to convert :</p>

      <div className="grid grid-cols-4 gap-4">
        <div>
          {" "}
          <p>
            <input
              onChange={handle}
              id="Kilograms"
              type="number"
              name="number"
              placeholder="Enter"
              
            />
            <button className="pl-5 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700" onClick={kiloweightConvert}>Convert</button>
          </p>
        </div>
        <div>
          <div className="p-10">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">{Option1}</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="kg"
                    onClick={handleOption1}
                  >
                    Kg
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="lb"
                    onClick={handleOption1}
                  >
                    Lbs
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="km"
                    onClick={handleOption1}
                  >
                    Km
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="mi"
                    onClick={handleOption1}
                  >
                    Miles
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
            <h1 className="font-black text-3xl text-white" >TO:</h1 >
        </div>
        <div>
          <div className="p-10">
            <div className="dropdown inline-block relative">
              <button className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                <span className="mr-1">{Option2}</span>
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
                </svg>
              </button>
              <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
                <li className="">
                  <a
                    className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="kg"
                    onClick={handleOption2}
                  >
                    Kg
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="lb"
                    onClick={handleOption2}
                  >
                    Lbs
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="km"
                    onClick={handleOption2}
                  >
                    Km
                  </a>
                </li>
                <li className="">
                  <a
                    className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    name="mi"
                    onClick={handleOption2}
                  >
                    Miles
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
