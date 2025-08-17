function HomePage() {
  return (
    <div className="flex min-h-screen">
      <main className="flex-1 bg-white text-black py-[10vh] relative">
        <h1
          className="flex justify-center items-center font-bold w-full 
                text-[65px] sm:text-[100px] md:text-[150px] xl:text-[200px] 2xl:text-[300px]
                leading-none mt-50 sm:mt-20 "
        >
          HRITISHA
        </h1>
        <p className="text-[12px] font-light absolute right-5 bottom-22 md:text-[40px] sm:text-[16px] ">
          Step into my creative space, where ideas become stories.
        </p>
      </main>
    </div>
  );
}

// function HomePage() {
//   return (
//     <div className="flex min-h-screen" id="home">
//       <main className="flex-1 bg-white text-black py-[10vh] relative flex flex-col justify-center items-center">
//         {/* Main name */}
//         <div
//           className="font-bold text-center w-full
//                         text-[150px] sm:text-[180px] md:text-[220px] lg:text-[300px]
//                         leading-none"
//         >
//           HRITISHA
//         </div>

//         {/* Subtitle */}
//         <div
//           className="text-center mt-6 px-4 sm:px-8 md:px-16
//                         text-[20px] sm:text-[25px] md:text-[30px] lg:text-[40px]
//                         font-light max-w-3xl"
//         >
//           Step into my creative space, where ideas become stories.
//         </div>
//       </main>
//     </div>
//   );
// }

export default HomePage;
