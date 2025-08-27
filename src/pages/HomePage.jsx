function HomePage() {
  return (
    <div className="flex min-h-screen bg-[url('/bg-home.jpg')] bg-cover cursor-default">
      <main className="flex flex-col justify-center items-center text-[#777676] w-full">
        <h1
          className="font-bold text-[65px] sm:text-[100px] md:text-[150px] xl:text-[200px] 2xl:text-[300px]
                leading-none mt-50 sm:mt-20 "
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
