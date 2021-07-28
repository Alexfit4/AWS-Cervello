import { React } from "react";
import "./About.css";
import CardInfo from "./CardInfo";
import {
  BrowserRouter as Router,
  useHistory,
} from "react-router-dom";

export default function AboutUs() {
  const history = useHistory();
  const handleClick = (event) => {
    let str = event.target.value;

    let splitted = str.split(" ");
    let first = splitted[0];

    return history.push(`/${first}`);
  };
  return (
    <Router>
      <div>
        <h1 className="font-black text-3xl text-white">Who We Are</h1>
        <div className="text-left">
          <h2 className="font-black ">HIGH PERFORMANCE, MISSION DRIVEN</h2>
          <p>
            Cervello Global, formed in 2021 by John Mahan (President/Chief
            Operating Officer) leads the market in logistics support in
            Australia. John is an Army veteran with over 20 years' experience in
            military intelligence, information technology and systems, and cyber
            security.
          </p>
          <p>
            Cervello Global of Australia Pty Ltd is dedicated to providing
            support to the Australian Government and Defence Industry with
            logistic support to maintain Australia's sovereign resilience. We
            provide a high standard of communication and logistic support to our
            customers and create cost-effect logistic solutions to meet our
            customer's specific requirement in delivery. With the latest global
            tracking capabilities, the customer has visibility to track their
            consignment.
          </p>
          <h2 className="font-black ">MISSION AND VISION</h2>
          <p>
            Cervello's mission is to exceed our customers' expectations by
            providing quality solution-focused consulting and technology
            engineering services; on time and within scope and budget. We are
            High Performance, MIssion Driven. Our vision is to position the
            company as a global business consulting and solution engineering
            firm, with the proven knowledge, skills, and abilities to develop
            strategic-oriented architectures, in support of dynamic information
            sharing and data interoperability.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-1">
          {CardInfo.map((employee) => {
            return (
              <div className="container mx-4 my-4 " key={employee.id}>
                <div className="w-64 border">
                  <img src={employee.photo} className="w-full" alt="..." />
                  <div className="p-4">
                    <h5 className="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                      {employee.name}
                    </h5>
                    <p className="text-center">{employee.title}</p>

                    <button
                      value={employee.name}
                      type="button"
                      onClick={handleClick}
                      className="border-2 border-black text-white font-bold py-.5 px-2 rounded"
                    >
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Router>
  );
}
