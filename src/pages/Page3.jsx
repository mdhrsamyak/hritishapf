import React from "react";

function Page3() {
  return (
    <div className="flex min-h-screen" id="home">
      <main className="flex-1 bg-white text-black py-[10px] relative">
        <div className="flex w-full">
          <div className="flex-shrink-0 transform rotate-z-270 origin-center text-red-600 font-extrabold text-[120px] inline-flex">
            MY EXPERTISE
          </div>
          <div className="flex flex-col w-full items-end">
            {whatido.map((text, i) => (
              <div
                className="flex flex-col w-full py-8 border-b border-gray-500"
                key={i}
              >
                <span className="text-4xl font-semibold">{text.text1}</span>
                <span className="text-xl font-bold text-gray-600">
                  {text.text2}
                </span>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const whatido = [
  {
    text1: "Social Media Management",
    text2: "monthly calendar + copywright",
  },
  {
    text1: "Brand Strategy & Development",
    text2: "Strategy + Growth + Positioning",
  },
  {
    text1: "Brand Identity Creation",
    text2: "Design + Consistency + Recognition",
  },
  {
    text1: "Content Marketing",
    text2: "Creation + Editing + Engagement + Conversion",
  },
  {
    text1: "Paid Advertising Management",
    text2: "Campaigns + ROI + Optimization",
  },
  {
    text1: "Influencer Marketing",
    text2: "Collaboration + Visibility",
  },
  {
    text1: "Analytics & Reporting",
    text2: "Performance Report + Recommendations",
  },
];

export default Page3;
