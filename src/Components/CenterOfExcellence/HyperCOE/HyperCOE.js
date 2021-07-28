import React from "react";
import CervelloHyper from "./Assets/cervello_hypersonic-coe.png";
import Precise from "./Assets/precisionstrikelogo.png";
import "./Hyper.css";
export default function HyperCOE() {
  return (
    <div>
      <h1 className="font-black text-3xl text-white">
        Hypersonic Center Of Excellence
      </h1>
      <div class="flex ...">
        <div class="flex-auto ...">
          <img className="logo px-10" src={CervelloHyper} alt="" />
        </div>
        <div class="flex-auto ...">
          <p>
            The Cervello Hypersonic CoE is an ecosystem of interdependent
            contributors to a continuously evolving innovative Technology,
            Command Control (C2), and Concept of Operations (CONOPS) data
            repository for stakeholders responsible for a Globally Integrated
            Operations (GIO) mission set. Utilizing decades of experience in
            R&D, Experimentation (Live, Virtual, and Constructive) The Cervello
            models for a centralized Hypersonic CoE functions in several parts:
          </p>
        </div>
        <div class="flex-auto ...">
          <img className=" logo px-10" src={Precise} alt="" />
        </div>
      </div>
    </div>

  );
}

