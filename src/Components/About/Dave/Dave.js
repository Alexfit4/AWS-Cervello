import React from 'react'
import DavPic from './Dave Ingram - Edited.jpg'
export default function Dave() {
    return (
      <div className="grid grid-cols-5 gap-3">
        <div className="container mx-4 my-4   ">
          <div className="w-64 border">
            <img src={DavPic} className="w-full" alt="..." />
            <div className="p-4">
              <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Dave Ingram
              </h5>
              <p className="text-center">
                Chief Global Workforce Development Officer
              </p>
            </div>
          </div>
        </div>

        <div className="bio col-span-3">
          <p>
            David Ingram proudly served 26 years in the United States Marine
            Corps (USMC) retiring as a USMC 3112 (E9/MGySgt) with honors; and he
            is a recognized leader in military materiel distribution and
            workforce management with more than 30 years overall of Global
            Supply Chain, Logistics, and Distribution Management experience.
            While serving in the USMC as a Distribution Management Chief (DMC),
            he developed a highly respected reputation.
          </p>

          <p>
            David’s mission is to build a global family of logisticians and
            other professional disciplines using the company’s tip-of-the-spear
            service-minded methodology; and he works tirelessly in partnership
            with the Corporate Vice President of Logistics and the Global
            Business and Workforce Development Directors running Cervello Global
            Subsidiary companies in six countries to achieve his goals. As one
            of the company’s leading experts in global logistics planning,
            distribution, mobility, and warehousing, David continues to provide
            Distribution Management Consulting as a member of the company’s
            Distribution Management Support Services.
          </p>
        </div>
      </div>
    );
}
