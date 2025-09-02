import React from "react";

function Page2() {
  return (
    <div className="flex h-screen">
      <main className="flex-1 bg-white text-black relative">
        <div className="absolute bottom-2 left-2 text-[30pxA] lg:text-[50px] font-extrabold text-[#E5E2E2F7] z-20">
          01
        </div>
        <div className="flex flex-col lg:flex-row justify-between w-full h-full">
          <div className="flex flex-col px-10 py-auto lg:px-20 lg:py-0 justify-around lg:w-[63%] z-20 h-full">
            <div className="max-w-[550px] text-[20px] md:text-[20px] lg:text-[20px] font-extralight ">
              Started as a student and progressing through internships, I
              quickly transitioned into client-facing roles, working with over
              15 diverse brands.
            </div>
            <div className="w-full text-[20px] md:text-[20px] lg:text-[20px] font-extralight flex justify-end">
              <div className="max-w-[550px]">
                My expertise spans coordinating marketing campaigns and leading
                brand strategy, driving growth and audience engagement through
                tailored marketing solutions.
              </div>
            </div>
            <div className="max-w-[550px] text-[20px] md:text-[20px] lg:text-[20px] font-extralight">
              Step into my creative space, where ideas become stories.
            </div>
          </div>
          <div className="flex absolute z-10 top-0 right-0 w-[100%] lg:relative  lg:w-[36%] h-screen">
            <img src="/page2.jpg" alt="image" className="h-full w-full cover" />
          </div>
        </div>
        <div className="absolute top-0 left-0 w-full h-screen lg:hidden bg-gray-700 z-11 opacity-30"></div>
      </main>
    </div>
  );
}

export default Page2;
