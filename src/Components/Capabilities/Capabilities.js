import React from "react";
import { BrowserRouter as useHistory, Link } from "react-router-dom";
import Helicopter from "./IMG_4160.png";
import sideNavContent from "../SideNav/Content";
import "./Capabilities.css";

export default function Capabilities() {
  const handleClick = (event) => {
    let str = event.target.value;

    return window.location.replace(`/${str}`);
  };

  return (
    <div>
      <h1 className="font-black text-3xl text-white">Capabilities</h1>

      <div>
        <p className="text-center">
          Cervello Global applies decades of collective experience and expertise
          to support your mission. Our past performance shows our commitment to
          the highest levels of excellence and mission focus ensuring customer
          success.
        </p>
      </div>

      <div className="flex ">
        <div className="flex-1 pb-96 pt-20">
          {sideNavContent.map((x) => {
            return (
              <div key={x.title} className="container">
                <Link to={x.link}>
                  <img className="w-40" src={x.pic} alt="" />
                  <div className="bottom-right">{x.title}</div>
                </Link>
              </div>
            );
          })}
        </div>
        <div className=" flex-1 pt-20 ">
          <ul>
            <li>
              <Link to="/Global" value="Global">
                <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
                  Global Logistics
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Applied" value="Applied">
                <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
                  Applied Sciences
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Future" value="Future">
                <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
                  Future Force Modernization
                </button>
              </Link>
            </li>
            <li>
              <Link to="/Hypersonic" value="Hypersonic">
                <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
                  Hypersonic and Emerging Technologies
                </button>
              </Link>
            </li>
          </ul>
    
        </div>

        <div className="flex-1 pr-96 pt-10">
          <img src={Helicopter} alt="cloggo" />
        </div>
      </div>
    </div>
  );
}
