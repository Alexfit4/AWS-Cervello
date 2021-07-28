import React from 'react'
import EmilPic from './Emil Reynolds.jpg'
export default function Emil() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={EmilPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Emil Reynolds
              </h5>
              <p className="text-center">
                Director, Product Development, Sustainment, and Training{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Emil Reynolds is a former Soldier and contractor with an 18-year
            track record of achieving mission critical results in fast-paced,
            austere environments through dynamic action, teamwork, and
            leadership. Upon hanging up his boots, his focus in the civilian
            workforce supporting war-fighters has centered on management and
            advanced concepts and capabilities development.
          </p>

          <p>
            Emil leads within Cervello Global as the Director of Product
            Development. Innovation is his passion, and his in-depth and
            personal experience with Project Management, Experimentation, Test &
            Evaluation, and tactical operations combined with his military
            experience enables him to understand gaps, seams, and redundancies
            to visualize and conceptualize innovative technologies.   
          </p>
        </div>
      </div>
    );
}
