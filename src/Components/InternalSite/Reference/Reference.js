import React from "react";

export default function Reference() {
  const documents = [
    {
      document: "Australian Dangerous Goods Code",
      description:
        "The Australian Code for the Transport of Dangerous Goods by Road & Rail (ADG Code) sets out the requirements for transporting dangerous goods by road or rail.",
      link: "https://www.ntc.gov.au/codes-and-guidelines/australian-dangerous-goods-code",
    },
    {
      document:
        "Transport of Dangerous Goods by Road and Rail Legislation Status",
      description:
        "Each state and territory implements the updated Australian Dangerous Goods Code and associated updates to their dangerous goods transport regulations separately.",
      link: "https://www.infrastructure.gov.au/transport/australia/dangerous/transport_dangerous_goods.aspx",
    },
    {
      document: "List of prohibited items",
      description:
        "​Australian Government COVID-19 travel restrictions and information for visa holders​.",
      link: "https://www.abf.gov.au/importing-exporting-and-manufacturing/prohibited-goods/list-of-items",
    },
    {
      document: "PDF",
      description: "PDF",
      link: "https://ustr.gov/sites/default/files/uploads/agreements/fta/australia/asset_upload_file148_5168.pdf",
    },
    {
      document: "Free Trade Agreements",
      description: "Free Trade Agreements",
      link: "https://ustr.gov/trade-agreements/free-trade-agreements",
    },
  ];
  return (
    <div>
      <h1>Reference Library works!</h1>
      <div className="pb-10 ">
        <input
          type="text"
          placeholder="Default focus style"
          class="border-black rounded-lg border-4 mr-10 ..."
        />
        <button className=" h-10 px-6 text-indigo-100 transition-colors duration-150 bg-indigo-700 rounded-lg focus:shadow-outline hover:bg-gray-700">
          Search
        </button>
      </div>

      <div>
        <table class="table-auto  border border-black  ">
          <thead>
            <tr>
              <th class="w-1/4 border border-black  ...">Document</th>
              <th class="w-1/2 border border-black ...">Description</th>
            </tr>
          </thead>
          <tbody>
            {documents.map((x, index) =>{
              return (
                <tr key={index}>
                  <td class="border border-black">
                    <a href={x.link}>{x.document}</a>
                  </td>
                  <td class="border border-black">{x.description}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
