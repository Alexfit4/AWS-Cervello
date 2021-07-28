import React from "react";
import Australia from './routlanning.png'
export default function Routing() {
  return (
    <div>
      <h1 className="font-black text-3xl text-white pb-5">
        Routing Planning
      </h1>

      <div class="grid grid-cols-2 gap-4">
        <div>
          {" "}
          <div className="bg-white text-black rounded-sm border-black border-opacity-100 border-solid border-4">
            <p className=" text-center"> Weather Report</p>
          </div>
          <div className="bg-white text-black mt-5 rounded-sm border-black border-opacity-100 border-solid border-4">
            <p className="text-center">Route Advisories</p>
          </div>
        </div>

        <div>
          <img src={Australia} alt="" />
        </div>
      </div>
    </div>
  );
}
