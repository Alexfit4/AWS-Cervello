import React from 'react'
import KazPic from './Kaz McMillan - Headshot.PNG'
export default function Karen() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={KazPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Karen McMillan
              </h5>
              <p className="text-center">
                Director of Business & Workforce Development Cervello Global of
                Australia Pty Ltd{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Karen McMillan proudly served 32 years in the Australian Defence
            Forces retiring as a Logistics Warrant Officer in the Australian
            Army for the US Marine Support Coordination Team. Karen is a highly
            respected leader in the field of global supply chain management
            specializing in the areas of global logistics distribution,
            marine-air-ground task force planning, purchasing, and mobility.
          </p>

          <p>
            Karen’s role within Cervello Global of Australia is to develop and
            manage our growing customer base for Cervello Global of Australia,
            Pty Ltd; and to effectively recruit, train and support the company’s
            workforce throughout Australia and nearby nations.
          </p>
        </div>
      </div>
    );
}
