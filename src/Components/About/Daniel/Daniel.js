import React from 'react'
import DanPic from './Dan Headshot - Edited.jpg'

export default function Daniel() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={DanPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Daniel Grenier
              </h5>
              <p className="text-center">
                Vice President, Applied Sciences for Critical Mission Systems
                C5ISR T&E{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Daniel Grenier has 39 years of government and civilian leadership
            experience. He ascended to the rank of Colonel while active in the
            United States Air Force. He possesses extensive test & evaluation
            and project management experience from time spent in the following
            roles: AFOTEC Detachment Commander, Combat Plans Operations Officer,
            Test Flight Commander, Test Director, Lead System Engineer, HQ ACC
            B-1 Requirements Division Chief, College Professor, and DoDAF
            Architect. 
          </p>

          <p>
            During his time with Cervello, Daniel has assisted in the
            development of an innovative assessment methodology designed to
            assess Tactics, Techniques, and Procedures (TTP) as part of the
            DOT&E Joint Test & Evaluation (JT&E) Quick Reaction Test (QRT)
            program. His expertise has been utilized to increase the rapidity of
            testing which, in turn, puts necessary tools in the hands of
            war-fighters around the world.
          </p>
        </div>
      </div>
    );
}
