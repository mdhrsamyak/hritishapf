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
        <p className="text-[12px] font-light sm:w-[400px] lg:w-full w-[220px] absolute right-5 bottom-22 md:text-[40px] sm:text-[16px] ">
          Step into my creative space, where ideas become stories.
        </p>
      </main>
    </div>
  );
}

export default HomePage;
