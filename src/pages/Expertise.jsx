import React from "react";

function Expertise() {
  return (
    <div className="flex flex-col bg-[#F8F8F8F7]  px-20 pt-[300px] pb-[130px]">
      <div className="flex flex-col items-center w-full">
        <div className="flex justify-center gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_388_828)">
              <path
                d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_388_828">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <span className="text-10 font-medium tracking-[2px]">What I do</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
          >
            <g clip-path="url(#clip0_388_828)">
              <path
                d="M15 27.5C21.9036 27.5 27.5 21.9036 27.5 15C27.5 8.09644 21.9036 2.5 15 2.5C8.09644 2.5 2.5 8.09644 2.5 15C2.5 21.9036 8.09644 27.5 15 27.5Z"
                stroke="#1E1E1E"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_388_828">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="text-[100px] sm:text-[150px] md:text-[200px] font-medium tracking-[12.5px] whitespace-nowrap">
          MY EXPERTISE
        </div>
        <div className="w-[65%] h-[1px] bg-black drop-shadow-2xl drop-shadow-zinc-800 mb-[100px]"></div>
      </div>
      <div className="flex flex-col gap-20">
        {/* Map This */}
        <div className="flex flex-col">
          <div className="flex justify-between">
            <div className="text-4xl font-medium">
              BRAND STRATEGY & DEVELOPMENT
            </div>
            <div className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 55 55"
                fill="none"
              >
                <path
                  d="M0.833496 29.1667V25H25.8335V0H30.0002V25H55.0002V29.1667H30.0002V54.1667H25.8335V29.1667H0.833496Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-end text-right">
            <div className="text-2xl font-light">
              Strategy + Growth + Positioning
            </div>
            <div className="text-xl font-extralight max-w-[860px]">
              Leveraging data-driven insights to develop targeted strategies
              that enhance brand positioning, drive growth, and optimize market
              presence.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
