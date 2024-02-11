import React from "react";

const footerLink = [
  {
    head: "Support",
    sub: [
      "Help Centre",
      "AirCover",
      "Anti-discrimination",
      "Disability support",
      "Cancellation options",
      "Report neighbourhood concern",
    ],
  },
  {
    head: "Hosting",
    sub: [
      "Airbnb your home",
      "AirCover for Hosts",
      "Hosting resources",
      "Community forum",
      "Hosting responsibly",
    ],
  },
  {
    head: "Airbnb",
    sub: [
      "Newsroom",
      "New features",
      "Careers",
      "Investors",
      "Airbnb.org emergency stays",
    ],
  },
];

const Middle = () => {
  return (
    <div className="my-10 grid grid-cols-3 gap-4">
      {footerLink.map((item) => (
        <div key={item.head} className="">
          <p className="font-semibold text-lg">{item.head}</p>
          <div>
            {item.sub.map((itemm) => (
              <p key={itemm} className="my-2 cursor-pointer hover:underline">
                {itemm}
              </p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Middle;
