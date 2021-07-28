import React from "react";
import "./john.css";
import JohnPic from './John Mahan 2 - Edited.jpg'
export default function John() {
  return (
    <div className="grid grid-cols-5 gap-3">
      <div className="container mx-4 my-4   ">
        <div className="w-64 border">
          <img
            src={JohnPic}
            className="w-full"
            alt="..."
          />
          <div className="p-4">
            <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
              John Mahan
            </h5>
            <p className="text-center">President & CEO</p>
          </div>
        </div>
      </div>

      <div className="bio col-span-3">
        <p>
          The President and CEO of Cervello Global Corporation dba Cervello
          Technologies, LLC which specializes in Global Acquisition & Logistics,
          Applied Sciences for Critical Mission Capabilities, Hypersonic
          Technology Research in the areas of Command & Control (C2) and Concept
          of Operations (CONOPS) scenario development for use in Test &
          Evaluation, Modelling & Simulation, and Field Testing. Cervello
          currently has contracts with Office Secretary of Defense (OSD),
          National Reconnaissance Office (NRO), and General Services
          Administration (GSA). As the Facility Security Officer (FSO).
        </p>

        <p>
          Mr. Mahan maintains an Active TS and is an active member of the
          Defense Security Service (DSS) and Counterintelligence community. He
          holds a Bachelor of Science (BS) Information Technology with
          concentration in Software Engineering; Associate of Arts (AA)
          Information Technology; Certificate from George Washington University
          School of Business for Government Acquisition, Office of Management &
          Budget (OMB) Exhibit 300x, Business Case Analysis development; Federal
          Enterprise Architecture (FEA) & Service Oriented Architecture (SOA);
          and Homeland Security Presidential Directives (HSPD-x) and President’s
          Management Agenda.
        </p>
      </div>
    </div>
  );
}
