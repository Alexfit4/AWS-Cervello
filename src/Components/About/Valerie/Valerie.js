import React from 'react'
import ValPic from './Valerie Mahan - Edited.jpg'
export default function Valerie() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={ValPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Valerie Mahan
              </h5>
              <p className="text-center">
                Director, Finance, Accounting, & Human Capital Management
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            Valerie Mahan has more than 15 years of specialized experience with
            expert knowledge in Talent Management, HRIS, Payroll, Project
            Management, and more. She is a Certified SAP SuccessFactors Senior
            Consultant with over 10+ years of concrete functional and technical
            experience across multiple modules with the proven and effective
            ability to analyze, support, implement and deliver SuccessFactors
            cloud solutions successfully as per business requirements.
            Dedicated, dependable and adaptable individual who works well under
            pressure.
          </p>

          <p>
            Valerie’s role within Cervello has her wearing many hats. She cares
            for every aspect of each employee’s working life as they become part
            of the Cervello family. She develops comprehensive strategic
            recruiting and retention plans to meet Cervello's human capital
            needs and provides overall leadership and guidance to the HR
            function. Valerie is dedicated to her Cervello family and is a
            dependable team leader.
          </p>
        </div>
      </div>
    );
}
