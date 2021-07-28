import React from "react";
import { BrowserRouter as  Link } from "react-router-dom";
import sideNavContent from "../../SideNav/Content";
import './global.css'

export default function GlobalCOE() {
  return (
    <div>
      <h1 className="font-black text-3xl text-white pt-10 pb-10">
        Global Center of Excellence
      </h1>
      <div className="flex">
        <div className=" pb-96 pt-20 flex-1">
          {sideNavContent.map((x) => {
            return (
              <div key={x.title} className="container">
                <Link to={x.link}>
                  <img className="w-40" src={x.pic} alt="" />
                  <div className="bottom-right">{x.title}</div>
                </Link>
              </div>
            );
          })}
        </div>

        <div className="flex-1 content pr-96 ...">
          <p>
            Cervello Global's Logistics Center of Excellence (CoE) uses our
            subject matter expertise to shape logistics strategy, execute and
            support strategic logistics planning, and drive management across
            the world in hte near, mid, and far term. The Center of Excellence
            focuses specifically on building the proprietary tools, templates,
            guidelines, analytics, workflows, strategic multi-year scalable and
            tailorable plans, and compliance management capabilities. Our
            subject matter experts bring a variety of experience from industry
            and government sectors with extensive knowledge of both operations
            and strategic staging.
          </p>

          <p>
            Our Logistics CoE centralizes technology, processes and people
            needed to collect data that provides visibility required to match
            objectives and goals of your business. We provide insight to needed
            data on global transportation, warehouse management, distribution,
            and more to provide a unified, optimized supply chain that is
            imperative across multiple markets.
          </p>

          <p>
            Cervello provides services such as supplier performance management,
            risk mitigation, customs clearance, visibility control and alert
            management. Through these efforts, we allow for complete
            operational, tactical and strategic control throughout the supply
            chain.
          </p>
        </div>
      </div>
    </div>
  );
}
