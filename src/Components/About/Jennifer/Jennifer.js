import React from "react";
import JenPic from './Jennifer King - Edited.jpg'
export default function Jennifer() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="container mx-4 my-4   ">
        <div className="w-64 border">
          <img src={JenPic} className="w-full" alt="..." />
          <div className="p-4">
            <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
              Jennifer King
            </h5>
            <p className="text-center">
              Director, Technical Writing & Publications{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bio col-span-3">
        <p>
          Jennifer King is a former Project Editor and Writer for a metro
          newspaper who transitioned to Technical Writer for the United States
          Marine Corps. She has been held in high regard for her dedication and
          quality of work throughout her entire career. She prides herself on
          attention to detail and production of first-rate material.
        </p>

        <p>
          Jennifer’s role with Cervello Global is to produce high-quality
          documents and publications that represent and elevate Cervello’s
          capabilities, goals, and accomplishments. She assists all of her
          Cervello teammates with any of their writing or publication endeavors.
        </p>
      </div>
    </div>
  );
}
