import React from "react";

function Page3() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1  text-black py-[20vh] relative">
        <div className="flex w-full relative">
          <div className="absolute xl:-left-100 top-1/2 -translate-y-1/2 rotate-[270deg] origin-center text-red-600 font-extrabold xl:text-[120px] whitespace-nowrap sm:text-[60px] sm:-left-40 text-[50px] -left-40">
            MY EXPERTISE
          </div>
          <div className="flex justify-end w-full">
            <div className="flex flex-col  items-end xl:max-w-[600px] sm:max-w-[400px] max-w-[300px]">
              {whatido.map((text, i) => (
                <div
                  className="flex flex-col w-full xl:py-8 sm:py-5 border-b border-gray-500 "
                  key={i}
                >
                  <h3 className="xl:text-4xl sm:text-base text-base font-semibold uppercase">
                    {text.text1}
                  </h3>
                  <h4 className="xl:text-xl sm:text-sm text-sm font-bold text-gray-600">
                    {text.text2}
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

const whatido = [
  {
    text1: "Social Media Management",
    text2: "Monthly Calendar + Copywriting",
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
