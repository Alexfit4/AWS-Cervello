import React from 'react'
import WaltPic from './Walt Gartner - Edited.jpg'
export default function Walter() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={WaltPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Walter Gartner
              </h5>
              <p className="text-center">
                Chief Information Officer/Vice President, Corporate Systems
                Development & National Security{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Walter Gartner is a Military and Intelligence Liaison Officer with
            over 34 years of experience working for the Department of Defense as
            a Design Engineer, U.S. Air Force Officer, and Signals Intelligence
            (SIGINT) Professional. Walter’s in-depth knowledge of SIGINT
            postured him to serve as NSA’s Signals Intelligence Directorate’s
            (SID) advocate for U.S. European Command, North Atlantic Treaty
            Organization, U.S. Joint Forces Command, and the Joint Warfare
            Analysis Center.
          </p>

          <p>
            Walter is an employee at Cervello and is serving as the Joint
            Interoperability through Data Centricity Joint Test Liaison to U.S.
            Central Command (USCENTCOM). In his role as Chief Information
            Officer/Vice President, Corporate Systems Development & National
            Security, Walter ensures that Cervello is at the height of
            cybersecurity.
          </p>
        </div>
      </div>
    );
}
