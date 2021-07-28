import React from 'react'
import EllinePic from './Elline Binner - Edited.jpg'
export default function Elline() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={EllinePic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Elline Binner
              </h5>
              <p className="text-center">
                Director, Quality Management, Acquisition, & Logistics{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Elline Binner began her career in the defense industry nearly 30
            years ago. She has held a variety of positions including Logistics
            Engineer, Logistics Analyst, Program and Planning Analyst, as well
            as several leadership roles. Her vast knowledge lends itself
            perfectly to finding and obtaining pertinent defense contracts.
          </p>

          <p>
            As a member of Team Cervello, Elline brings a high level of
            knowledge, dedication, and enthusiasm to the organization. She
            specializes in finding and obtaining new lines of effort for
            Cervello to pursue. In addition to this task, she is an expert in
            Supply Chain Management, Performance Based Logistics, Streamlined
            Acquisition Processes, and Planning, Programming, Budgeting, and
            Execution (PPBE) process methodology. Elline is a multi-faceted team
            member who provides help whenever and wherever it is needed.
          </p>
        </div>
      </div>
    );
}
