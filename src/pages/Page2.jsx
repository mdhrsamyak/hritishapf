import React from "react";

function Page2() {
  return (
    <div className="flex min-h-screen" id="home">
      <main className="flex-1 bg-white text-black py-[10vh] relative">
        <div className="flex flex-col  h-full justify-around">
          <div className="flex max-w-[900px] text-[30px] font-semibold">
            Started as a student and progressing through internships, I quickly
            transitioned into client-facing roles, working with over 15 diverse
            brands.
          </div>
          <div className="flex w-full justify-end">
            <div className=" max-w-[900px]   text-[30px] font-semibold">
              My expertise spans coordinating marketing campaigns and leading
              brand strategy, driving growth and audience engagement through
              tailored marketing solutions.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page2;
