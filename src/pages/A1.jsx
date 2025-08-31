import React from "react";

function A1() {
  return (
    <div className="flex relative py-[130px] px-[114px]">
      <div className="flex flex-col w-full">
        <div className="text-[40px] font-bold mb-10">
          SOCIAL MEDIA STRATEGY: HARLEY STREET HEARING
        </div>
        <div className="flex justify-around gap-2 flex-wrap mb-[150px]">
          {topImages.map((image, index) => (
            <img
              src={image.img}
              alt={image.id}
              className="h-[300px] w-[250px] object-cover"
            />
          ))}
        </div>
        <div className="flex xl:gap-40">
          <div className="h-[650px] w-[350px] ml-[120px] border border-gray-300">
            <img
              src="A1/insta.jpg"
              alt="Instagram Post"
              className="h-full w-full object-fill"
            />
          </div>
          <div className="flex flex-col w-[1000px] gap-20">
            <div className="flex flex-col gap-3">
              <div className="text-[20px] font-bold">
                Project Description / Goals:
              </div>
              <div className="flex flex-col gap-2 text-[20px] font-extralight">
                <span>
                  1. Educate patients by sharing practical hearing health tips
                  and advice.
                </span>
                <span>
                  2. Increase patient engagement by positioning Harley Street
                  Hearing as the go-to authority for hearing care.
                </span>
                <span>
                  3. Boost clinic awareness and build trust with potential
                  patients through consistent, relatable, and expert-led
                  content.
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="text-[20px] font-bold">
                Creative Process & Strategy:
              </div>
              <div className="flex flex-col gap-2 text-[20px] font-extralight">
                <span>
                  1. Educational Campaigns - Developed a series sharing hearing
                  care habits to boost awareness and establish the brand as a
                  trusted expert.
                </span>
                <span>
                  2. Produced short-form content to highlight key features and
                  differentiate products in a competitive market.
                </span>
                <span>
                  3. Product Showcases - Patient Storytelling - Created
                  authentic narrative driving emotional connection and brand
                  trust.
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-20 gap-15">
          <div className="flex text-[20px] font-extralight gap-3">
            <span className="font-bold">Skills used:</span>
            <p>
              Content Planning and Scheduling + Copy writing
              <br /> Communication and Team Collaboration
            </p>
            <p className="ml-2">
              Canva - Graphic Designing <br /> Instagram & Facebook Analytics
              for Reporting
            </p>
          </div>
          <div className="flex flex-col gap-7 text-[20px]">
            <div className="font-bold">Results:</div>
            <div className="flex flex-col font-extralight gap-5">
              <span>
                • Increased Harley Street Hearing’s Instagram engagement by 65%
                in three months through expert-driven content.
              </span>
              <span>
                • The “Hearing Tips” series became one of the most shared
                content formats, driving organic reach.
              </span>
              <span>
                • Patient story campaigns increased appointment bookings by 30%,
                highlighting the power of storytelling.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A1;

const topImages = [
  {
    id: 1,
    img: "A1/1.jpg",
  },
  {
    id: 2,
    img: "A1/2.jpg",
  },
  {
    id: 3,
    img: "A1/3.jpg",
  },
  {
    id: 4,
    img: "A1/4.jpg",
  },
  {
    id: 5,
    img: "A1/5.jpg",
  },
  {
    id: 6,
    img: "A1/6.jpg",
  },
];
