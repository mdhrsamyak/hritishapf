import React from "react";

function Page2() {
  return (
    <div className="flex max-h-screen">
      <main className="flex-1 bg-white text-black relative">
        <div className="absolute bottom-2 left-2 text-[50px] font-extrabold text-[#E5E2E2F7] ">
          01
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col px-20 justify-around w-[63%]">
            <div className="max-w-[550px] text-[12px] md:text-[16px] lg:text-[20px] font-extralight ">
              Started as a student and progressing through internships, I
              quickly transitioned into client-facing roles, working with over
              15 diverse brands.
            </div>
            <div className="w-full text-[12px] md:text-[16px] lg:text-[20px] font-extralight flex justify-end">
              <div className="max-w-[550px]">
                My expertise spans coordinating marketing campaigns and leading
                brand strategy, driving growth and audience engagement through
                tailored marketing solutions.
              </div>
            </div>
            <div className="max-w-[550px] text-[12px] md:text-[16px] lg:text-[20px] font-extralight">
              Step into my creative space, where ideas become stories.
            </div>
          </div>
          <div className="flex w-[36%] h-screen">
            <img src="/page2.jpg" alt="image" className="h-full w-full cover" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page2;
