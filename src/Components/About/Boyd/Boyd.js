import React from "react";
import BoydPic from './Boyd McMurtrey - Edited.jpg'
export default function Boyd() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="container mx-4 my-4   ">
        <div className="w-64 border">
          <img src={BoydPic} className="w-full" alt="..." />
          <div className="p-4">
            <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
              Boyd McMurtrey
            </h5>
            <p className="text-center">
              Vice President, Global Logistics Center of Excellence{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="bio col-span-3">
        <p>
          Boyd McMurtrey is a former officer in the United States Marine Corps,
          retiring with 28 years of experience in the logistics community. He
          has served as a commander, executive officer, and plans branch head.
          His assignments have included Marine Corps Logistics Command, the
          North Atlantic Treaty Organization in Mons, Belgium, and numerous
          deployments supporting worldwide contingency operations.
        </p>

        <p>
          Boyd is Vice President for the Global Logistics Center of Excellence,
          currently functioning as the primary provider of global logistics
          distribution support for the United States Marine Corps. With a global
          footprint that includes employees in Germany, Australia, Japan,
          Kuwait, Singapore, Guam, and the United States, Cervello is uniquely
          positioned to provide logistics and distribution expertise anywhere it
          might be required.
        </p>
      </div>
    </div>
  );
}
