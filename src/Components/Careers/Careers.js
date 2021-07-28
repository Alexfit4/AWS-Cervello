import React from "react";
import Benefits from './2021BenefitRecruitingFlyer.pdf'
export default function Careers() {
  return (
    <div>
      <h1 className="font-black text-3xl text-white">Careers</h1>

      <div>
        <h2 className="text-center">Why Work For Us?</h2>
        <p className="pt-6 pl-60 text-center w-4/5">
          At Cervello Global, every single employee is a valued team member and
          essential to our success. We are a growing service disabled,
          veteran-owned, small business serving the military, government and
          private industry. If you are high performance, mission driven and
          committed to customer excellence, Cervello might be a fit for you.
          Check out our current openings.
        </p>
      </div>

      <div className="pt-10">
        <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
          <a target="_blank" href={Benefits}>
            Check out the benefits!
          </a>
        </button>

        <button className="w-8/12 h-12 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www2.appone.com/Search/Search.aspx?ServerVar=cervellotechnologiesllc.appone.com"
          >
            {" "}
            Career Opportunities
          </a>
        </button>
      </div>
    </div>
  );
}
