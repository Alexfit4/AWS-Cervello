import React from 'react'
import HunterPic from './Hunter Haltom - Edited.jpg'

export default function Hunter() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={HunterPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Hunter Haltom
              </h5>
              <p className="text-center">
                Vice President, Hypersonic C2 & CONOPS Center of Excellence{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            J. Hunter Haltom is a Military and Liaison Officer with over 28
            years of experience working for the Department of Defense as a
            War-gaming and Research Analyst, Executive/Action Officer, and a
            Global Strike Subject Matter Analyst/Expert (SMA/SME).
          </p>

          <p>
            Hunter is Vice President of Hypersonic Command and Control (C2) and
            Concept of Operations (CONOPS) Center of Excellence (CoE) at
            Cervello Technologies, LLC.  This Hypersonic CoE will be an
            ecosystem of interdependent contributors to a continuously evolving
            C2 and CONOPS data repository for stakeholders responsible for a
            Globally Integrated Operations (GIO) mission set.
          </p>

          <p>
            Hunter led the Joint-HyperSonic Strike Planning and Execution
            Command and Control (J-HyperSPEC2) Joint Test (JT) as a Subject
            Matter Analyst / Subject Matter Expert providing engineering, test,
            and analysis services to the Joint Test Director (JTD) in the
            conduct of J-HyperSPEC2 JT.
          </p>
        </div>
      </div>
    );
}
