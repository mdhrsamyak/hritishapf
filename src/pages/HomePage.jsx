function HomePage() {
  return (
    <div className="flex min-h-screen bg-[url('/bg-home.jpg')] bg-contain bg-no-repeat cursor-default sm:bg-contain xl:bg-cover">
      <main className="flex flex-col justify-center items-center text-[#777676] w-full">
        <h1
          className="font-bold text-6xl xs:text-[90px] md:text-[120px] lg:text-[200px] 2xl:text=[290px]
                leading-none mt-20 sm:mt-50"
        >
          HRITISHA
        </h1>
        <p className="text-[12px] font-extralight md:text-[30px] sm:text-[16px]">
          MARKETING COORDINATOR AND SOCIAL MEDIA MANAGER
        </p>
      </main>
    </div>
  );
}

export default HomePage;
