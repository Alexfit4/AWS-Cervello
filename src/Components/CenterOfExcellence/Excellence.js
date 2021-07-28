import React from "react";
import "./Excellence.css";
import Cloggo from "./Assets/cloggo.png";
import sideNavContent from "../SideNav/Content";
import { BrowserRouter as useHistory, Link } from "react-router-dom";

export default function Excellence() {

  return (
    <div>
      <h1 className="font-black text-3xl text-white">Centers of Excellence</h1>

      <div>
        <p className="text-center">
          Cervello Global Utilizes decades of experience to provide critical
          thinking and streamlined management across our Centers of Excellence
          (COE) to provide customers with effective and efficient techniques and
          procedures to ensure success.
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
          <Link to="/GlobalCOE" value="GlobalCOE">
            <button
              name="GlobalCOE"
              className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700"
            >
              Global Logistics Center of Excellence
            </button>
          </Link>

          <Link to="/HyperCOE" value="HyperCOE">
            <button
              name="HyperCOE"
              className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700"
            >
              Hypersonic Center of Excellence
            </button>
          </Link>
        </div>

        <div className="flex-1 pr-96 pt-10">
          <img src={Cloggo} alt="cloggo" />
        </div>
      </div>
    </div>
  );
}
