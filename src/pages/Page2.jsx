import React from "react";

function Page2() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-white text-black py-[10vh] relative">
        <div className="flex flex-col  h-full justify-around">
          <h1 className="xl:text-[100px] font-[900] sm:text-[24px] text-[24px]">
            THE MAKING OF ME
          </h1>
          <h3 className="flex xl:max-w-[900px] xl:text-[30px] sm:text-[12px] sm:max-w-[400px] text-[12px] max-w-[300px] font-semibold">
            Started as a student and progressing through internships, I quickly
            transitioned into client-facing roles, working with over 15 diverse
            brands.
          </h3>
          <div className="flex w-full justify-end">
            <h3 className="xl:max-w-[900px] text-right  xl:text-[30px] sm:text-[12px] sm:max-w-[400px] text-[12px] max-w-[300px] font-semibold">
              My expertise spans coordinating marketing campaigns and leading
              brand strategy, driving growth and audience engagement through
              tailored marketing solutions.
            </h3>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Page2;
